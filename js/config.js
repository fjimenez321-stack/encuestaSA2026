/* =========================================================
   CONFIGURACIÓN GENERAL DEL SITIO
   Cambia aquí teléfonos, redes, menú y enlaces.
   Todo lo que se repite en todas las páginas sale de este archivo.
   ========================================================= */
window.SITIO = {
  nombre: "Colegio San Agustín",
  ciudad: "Villa Alemana",
  logo: "img/logo.svg",            // reemplaza por img/logo.png si subes el logo oficial

  telefonos: ["32 2390964", "+56 9 4017 4461"],
  correo: "contacto@sanagustinvillaalemana.cl",        // EDITAR: correo real
  direccion: "Villa Alemana, Región de Valparaíso",    // EDITAR: calle y número
  // Mapa: en Google Maps → Compartir → Insertar mapa → copia solo el src="..."
  mapa: "https://www.google.com/maps?q=Colegio+San+Agustin+Villa+Alemana&output=embed",

  plataforma: { nombre: "Plataforma Betel Colegios", url: "https://sanagustin.betelcolegios.cl" },

  redes: {
    facebook:  "https://www.facebook.com/",    // EDITAR: link de la fan page
    instagram: "https://www.instagram.com/",   // EDITAR
    tiktok:    "https://www.tiktok.com/",      // EDITAR
    youtube:   "https://www.youtube.com/"      // EDITAR
  },

  // Menú principal. Para agregar una página: créala y súmala aquí.
  menu: [
    { texto: "Inicio", url: "index.html" },
    { texto: "Colegio", hijos: [
      { texto: "Nosotros", url: "nosotros.html" },
      { texto: "Infraestructura", url: "infraestructura.html" },
      { texto: "Reglamento Interno", url: "reglamento-interno.html" },
      { texto: "Personal del Colegio", url: "personal-colegio.html" },
      { texto: "Resumen PME", url: "resumen-pme.html" }
    ]},
    { texto: "Área Académica", hijos: [
      { texto: "Circulares", url: "circulares.html" },
      { texto: "Invitaciones y Reuniones", url: "invitaciones-reuniones.html" },
      { texto: "Documentos", url: "documentos.html" },
      { texto: "Lista de Útiles", url: "listas-utiles.html" },
      { texto: "Plan Lector", url: "plan-lector.html" },
      { texto: "Horarios de Clases", url: "horarios-cursos.html" },
      { texto: "Horario de Atención", url: "horario-de-atencion.html" },
      { texto: "Talleres", url: "talleres.html" },
      { texto: "Uniformes", url: "uniformes.html" }
    ]},
    { texto: "Comunicaciones", hijos: [
      { texto: "Publicaciones", url: "publicaciones.html" },
      { texto: "Galería", url: "galeria.html" },
      { texto: "Voz Estudiantil", url: "voz-estudiantil.html" }
    ]},
    { texto: "Contacto", url: "contacto.html" }
  ],

  enlacesUtiles: [
    { texto: "Mineduc", url: "https://www.mineduc.cl" },
    { texto: "Sistema de Admisión Escolar", url: "https://www.sistemadeadmisionescolar.cl" },
    { texto: "Certificados en línea", url: "https://certificados.mineduc.cl" },
    { texto: "Agencia de Calidad", url: "https://www.agenciaeducacion.cl" },
    { texto: "Portal de Transparencia", url: "https://www.portaltransparencia.cl" },
    { texto: "Ayuda Mineduc", url: "https://www.ayudamineduc.cl" },
    { texto: "Curriculum Nacional", url: "https://www.curriculumnacional.cl" },
    { texto: "BiblioRedes", url: "https://www.biblioredes.gob.cl" },
    { texto: "Junaeb", url: "https://www.junaeb.cl" },
    { texto: "EducarChile", url: "https://www.educarchile.cl" }
  ]
};
