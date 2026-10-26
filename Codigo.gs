/**
 * Encuesta post-DIA · Colegio San Agustín 2026
 * Backend en Apps Script: sirve index.html y guarda cada respuesta como una fila.
 *
 * Instalación (recomendada: script vinculado a la hoja):
 *   1. Abre la Google Sheet de respuestas → Extensiones → Apps Script.
 *   2. Pega este archivo como Código.gs y crea un archivo HTML llamado "index"
 *      con el contenido de index.html.
 *   3. Implementar → Nueva implementación → Aplicación web
 *        Ejecutar como: Yo
 *        Quién tiene acceso: Cualquier usuario   (así la encuesta es anónima)
 *   4. Ejecuta generarLinks() para obtener el link de cada curso.
 */

// Déjalo vacío si el script está vinculado a la hoja. Si es un script suelto, pega aquí el ID de la hoja.
const SHEET_ID = '';
const HOJA_RESPUESTAS = 'Respuestas';
const CURSOS_VALIDOS = ['6B', '7B', '8B', '1M', '2M', '3M', '4M'];

function libro_() {
  return SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

/** Sirve la encuesta. El curso llega en el link: .../exec?curso=7B */
function doGet(e) {
  const pedido = String((e && e.parameter && e.parameter.curso) || '').toUpperCase();
  const curso = CURSOS_VALIDOS.indexOf(pedido) >= 0 ? pedido : null; // curso inválido → se le pregunta

  const html = HtmlService.createHtmlOutputFromFile('index').getContent().replace(
    'window.ES_APPS_SCRIPT=false;window.CURSO_DESDE_LINK=null;/*INYECCION*/',
    'window.ES_APPS_SCRIPT=true;window.CURSO_DESDE_LINK=' + JSON.stringify(curso) + ';'
  );

  return HtmlService.createHtmlOutput(html)
    .setTitle('Encuesta post-DIA · San Agustín')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** Recibe la fila desde el formulario y la agrega a la hoja. */
function guardarRespuesta(datos) {
  if (!datos || typeof datos !== 'object') throw new Error('Respuesta vacía');

  // Evita que dos envíos simultáneos escriban en la misma fila.
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const hoja = libro_().getSheetByName(HOJA_RESPUESTAS) || libro_().insertSheet(HOJA_RESPUESTAS);

    datos.marca_tiempo = new Date(); // la hora la pone el servidor, no el navegador
    if (CURSOS_VALIDOS.indexOf(datos.curso) < 0) datos.curso = 'DESCONOCIDO';

    // Encabezados: se crean la primera vez y se amplían si aparece una columna nueva.
    let encabezados = hoja.getLastRow() ? hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0] : [];
    const nuevas = Object.keys(datos).filter(function (k) { return encabezados.indexOf(k) < 0; });
    if (nuevas.length) {
      hoja.getRange(1, encabezados.length + 1, 1, nuevas.length).setValues([nuevas]).setFontWeight('bold');
      encabezados = encabezados.concat(nuevas);
      hoja.setFrozenRows(1);
    }

    const fila = encabezados.map(function (col) { return limpiar_(datos[col]); });
    hoja.appendRow(fila);
  } finally {
    lock.releaseLock();
  }
  return true;
}

/** Evita que un texto escrito por un estudiante se interprete como fórmula. */
function limpiar_(v) {
  if (v === undefined || v === null) return '';
  if (v instanceof Date || typeof v === 'number') return v;
  const s = String(v).slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

/** Escribe en el registro (Ver → Registros) el link de cada curso. Ejecutar después de implementar. */
function generarLinks() {
  const url = ScriptApp.getService().getUrl();
  if (!url) throw new Error('Primero implementa el script como aplicación web.');
  CURSOS_VALIDOS.forEach(function (c) { Logger.log(c + ': ' + url + '?curso=' + c); });
}
