# Sitio web — Colegio San Agustín, Villa Alemana

Sitio estático (HTML + CSS + JS, sin base de datos ni servidor). Se publica gratis con GitHub Pages y se edita directamente en GitHub.

## Publicarlo (una sola vez)

1. En GitHub: **Settings → Pages**.
2. *Source*: **Deploy from a branch** → rama `main`, carpeta `/ (root)` → **Save**.
3. En 1–2 minutos queda en `https://fjimenez321-stack.github.io/encuestaSA2026/`.
4. (Opcional) Para usar un dominio propio, escríbelo en **Custom domain** y apunta el DNS a GitHub Pages.

## Qué editar y dónde

| Quiero cambiar… | Archivo |
|---|---|
| Teléfonos, correo, dirección, mapa, redes, menú, enlaces útiles | `js/config.js` |
| Noticias, circulares, documentos, útiles, horarios, talleres, personal, galería, aviso rojo, slider | `data/contenido.js` |
| Colores y tipografía | `css/estilos.css` (variables al inicio, `--azul`, `--acento`…) |
| Textos de la portada (principios, citas, video) | `index.html` |
| Texto de una página interior | `nombre-pagina.html` (entre los comentarios *CONTENIDO DE LA PÁGINA*) |
| Logo | Sube `img/logo.png` y cambia `logo:` en `js/config.js` |

Todo lo marcado **EDITAR** es texto de ejemplo.

### Publicar una circular (ejemplo)
1. Sube el PDF a `docs/` (GitHub → *Add file → Upload files*).
2. En `data/contenido.js`, dentro de `CIRCULARES`, copia un bloque y cámbialo:
   ```js
   { fecha: "2026-11-20", titulo: "Circular N°12", categoria: "General", detalle: "Cierre de año", archivo: "docs/circular-12.pdf" },
   ```
3. *Commit changes*. Queda publicado en ~1 minuto, ordenado por fecha.

### Publicar una noticia
En `PUBLICACIONES` agrega un bloque con un `id` único (sin espacios). La tarjeta aparece en la portada y en *Publicaciones*; el enlace abre `noticia.html?id=...`. El campo `contenido` acepta HTML (`<p>`, `<img>`, `<a>`…).

### Aviso rojo
`AVISO.activo: false` lo oculta.

### Agregar una página nueva
Copia cualquier página interior (por ejemplo `plan-lector.html`), renómbrala, cambia `data-cabecera="Título"` y el contenido, y súmala al `menu` en `js/config.js`.

## Estructura

```
index.html            portada
*.html                páginas interiores (19) + 404.html
css/estilos.css       estilos
js/config.js          datos generales y menú
js/layout.js          arma barra, menú, pie y listas (normalmente no se toca)
data/contenido.js     todo el contenido que cambia seguido
img/                  imágenes
docs/                 PDFs
```

Para verlo en tu computador basta abrir `index.html` en el navegador.

> El contenido anterior de este repo (encuesta post-DIA en Apps Script) quedó en el historial de git (commit `3a83849`). La encuesta publicada en Apps Script sigue funcionando: vive en Google, no en este repo.
