/* =========================================================
   Arma lo que se repite en todas las páginas (barra superior,
   menú, pie) y dibuja las listas que vienen de /data.
   Normalmente NO necesitas editar este archivo.
   ========================================================= */
(function () {
  const S = window.SITIO;
  const pagina = location.pathname.split("/").pop() || "index.html";

  const ICONOS = {
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8V6c0-.9.6-1 1-1h2V2h-3c-3 0-4 2-4 4v2H8v3h2v11h4V11h3l.5-3H14z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.3-8.9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM21.9 7c-.1-1.6-.4-3-1.6-4.2S17.6 1.2 16 1.1C14.4 1 9.6 1 8 1.1 6.4 1.2 5 1.5 3.8 2.7S2.2 5.4 2.1 7C2 8.6 2 15.4 2.1 17c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-8.4 0-10zm-2.1 12.2a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5.9s-.1-4.6.4-5.9A3.3 3.3 0 0 1 6.1 3.5C7.4 3 10.5 3.1 12 3.1s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.9s.1 4.6-.4 5.9z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.8 3-5.8 3z"/></svg>'
  };
  const flecha = '<svg class="flecha" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>';
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const redesHTML = () => Object.entries(S.redes).map(([k, url]) =>
    `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}">${ICONOS[k] || k}</a>`).join("");

  /* ---------- Barra superior + encabezado ---------- */
  const itemMenu = (it) => {
    if (!it.hijos) {
      return `<li class="${it.url === pagina ? "activo" : ""}"><a href="${it.url}">${it.texto}</a></li>`;
    }
    const activo = it.hijos.some((h) => h.url === pagina);
    return `<li class="${activo ? "activo" : ""}">
      <button type="button" aria-haspopup="true">${it.texto} ${flecha}</button>
      <ul class="submenu">${it.hijos.map((h) => `<li><a href="${h.url}">${h.texto}</a></li>`).join("")}</ul>
    </li>`;
  };

  const header = `
  <div class="topbar"><div class="contenedor">
    <div>📞 ${S.telefonos.map((t) => `<a href="tel:${t.replace(/\s/g, "")}">${t}</a>`).join(" &nbsp;/&nbsp; ")}</div>
    <div class="redes">${redesHTML()}
      <a class="btn-plataforma" href="${S.plataforma.url}" target="_blank" rel="noopener">Plataforma</a>
    </div>
  </div></div>
  <header class="header"><div class="contenedor">
    <a class="marca" href="index.html">
      <img src="${S.logo}" alt="Logo ${S.nombre}">
      <span class="nombre">${S.nombre}<small>${S.ciudad}</small></span>
    </a>
    <nav class="nav" id="nav" aria-label="Menú principal">
      <button class="menu-btn cerrar-menu" type="button" aria-label="Cerrar menú">✕</button>
      <ul>${S.menu.map(itemMenu).join("")}</ul>
    </nav>
    <div class="velo"></div>
    <button class="menu-btn abrir-menu" type="button" aria-label="Abrir menú">☰</button>
  </div></header>`;

  const footer = `
  <footer class="footer"><div class="contenedor">
    <div class="cols">
      <div>
        <h4>${S.nombre}</h4>
        <p>Educando con valores, compromiso y espíritu de comunidad.</p>
        <p>📍 ${S.direccion}<br>📞 ${S.telefonos.join(" / ")}<br>✉️ <a href="mailto:${S.correo}">${S.correo}</a></p>
        <div class="redes">${redesHTML()}</div>
      </div>
      ${S.menu.filter((m) => m.hijos).map((m) => `
        <div><h4>${m.texto}</h4><ul>${m.hijos.map((h) => `<li><a href="${h.url}">${h.texto}</a></li>`).join("")}</ul></div>`).join("")}
    </div>
    <div class="base">© ${new Date().getFullYear()} ${S.nombre} · ${S.ciudad}</div>
  </div></footer>
  <button class="subir" type="button" aria-label="Volver arriba">↑</button>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  /* ---------- Menú móvil ---------- */
  const nav = document.getElementById("nav");
  document.querySelector(".abrir-menu").onclick = () => nav.classList.add("abierto");
  const cerrar = () => nav.classList.remove("abierto");
  document.querySelector(".cerrar-menu").onclick = cerrar;
  document.querySelector(".velo").onclick = cerrar;
  nav.querySelectorAll("button[aria-haspopup]").forEach((b) => {
    b.onclick = () => { if (innerWidth <= 960) b.parentElement.classList.toggle("abierto"); };
  });

  const subir = document.querySelector(".subir");
  addEventListener("scroll", () => subir.classList.toggle("visible", scrollY > 500));
  subir.onclick = () => scrollTo({ top: 0 });

  /* ---------- Cabecera de páginas interiores ---------- */
  const cab = document.querySelector("[data-cabecera]");
  if (cab) {
    const titulo = cab.dataset.cabecera;
    const padre = S.menu.find((m) => m.hijos && m.hijos.some((h) => h.url === pagina));
    cab.outerHTML = `<section class="cabecera-pag"><div class="contenedor">
      <div class="migas"><a href="index.html">Inicio</a>${padre ? " › " + padre.texto : ""} › ${titulo}</div>
      <h1>${titulo}</h1></div></section>`;
    document.title = `${titulo} | ${S.nombre}`;
  }

  /* ---------- Fechas ---------- */
  const fecha = (f) => {
    if (!f) return "";
    const d = new Date(f + "T12:00:00");
    return isNaN(d) ? f : d.toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });
  };
  const ordenar = (arr) => [...arr].sort((a, b) => String(b.fecha || "").localeCompare(String(a.fecha || "")));

  /* ---------- Dibujantes de listas ---------- */
  const R = {};

  // Lista de documentos descargables (circulares, documentos, invitaciones, útiles…)
  R.docs = (datos) => !datos.length ? '<p class="vacio">Aún no hay elementos publicados.</p>' :
    `<ul class="lista-docs">${ordenar(datos).map((d) => `
      <li><div class="info"><strong>${esc(d.titulo)}</strong>
        <span>${[d.categoria && `<span class="etiqueta">${esc(d.categoria)}</span>`, fecha(d.fecha), esc(d.detalle)].filter(Boolean).join(" · ")}</span></div>
        ${d.archivo ? `<a class="btn btn-azul" href="${d.archivo}" target="_blank" rel="noopener">Ver / Descargar</a>` : ""}
      </li>`).join("")}</ul>`;

  // Tarjetas de noticias
  R.noticias = (datos, el) => {
    const lim = +el.dataset.limite || datos.length;
    return `<div class="grid grid-3">${ordenar(datos).slice(0, lim).map((n) => `
      <article class="tarjeta">
        <div class="img" style="background-image:url('${n.imagen || "img/placeholder.svg"}')"></div>
        <div class="cuerpo"><div class="fecha">${fecha(n.fecha)}</div>
          <h3>${esc(n.titulo)}</h3><p>${esc(n.resumen)}</p>
          <a class="mas" href="noticia.html?id=${encodeURIComponent(n.id)}">Leer más →</a></div>
      </article>`).join("")}</div>`;
  };

  // Tarjetas genéricas (infraestructura, talleres…)
  R.tarjetas = (datos) => `<div class="grid grid-3">${datos.map((t) => `
    <article class="tarjeta">
      <div class="img" style="background-image:url('${t.imagen || "img/placeholder.svg"}')"></div>
      <div class="cuerpo"><h3>${esc(t.titulo)}</h3><p>${esc(t.texto)}</p>
      ${t.detalle ? `<p><small>${esc(t.detalle)}</small></p>` : ""}</div>
    </article>`).join("")}</div>`;

  // Personas
  R.personas = (datos) => {
    const grupos = [...new Set(datos.map((p) => p.area || "Equipo"))];
    return grupos.map((g) => `<h2 style="margin-top:1.5rem">${esc(g)}</h2>
      <div class="grid grid-4">${datos.filter((p) => (p.area || "Equipo") === g).map((p) => `
        <div class="persona"><div class="foto" ${p.foto ? `style="background-image:url('${p.foto}')"` : ""}>${p.foto ? "" : esc(p.nombre.split(" ").map((x) => x[0]).slice(0, 2).join(""))}</div>
        <strong>${esc(p.nombre)}</strong><span>${esc(p.cargo)}</span></div>`).join("")}</div>`).join("");
  };

  // Galería con visor
  R.galeria = (datos) => `<div class="galeria">${datos.map((g) => `
    <figure data-src="${g.imagen}"><img src="${g.imagen}" alt="${esc(g.titulo)}" loading="lazy"><figcaption>${esc(g.titulo)}</figcaption></figure>`).join("")}</div>`;

  // Tabla simple: { columnas: [...], filas: [[...], ...] }
  R.tabla = (d) => `<div class="tabla-wrap"><table class="tabla"><thead><tr>${d.columnas.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${d.filas.map((f) => `<tr>${f.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

  document.querySelectorAll("[data-render]").forEach((el) => {
    const datos = (window.DATOS || {})[el.dataset.fuente];
    if (!datos) { el.innerHTML = '<p class="vacio">Sin datos.</p>'; return; }
    let lista = datos;
    if (el.dataset.filtro && Array.isArray(datos)) {
      const [k, v] = el.dataset.filtro.split("=");
      lista = datos.filter((d) => d[k] === v);
    }
    el.innerHTML = R[el.dataset.render](lista, el);

    // filtros por categoría
    if (el.hasAttribute("data-filtros") && Array.isArray(datos)) {
      const cats = [...new Set(datos.map((d) => d.categoria).filter(Boolean))];
      if (cats.length > 1) {
        const barra = document.createElement("div");
        barra.className = "filtros";
        barra.innerHTML = ["Todos", ...cats].map((c, i) => `<button class="${i ? "" : "activo"}">${esc(c)}</button>`).join("");
        el.before(barra);
        barra.onclick = (e) => {
          if (e.target.tagName !== "BUTTON") return;
          barra.querySelectorAll("button").forEach((b) => b.classList.toggle("activo", b === e.target));
          const c = e.target.textContent;
          el.innerHTML = R[el.dataset.render](c === "Todos" ? datos : datos.filter((d) => d.categoria === c), el);
        };
      }
    }
  });

  // Visor de galería
  document.addEventListener("click", (e) => {
    const fig = e.target.closest(".galeria figure");
    if (!fig) return;
    let lb = document.querySelector(".lightbox");
    if (!lb) {
      lb = document.createElement("div"); lb.className = "lightbox"; lb.innerHTML = "<img alt=''>";
      lb.onclick = () => lb.classList.remove("abierto");
      document.body.append(lb);
    }
    lb.querySelector("img").src = fig.dataset.src;
    lb.classList.add("abierto");
  });

  // Página de noticia individual
  const det = document.getElementById("noticia");
  if (det) {
    const id = new URLSearchParams(location.search).get("id");
    const n = [...(window.DATOS.PUBLICACIONES || []), ...(window.DATOS.VOZ_ESTUDIANTIL || [])].find((x) => String(x.id) === id);
    if (!n) { det.innerHTML = '<p class="vacio">No encontramos esta publicación. <a href="publicaciones.html">Ver todas</a></p>'; }
    else {
      document.title = `${n.titulo} | ${S.nombre}`;
      document.querySelector(".cabecera-pag h1").textContent = n.titulo;
      det.innerHTML = `<div class="caja prosa noticia-full">
        ${n.imagen ? `<img class="portada" src="${n.imagen}" alt="">` : ""}
        <p style="color:var(--acento);font-weight:800;text-transform:uppercase;font-size:.85rem">${fecha(n.fecha)}</p>
        ${n.contenido || `<p>${esc(n.resumen)}</p>`}
        <p style="margin-top:2rem"><a class="btn btn-azul" href="publicaciones.html">← Todas las publicaciones</a></p></div>`;
    }
  }

  // Enlaces útiles
  document.querySelectorAll("[data-enlaces-utiles]").forEach((el) => {
    el.innerHTML = S.enlacesUtiles.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.texto}</a>`).join("");
  });
  document.querySelectorAll("[data-redes]").forEach((el) => {
    el.innerHTML = Object.entries(S.redes).map(([k, u]) =>
      `<a class="btn btn-blanco" href="${u}" target="_blank" rel="noopener">${k[0].toUpperCase() + k.slice(1)}</a>`).join("");
  });
  document.querySelectorAll("[data-plataforma]").forEach((el) => { el.href = S.plataforma.url; });
  document.querySelectorAll("[data-mapa]").forEach((el) => { el.src = S.mapa; });
  document.querySelectorAll("[data-contacto]").forEach((el) => {
    el.innerHTML = `<p>📍 <strong>Dirección:</strong> ${S.direccion}</p>
      <p>📞 <strong>Teléfonos:</strong> ${S.telefonos.map((t) => `<a href="tel:${t.replace(/\s/g, "")}">${t}</a>`).join(" / ")}</p>
      <p>✉️ <strong>Correo:</strong> <a href="mailto:${S.correo}">${S.correo}</a></p>`;
  });

  /* ---------- Slider ---------- */
  const slider = document.querySelector(".slider");
  if (slider && window.DATOS.SLIDES) {
    const slides = window.DATOS.SLIDES;
    slider.innerHTML = slides.map((s, i) => `
      <div class="slide ${i ? "" : "activa"}" style="background-image:url('${s.imagen || "img/placeholder.svg"}')">
        <div class="contenedor texto"><h2>${esc(s.titulo)}</h2><p>${esc(s.texto)}</p>
        ${s.boton ? `<div><a class="btn btn-primario" href="${s.boton.url}">${esc(s.boton.texto)}</a></div>` : ""}</div>
      </div>`).join("") +
      `<button class="ctrl prev" aria-label="Anterior">❮</button><button class="ctrl next" aria-label="Siguiente">❯</button>
       <div class="puntos">${slides.map((_, i) => `<button class="${i ? "" : "activo"}" aria-label="Ir a ${i + 1}"></button>`).join("")}</div>`;
    let actual = 0, timer;
    const ir = (n) => {
      actual = (n + slides.length) % slides.length;
      slider.querySelectorAll(".slide").forEach((s, i) => s.classList.toggle("activa", i === actual));
      slider.querySelectorAll(".puntos button").forEach((p, i) => p.classList.toggle("activo", i === actual));
      clearInterval(timer); timer = setInterval(() => ir(actual + 1), 6000);
    };
    slider.querySelector(".prev").onclick = () => ir(actual - 1);
    slider.querySelector(".next").onclick = () => ir(actual + 1);
    slider.querySelectorAll(".puntos button").forEach((p, i) => (p.onclick = () => ir(i)));
    ir(0);
  }

  // Aviso destacado (se apaga con activo:false)
  const aviso = document.querySelector("[data-aviso]");
  const A = window.DATOS.AVISO;
  if (aviso) {
    if (A && A.activo) aviso.outerHTML = `<section class="aviso"><div class="contenedor">
      <div><h2>📢 ${esc(A.titulo)}</h2><p>${esc(A.texto)}</p></div>
      ${A.boton ? `<a class="btn btn-blanco" href="${A.boton.url}">${esc(A.boton.texto)} →</a>` : ""}</div></section>`;
    else aviso.remove();
  }
})();
