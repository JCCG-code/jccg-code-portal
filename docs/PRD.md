# PRD — jccg-code-portal

> Documento de requisitos del portafolio personal de Juan Carlos Cuadrado (GitHub [`JCCG-code`](https://github.com/JCCG-code)).
> Recoge las decisiones tomadas en la sesión de `/grill-me` del 2026-10-20.

---

## 1. Contexto

El proyecto `jccg-code-portal` arranca desde el starter mínimo de Nuxt 4 (`app/app.vue` con `<NuxtWelcome />`), todavía sin repositorio git.

## 2. Objetivo

Tener un portafolio público que haga que **reclutadores y empresas te contacten** para entrevistas u ofertas.

### Métricas de éxito
- Visitas a las fichas de proyecto, medidas con Vercel Web Analytics.
- Clics en los enlaces de contacto (email, LinkedIn) y descargas del CV.
- Contactos recibidos que mencionan el portafolio.

## 3. Audiencia

| Perfil | Qué necesita | Cómo lo resuelve el sitio |
|---|---|---|
| Reclutador no técnico | Entender en 30 s qué haces y cómo contactarte | Hero con tu rol, CTA de contacto visible y CV descargable |
| Reclutador o lead técnico | Ver la calidad del trabajo y del código | Fichas a fondo con stack, decisiones y enlaces a repos públicos. El propio repo del portafolio también es público |
| Empresas de España/LatAm e internacionales | Leer en su idioma | Sitio bilingüe ES/EN |

## 4. Posicionamiento

> **Ingeniero full-stack (Vue/Node) con foco en IA aplicada.**

Encaja con los proyectos elegidos: frontends en Vue, backends en Node/Python y productos que usan modelos de IA (Gemini, Veo, Lyria, gateways de LLMs).

## 5. Alcance

### 5.1 Incluido en la v1

Los nombres de ruta van **siempre en inglés**. El idioma solo cambia el prefijo: sin prefijo para ES y `/en` para EN.

| Página | Ruta ES | Ruta EN | Contenido |
|---|---|---|---|
| Inicio | `/` | `/en` | Hero con el posicionamiento, proyectos destacados y CTA de contacto |
| Proyectos | `/projects` | `/en/projects` | Lista de las 4 fichas |
| Detalle de proyecto | `/projects/[slug]` | `/en/projects/[slug]` | Ficha completa |
| Sobre mí | `/about` | `/en/about` | Trayectoria, stack y forma de trabajar |
| Contacto | `/contact` | `/en/contact` | Email, LinkedIn, GitHub y CV en PDF (ES/EN) |

Elementos comunes:
- Cabecera con navegación, selector de idioma que conserva la ruta actual y botón de tema claro/oscuro.
- Pie con enlaces de contacto.
- Página de error (`app/error.vue`).

### 5.2 Fuera de la v1
- Blog.
- Formulario de contacto, y en general cualquier backend o server route.
- Dominio propio (de momento `*.vercel.app`).
- CMS: el contenido vive en el repo.

## 6. Proyectos destacados (v1)

| Proyecto | Repo | Qué es | Por qué está |
|---|---|---|---|
| **Stories Factory** | [`jccg-code-api`](https://github.com/JCCG-code/jccg-code-api) | Pipeline orquestado con n8n que usa Gemini, Imagen 3, Veo 2.0 y Lyria para generar guion, voz, música y vídeo, los monta con FFmpeg y publica en TikTok y YouTube Shorts. Node/Express, MongoDB, Docker y GCS | IA aplicada de extremo a extremo, con demo en vídeo |
| **Tripshot** | [`tripshot`](https://github.com/JCCG-code/tripshot) | Red social de viajes: Vue 3 PWA con Web Push y tiempo real | Full-stack y producto completo |
| **Unified LLM Gateway** | [`unified-llm-gateway`](https://github.com/JCCG-code/unified-llm-gateway) | Gateway en Python para LLMs | Backend e infraestructura de IA |
| **Documind** | [`documind`](https://github.com/JCCG-code/documind) | Aplicación en Vue (detalle por documentar a partir de su README) | Frontend + IA |

Se priorizan **pocas fichas trabajadas a fondo** frente a muchas superficiales.

### Estructura de cada ficha
- Título y resumen de una línea
- Problema que resuelve
- Solución y arquitectura
- Stack
- Capturas, vídeo o demo
- Decisiones técnicas relevantes
- Qué aprendiste
- Enlaces: repo y demo, si existe

### Flujo de redacción
1. Claude escribe un borrador en ES y EN a partir del README y el código de cada repo.
2. Juan Carlos lo revisa y añade capturas, decisiones y aprendizajes que no están en el código.

## 7. Requisitos funcionales

1. **Bilingüe**: español por defecto sin prefijo e inglés en `/en`. Las rutas y los slugs de proyecto son en inglés y son los mismos en los dos idiomas. Todo el texto de interfaz está en archivos de traducción, y las fichas existen en ambos idiomas.
2. **Tema**: claro y oscuro. Por defecto sigue la preferencia del sistema; el botón de tema la cambia y la elección se recuerda.
3. **Contacto**: enlaces `mailto:`, LinkedIn y GitHub. El CV descargable es distinto según el idioma (`public/cv/`).
4. **Contenido**: las fichas son Markdown con frontmatter validado por un esquema. Añadir un proyecto consiste en crear un archivo `.md` por idioma.
5. **SEO**: `title`, `description` y Open Graph por página, `lang` correcto, `hreflang` entre idiomas y `robots.txt`.
6. **Analítica**: Vercel Web Analytics, sin cookies y por tanto sin banner de consentimiento.

## 8. Requisitos no funcionales

- **Estático**: el sitio se genera entero con `nuxt generate`, sin servidor en producción.
- **Responsive**: funciona desde 375 px de ancho, sin scroll horizontal.
- **Accesibilidad**: foco de teclado visible, contraste AA en los dos temas, `prefers-reduced-motion` respetado y textos alternativos en las imágenes.
- **Rendimiento**: imágenes optimizadas y sin JS innecesario. Objetivo: Lighthouse ≥ 90 en todas las categorías.
- **Calidad de código**: ESLint (`@nuxt/eslint`) y Prettier sin errores. El código es público y forma parte de la muestra.

## 9. Diseño

- Se sigue el proceso de la skill `frontend-design` (`.claude/skills/frontend-design/`).
- **Punto de control obligatorio**: antes de escribir código de UI se presenta una propuesta con:
  - paleta de 4-6 colores con nombre (variantes para claro y oscuro),
  - tipografías y su papel, con escala tipográfica,
  - wireframes ASCII de las páginas,
  - principios de diseño propios de este portafolio.
- La propuesta se revisa contra los «defaults genéricos» que lista la skill y **se aprueba antes de implementar**.
- Los componentes de shadcn-vue se personalizan con esos tokens a través de las variables CSS.

## 10. Stack técnico

| Área | Elección |
|---|---|
| Framework | Nuxt 4 (`app/` como raíz del código) |
| Gestor de paquetes | pnpm |
| UI | shadcn-vue a través de `shadcn-nuxt`, con componentes en `app/components/ui/` |
| Estilos | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Tema | `@nuxtjs/color-mode` (`classSuffix: ''`) |
| i18n | `@nuxtjs/i18n` (`strategy: 'prefix_except_default'`) |
| Contenido | `@nuxt/content` con colecciones por idioma y esquema zod |
| Analítica | `@vercel/analytics` |
| Lint y formato | `@nuxt/eslint` + Prettier, configuración por defecto |
| Hosting | Vercel (estático), `*.vercel.app` |
| Repositorio | `JCCG-code/jccg-code-portal`, público |

### Estructura prevista
```
app/
├── components/
│   └── ui/              # componentes shadcn-vue
├── layouts/default.vue
├── pages/
│   ├── index.vue
│   ├── projects/index.vue
│   ├── projects/[slug].vue
│   ├── about.vue
│   └── contact.vue
├── app.vue
└── error.vue
content/
├── es/projects/*.md
└── en/projects/*.md
i18n/locales/{es,en}.json
public/cv/{cv-es,cv-en}.pdf
content.config.ts
nuxt.config.ts
```

### Modelo de datos de un proyecto (frontmatter)
| Campo | Tipo | Notas |
|---|---|---|
| `title` | string | |
| `summary` | string | Una línea, para tarjetas y SEO |
| `stack` | string[] | |
| `repo` | url | Opcional (repos privados) |
| `demo` | url | Opcional |
| `cover` | string | Imagen principal |
| `images` | string[] | Galería |
| `order` | number | Orden en la lista |
| `featured` | boolean | Aparece en Inicio |

## 11. Plan de implementación

1. **Limpieza y git**: quitar `primevue` de `.mcp.json`, migrar a pnpm (borrar `package-lock.json` y `node_modules`, `pnpm install`), `git init`, primer commit, crear el repo en GitHub y hacer push.
2. **Tooling**: `@nuxt/eslint` + Prettier con los scripts `lint` y `format`.
3. **Propuesta de diseño**: punto de control, hay que aprobarla antes de seguir.
4. **UI base**: shadcn-nuxt, Tailwind v4, tokens, color-mode y layout.
5. **i18n**: configuración, archivos de traducción y prefijo `/en`, con rutas en inglés en ambos idiomas.
6. **Contenido**: colecciones, esquema y borradores de las 4 fichas.
7. **Páginas**: Inicio, Proyectos, Detalle, Sobre mí, Contacto y SEO.
8. **Analítica y despliegue**: `@vercel/analytics` y `nuxt generate`. Juan Carlos conecta el repo en Vercel.

### Convenciones de trabajo
- Commits pequeños, uno por paso, con push al repo público y **sin force-push**.

## 12. Datos pendientes (los aporta Juan Carlos)

Mientras no lleguen se usan placeholders, así que no bloquean la implementación.

- [ ] URL de LinkedIn
- [ ] Email de contacto público
- [ ] CV en PDF, español
- [ ] CV en PDF, inglés
- [ ] Capturas o vídeo de cada proyecto
- [ ] Aprendizajes y decisiones de cada proyecto
- [ ] Texto o datos para «Sobre mí»
- [ ] Conectar el repo en Vercel (necesita su sesión)

## 13. Verificación

- `pnpm lint` y `pnpm generate` sin errores.
- `pnpm dev` y recorrido con el MCP de Playwright o el de Chrome DevTools: todas las páginas en ES y EN, en tema claro y oscuro, en escritorio y en móvil (375 px), con capturas.
- El selector de idioma conserva la ruta, los enlaces a repos y CV funcionan y no hay scroll horizontal en móvil.
- Tras el despliegue: la URL de `*.vercel.app` carga y las visitas aparecen en Vercel Analytics.

## 14. Registro de decisiones

| # | Decisión | Alternativas descartadas |
|---|---|---|
| 1 | Portafolio personal orientado a reclutadores | Freelance, comunidad, archivo personal |
| 2 | Nuxt Content con Markdown | GitHub API, CMS headless, híbrido |
| 3 | shadcn-vue + Tailwind v4 | PrimeVue (todo, estilado o unstyled) |
| 4 | v1 sin blog | — |
| 5 | Bilingüe ES (por defecto) + EN | Solo ES, solo EN |
| 6 | Contacto por enlaces + CV PDF | Formulario con servicio externo, Nitro + Resend |
| 7 | 4 fichas a fondo | 5-8 medias, 1-2 casos de estudio |
| 8 | pnpm como gestor de paquetes | npm |
| 9 | Rutas solo en inglés (`/projects`, `/about`, `/contact`) en ambos idiomas | Rutas traducidas por idioma |
| 10 | Vercel | Cloudflare Pages, Netlify, GitHub Pages |
| 11 | Full-stack + IA aplicada | Frontend Vue/Nuxt, AI/LLM engineer |
| 12 | Borradores de Claude + revisión | Escritos por Juan Carlos, plantillas vacías |
| 13 | CV aportado en ES y EN | Uno solo, generado desde el sitio |
| 14 | `*.vercel.app` por ahora | Dominio propio |
| 15 | Propuesta de diseño previa, claro y oscuro | Solo oscuro, sin propuesta |
| 16 | `@nuxt/eslint` + Prettier | Solo ESLint, nada |
| 17 | Vercel Web Analytics | Sin analítica |
| 18 | Claude crea el repo y hace push | Push manual, todo local |
| 19 | Eliminar el MCP `primevue` | Mantenerlo |
