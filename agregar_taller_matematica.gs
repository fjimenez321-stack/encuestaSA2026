/**
 * Agrega las preguntas del Taller de Matemática a la
 * "Encuesta de seguimiento post-DIA".
 *
 * Estructura que crea (a continuación de la Sección 2 actual):
 *   Sección 3 – Taller de refuerzo de Matemática  → P8 (con ramificación)
 *   Sección 4 – Tu experiencia en el taller        → P9, P10 (cuadrícula), P11
 *   Sección 5 – Talleres en otras asignaturas      → P12 (la responden todos)
 *
 * Los que participan van de P8 a la Sección 4 y luego a la 5.
 * Los que no participan van de P8 directo a la Sección 5.
 *
 * IMPORTANTE: ejecutar UNA sola vez. Si se ejecuta de nuevo, las preguntas
 * se duplican.
 */

const FORM_ID = '1ctE_Sn_ts3QFmzG3hg_A4yoyuwt1kGGUGj5bmEqR32E';

// Cambia a true si quieres que las preguntas abiertas (P9 y P11) sean obligatorias.
const ABIERTAS_OBLIGATORIAS = false;

function agregarTallerMatematica() {
  const form = FormApp.openById(FORM_ID);

  // ───────────── SECCIÓN 3 ─────────────
  form.addPageBreakItem()
    .setTitle('Taller de refuerzo de Matemática')
    .setHelpText('Estas preguntas son sobre el taller de refuerzo de Matemática. ' +
                 'Tus respuestas nos ayudan a mejorarlo.');

  const p8 = form.addMultipleChoiceItem()
    .setTitle('8. ¿Has participado de forma continua en los talleres de refuerzo de ' +
              'Matemática a cargo de la psicopedagoga Claudia Sepúlveda y la profesora Carol Navea?')
    .setRequired(true);

  // ───────────── SECCIÓN 4 ─────────────
  const s4 = form.addPageBreakItem()
    .setTitle('Tu experiencia en el taller de Matemática');

  form.addParagraphTextItem()
    .setTitle('9. ¿De qué manera sientes que las sesiones del taller han influido en tu ' +
              'rendimiento en Matemática y en cómo manejas la ansiedad antes de las pruebas o clases?')
    .setHelpText('Cuéntalo con tus palabras. Puede ser algo que haya cambiado o algo que siga igual.')
    .setRequired(ABIERTAS_OBLIGATORIAS);

  form.addGridItem()
    .setTitle('10. Indica qué tan de acuerdo estás con las siguientes afirmaciones sobre el taller de Matemática:')
    .setRows([
      'Asistir al taller me ha ayudado a resolver mis dudas y aprender mejor la materia.',
      'Gracias al taller me siento menos ansioso(a) o estresado(a) cuando me enfrento a la asignatura.'
    ])
    .setColumns([
      'Muy de acuerdo',
      'De acuerdo',
      'En desacuerdo',
      'Muy en desacuerdo'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('11. Para seguir mejorando el taller, ¿qué deberíamos cambiar, agregar o hacer ' +
              'diferente para que aprendas mejor y sientas menos estrés o ansiedad?')
    .setHelpText('Por ejemplo: horario, duración, tipo de actividades, materiales, cantidad de estudiantes, etc.')
    .setRequired(ABIERTAS_OBLIGATORIAS);

  // ───────────── SECCIÓN 5 ─────────────
  const s5 = form.addPageBreakItem()
    .setTitle('Talleres de apoyo en otras asignaturas');

  form.addCheckboxItem()
    .setTitle('12. Si se ofrecieran talleres de apoyo como este en otras asignaturas, ' +
              '¿en cuáles te gustaría participar?')
    .setHelpText('Marca hasta 3 opciones.')
    .setChoiceValues([
      'Lenguaje y Comunicación / Lengua y Literatura',
      'Inglés',
      'Historia, Geografía y Ciencias Sociales',
      'Ciencias Naturales (6° a 8° básico)',
      'Biología',
      'Física',
      'Química',
      'Ciencias para la Ciudadanía (3° y 4° medio)',
      'Filosofía (3° y 4° medio)',
      'Tecnología',
      'Artes Visuales',
      'Música',
      'Educación Física y Salud',
      'Orientación (técnicas de estudio, organización, manejo del estrés)',
      'Ninguna, no necesito talleres en otra asignatura'
    ])
    .showOtherOption(true)
    .setValidation(
      FormApp.createCheckboxValidation()
        .setHelpText('Puedes marcar como máximo 3 opciones.')
        .requireSelectAtMost(3)
        .build()
    )
    .setRequired(true);

  // ───────────── RAMIFICACIÓN DE P8 ─────────────
  // (se define al final porque necesita que las secciones 4 y 5 ya existan)
  p8.setChoices([
    p8.createChoice('Sí, asisto a todas o casi todas las sesiones', s4),
    p8.createChoice('Asisto a veces', s4),
    p8.createChoice('He ido muy pocas veces', s4),
    p8.createChoice('No he participado', s5),
    p8.createChoice('No sabía que existía este taller', s5)
  ]);

  Logger.log('Listo: se agregaron las secciones 3, 4 y 5 con las preguntas 8 a 12.');
}
