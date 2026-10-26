# encuestaSA2026

Encuesta de seguimiento post-DIA del Colegio San Agustín (2026). Formulario propio en Apps Script que adapta las preguntas según el curso y las respuestas, y guarda cada respuesta como una fila en una Google Sheet.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El formulario. Abierto directo en el navegador funciona en **modo prueba** (barra para simular el curso y vista previa de la fila). Dentro de Apps Script se oculta todo eso y envía de verdad. |
| `Codigo.gs` | Backend: sirve el formulario, guarda respuestas con bloqueo para envíos simultáneos y genera los links por curso. |
| `agregar_taller_matematica.gs` | Script aparte para agregar las preguntas del taller al Google Form original (ya no es necesario si se usa este formulario). |

## Instalación

1. Crea una Google Sheet para las respuestas → **Extensiones → Apps Script**.
2. Pega `Codigo.gs` en `Código.gs`.
3. **Archivo → + → HTML**, nómbralo `index` (sin `.html`) y pega el contenido de `index.html`.
4. **Implementar → Nueva implementación → Aplicación web**
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario** (encuesta anónima)
5. Ejecuta `generarLinks()` y copia los links desde **Registros**.

## Links por curso

`…/exec?curso=6B`, `7B`, `8B`, `1M`, `2M`, `3M`, `4M`. Sin curso (o con uno inválido) el formulario le pregunta al estudiante.

## Configuración

Al inicio del script de `index.html`:
- `CURSOS_TALLER`: qué cursos ven las preguntas del taller de Matemática (`null` = todos).
- `PREGUNTAS`: textos, opciones, códigos numéricos y condiciones (`mostrar`, `cursos`).

Si cambias el HTML, vuelve a pegarlo en Apps Script y crea una **nueva versión** de la implementación (Implementar → Gestionar implementaciones → editar → Nueva versión); el link se mantiene.

## Datos

- Una fila por respuesta, una columna por pregunta. Lo que no le correspondía al estudiante queda vacío.
- Escalas en número: acuerdo 4 = Muy de acuerdo … 1 = Muy en desacuerdo.
- Control de calidad: `id_dispositivo` (código al azar, no identifica), `aviso_duplicado`, `duracion_seg`.
