# BlogVue — Plataforma de Blog con Vue 3

![Desarrollado por Diana Trujillo](https://img.shields.io/badge/Autora-Diana%20Trujillo-6366f1?style=for-the-badge&logo=github)
![Estado](https://img.shields.io/badge/Estado-Profesional-10b981?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-3b82f6?style=for-the-badge)

## Descripción

SPA moderna de blog interactivo construida con **Vue 3 + Vite**: listado de artículos, vista de post con Markdown renderizado (`marked` + `DOMPurify`), buscador, categorías, etiquetas y modo lectura. Incluye artículos de ejemplo (entre ellos un tutorial de integración con OpenWeatherMap para Ecuador).

## Demo

- Repositorio: <https://github.com/Diani39ec/blog-vue>
- Demo local (Laragon): `http://blog-vue.test`
- Demo dev: `npm run dev` → `http://localhost:5173`

## Características

- Vista de blog, post individual, categorías y "acerca de" con Vue Router
- Renderizado seguro de Markdown (sanitizado contra XSS)
- Buscador y nube de etiquetas
- Diseño responsivo (móvil y escritorio)

## Tecnologías

`Vue 3` `Vite` `Vue Router` `marked` `DOMPurify` `JavaScript` `CSS3`

## Instalación

```bash
git clone https://github.com/Diani39ec/blog-vue.git
cd blog-vue
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción (genera dist/)
npm run preview  # previsualizar el build
```

## Variables de entorno

Copia `.env.example` a `.env` y ajusta los valores. Nunca subas `.env` reales al repositorio.

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_API_URL` | URL base de API (si se conecta un backend) | `https://api.example.com` |
| `VITE_SITE_TITLE` | Título del sitio | `Vue Blog` |
| `VITE_DISQUS_SHORTNAME` | Shortname de Disqus para comentarios | `my-blog` |
| `VITE_WEATHER_API_KEY` | API key de OpenWeatherMap (solo el tutorial de ejemplo) | `tu_api_key_aquí` |

> Seguridad: el código no contiene secretos reales; las keys se leen vía `import.meta.env` con plantilla en `.env.example`.

## Autora

**Diana Trujillo © 2026**
Desarrolladora de Software — GitHub: [Diani39ec](https://github.com/Diani39ec)

## Licencia

MIT. Consulta el archivo `LICENSE` para más detalles.

## Estructura del proyecto
```
blog-vue/
├── index.html · vite.config.js · netlify.toml · _headers · _redirects (deploy Netlify)
├── src/main.js · src/App.vue (entrada de la app)
├── src/router/ (rutas) · src/views/ (Home, Blog, Post, Categories, About)
├── src/components/ (PostCard, PostList, SearchBar, MarkdownRenderer, Newsletter, …)
├── src/composables/ (useSearch, usePagination) · src/data/ (posts, categories)
└── src/utils/ (security, date)
```
Stack: Vue 3 + Vite + Vue Router + marked + DOMPurify.
