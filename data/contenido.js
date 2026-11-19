/* =========================================================
   CONTENIDO DEL SITIO
   Aquí se agregan noticias, circulares, documentos, etc.
   Regla: copia un bloque { ... }, pégalo arriba y cambia el texto.
   Fechas en formato AAAA-MM-DD. Los PDF se suben a la carpeta /docs
   y las imágenes a /img. Lo marcado EDITAR es texto de ejemplo.
   ========================================================= */
window.DATOS = {

  /* ---------- Aviso rojo bajo el menú (activo: false para ocultarlo) ---------- */
  AVISO: {
    activo: true,
    titulo: "Informativo: Uniforme Oficial del Colegio",
    texto: "Las telas del uniforme se compran en Casis y Fulltex (Santiago). Las especificaciones técnicas están disponibles en secretaría.",
    boton: { texto: "Ver uniformes del colegio", url: "uniformes.html" }
  },

  /* ---------- Slider de portada ---------- */
  SLIDES: [
    { titulo: "Colegio San Agustín", texto: "Educando con valores, compromiso y espíritu de comunidad.",
      imagen: "img/slide-1.svg", boton: { texto: "Conócenos", url: "nosotros.html" } },
    { titulo: "Pequeños Pasos, Grandes Aprendizajes", texto: "Curiosidad y creatividad desde los primeros años.",
      imagen: "img/slide-2.svg", boton: { texto: "Área académica", url: "horarios-cursos.html" } },
    { titulo: "Estrategia, Concentración y Compañerismo", texto: "Pensar, convivir y aprender juntos.",
      imagen: "img/slide-3.svg", boton: { texto: "Talleres", url: "talleres.html" } }
  ],

  /* ---------- Publicaciones / noticias ----------
     id: único, sin espacios. contenido: HTML opcional para la noticia completa.
     (Las 3 de abajo son las del sitio actual: ajusta fecha, texto e imagen.) */
  PUBLICACIONES: [
    { id: "dia-tecnico-parvularia-2026", fecha: "2026-11-15", titulo: "Día de la Técnico de Educación Parvularia",
      resumen: "Saludamos a nuestras técnicos de educación parvularia en su día.", imagen: "",
      contenido: "<p>EDITAR: texto completo de la publicación.</p>" },
    { id: "dia-profesores-normalistas-2026", fecha: "2026-11-10", titulo: "Día de las y los Profesores Normalistas",
      resumen: "Recordamos y valoramos el aporte de las y los profesores normalistas.", imagen: "",
      contenido: "<p>EDITAR: texto completo de la publicación.</p>" },
    { id: "dia-educacion-tp-2026", fecha: "2026-08-23", titulo: "Día de la Educación Técnico Profesional",
      resumen: "Celebramos la educación técnico profesional y a quienes la hacen posible.", imagen: "",
      contenido: "<p>EDITAR: texto completo de la publicación.</p>" }
  ],

  /* ---------- Circulares ---------- */
  CIRCULARES: [
    { fecha: "2026-11-01", titulo: "EDITAR: Circular de ejemplo", categoria: "General", detalle: "Información para apoderados", archivo: "docs/ejemplo.pdf" }
  ],

  /* ---------- Invitaciones y reuniones ---------- */
  INVITACIONES: [
    { fecha: "2026-11-25", titulo: "EDITAR: Reunión de apoderados", categoria: "Reunión", detalle: "19:00 hrs · Salas de cada curso", archivo: "" }
  ],

  /* ---------- Documentos institucionales ---------- */
  DOCUMENTOS: [
    { fecha: "2026-03-01", titulo: "Reglamento Interno", categoria: "Institucional", detalle: "Versión vigente", archivo: "docs/reglamento-interno.pdf" },
    { fecha: "2026-03-01", titulo: "Reglamento de Evaluación", categoria: "Académico", detalle: "", archivo: "docs/reglamento-evaluacion.pdf" },
    { fecha: "2026-03-01", titulo: "Proyecto Educativo Institucional (PEI)", categoria: "Institucional", detalle: "", archivo: "docs/pei.pdf" }
  ],

  /* ---------- Listas de útiles (una por curso) ---------- */
  UTILES: [
    { titulo: "EDITAR: 1° Básico", categoria: "Básica", detalle: "Año 2027", archivo: "docs/utiles-1basico.pdf" },
    { titulo: "EDITAR: 1° Medio", categoria: "Media", detalle: "Año 2027", archivo: "docs/utiles-1medio.pdf" }
  ],

  /* ---------- Plan lector ---------- */
  PLAN_LECTOR: [
    { titulo: "EDITAR: Plan lector 2026 — Básica", categoria: "Básica", archivo: "" },
    { titulo: "EDITAR: Plan lector 2026 — Media", categoria: "Media", archivo: "" }
  ],

  /* ---------- Horarios de clases por curso ---------- */
  HORARIOS: [
    { titulo: "EDITAR: 6° Básico", categoria: "Básica", archivo: "" },
    { titulo: "EDITAR: 1° Medio", categoria: "Media", archivo: "" }
  ],

  /* ---------- Horario de atención (tabla) ---------- */
  ATENCION: {
    columnas: ["Área", "Días", "Horario"],
    filas: [
      ["Secretaría", "Lunes a viernes", "EDITAR"],
      ["Inspectoría", "Lunes a viernes", "EDITAR"],
      ["Dirección", "Con hora agendada", "EDITAR"]
    ]
  },

  /* ---------- Infraestructura ---------- */
  INFRAESTRUCTURA: [
    { titulo: "Patio del Colegio", texto: "Espacio de recreación y convivencia para nuestros estudiantes.", imagen: "" },
    { titulo: "Secretaría", texto: "Atención y orientación a toda la comunidad educativa.", imagen: "" },
    { titulo: "Comedor", texto: "Espacio adecuado para que los estudiantes consuman sus alimentos.", imagen: "" }
  ],

  /* ---------- Talleres ---------- */
  TALLERES: [
    { titulo: "EDITAR: Ajedrez", texto: "Estrategia, concentración y compañerismo.", detalle: "Día y hora: EDITAR", imagen: "" },
    { titulo: "EDITAR: Fútbol", texto: "Deporte y trabajo en equipo.", detalle: "Día y hora: EDITAR", imagen: "" },
    { titulo: "EDITAR: Ciencias", texto: "Explorar, experimentar y preguntar.", detalle: "Día y hora: EDITAR", imagen: "" }
  ],

  /* ---------- Personal (area agrupa) ---------- */
  PERSONAL: [
    { area: "Equipo Directivo", nombre: "EDITAR Nombre", cargo: "Director(a)", foto: "" },
    { area: "Equipo Directivo", nombre: "EDITAR Nombre", cargo: "Jefe(a) de UTP", foto: "" },
    { area: "Docentes", nombre: "EDITAR Nombre", cargo: "Profesor(a)", foto: "" }
  ],

  /* ---------- Galería ---------- */
  GALERIA: [
    { titulo: "EDITAR: Actividad", imagen: "img/placeholder.svg" },
    { titulo: "EDITAR: Actividad", imagen: "img/slide-2.svg" },
    { titulo: "EDITAR: Actividad", imagen: "img/slide-3.svg" }
  ],

  /* ---------- Voz estudiantil (publicaciones del CEAL / estudiantes) ---------- */
  VOZ_ESTUDIANTIL: [
    { id: "voz-ejemplo", fecha: "2026-11-01", titulo: "EDITAR: Publicación del Centro de Estudiantes",
      resumen: "Espacio para que las y los estudiantes compartan sus ideas y actividades.", imagen: "" }
  ]
};
