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

| Perfil                                     | Qué necesita                                  | Cómo lo resuelve el sitio                                                                                         |
| ------------------------------------------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Reclutador no técnico                      | Entender en 30 s qué haces y cómo contactarte | Hero con tu rol, CTA de contacto visible y CV descargable                                                         |
| Reclutador o lead técnico                  | Ver la calidad del trabajo y del código       | Fichas a fondo con stack, decisiones y enlaces a repos públicos. El propio repo del portafolio también es público |
| Empresas de España/LatAm e internacionales | Leer en su idioma                             | Sitio bilingüe ES/EN                                                                                              |

## 4. Posicionamiento

> **Ingeniero full-stack (Vue/Node) con foco en IA aplicada.**

Encaja con los proyectos elegidos: frontends en Vue, backends en Node/Python y productos que usan modelos de IA (Gemini, Veo, Lyria, gateways de LLMs).

## 5. Alcance

### 5.1 Incluido en la v1

Los nombres de ruta van **siempre en inglés**. El idioma solo cambia el prefijo: sin prefijo para ES y `/en` para EN.

El sitio tiene **dos tipos de página**. Inicio es una sola página que se recorre con scroll, inspirada en [david-hckh.com](https://david-hckh.com/), y cada proyecto tiene su propia ficha.

| Página              | Ruta ES            | Ruta EN               | Contenido                                                                                      |
| ------------------- | ------------------ | --------------------- | ---------------------------------------------------------------------------------------------- |
| Inicio              | `/`                | `/en`                 | Secciones en orden: hero, Sobre mí (`#about`), Proyectos (`#projects`) y Contacto (`#contact`) |
| Detalle de proyecto | `/projects/[slug]` | `/en/projects/[slug]` | Ficha completa                                                                                 |

Elementos comunes:

- Cabecera fija con tu nombre, enlaces a las secciones de Inicio (marca la sección visible), selector de idioma que conserva la ruta actual y botón de tema claro/oscuro.
- Pie con enlaces de contacto.
- Página de error (`app/error.vue`).

### 5.2 Fuera de la v1

- Blog.
- Formulario de contacto, y en general cualquier backend o server route.
- Dominio propio (de momento `*.vercel.app`).
- CMS: el contenido vive en el repo.

## 6. Proyectos destacados (v1)

| Proyecto                | Repo                                                                      | Qué es                                                                                                                                                                                                        | Por qué está                                        |
| ----------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Stories Factory**     | [`jccg-code-api`](https://github.com/JCCG-code/jccg-code-api)             | Pipeline orquestado con n8n que usa Gemini, Imagen 3, Veo 2.0 y Lyria para generar guion, voz, música y vídeo, los monta con FFmpeg y publica en TikTok y YouTube Shorts. Node/Express, MongoDB, Docker y GCS | IA aplicada de extremo a extremo, con demo en vídeo |
| **Tripshot**            | [`tripshot`](https://github.com/JCCG-code/tripshot)                       | Red social de viajes: Vue 3 PWA con Web Push y tiempo real                                                                                                                                                    | Full-stack y producto completo                      |
| **Unified LLM Gateway** | [`unified-llm-gateway`](https://github.com/JCCG-code/unified-llm-gateway) | Gateway en Python para LLMs                                                                                                                                                                                   | Backend e infraestructura de IA                     |
| **Documind**            | [`documind`](https://github.com/JCCG-code/documind)                       | Aplicación en Vue (detalle por documentar a partir de su README)                                                                                                                                              | Frontend + IA                                       |

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
- **Calidad de código**: ESLint (`@nuxt/eslint`), Prettier y `nuxt typecheck` sin errores. El código es público y forma parte de la muestra.

## 9. Diseño

Dirección aprobada el 2026-10-20: **A · Cal y almagra**. Se construyó con el proceso de la skill `frontend-design`, a partir de la referencia [david-hckh.com](https://david-hckh.com/). La comparación con la alternativa descartada está en [`docs/design/direcciones.html`](design/direcciones.html).

### 9.1 Principios

- **La terminal es lo único llamativo.** El resto (hero, proyectos, contacto) es sobrio, tipográfico y con mucho aire.
- **La animación ocurre una sola vez, en la terminal.** No se animan entradas por sección ni tarjetas en hover.
- **La monoespaciada solo aparece en la terminal.** No se usa para etiquetas decorativas.
- **Los proyectos destacan por la imagen y el texto es mínimo:** título, una línea y etiquetas de stack.
- **Sin recursos de plantilla:** etiquetas en mayúsculas sobre los títulos, numeración 01/02/03, flechas → en los botones, una palabra destacada en el titular, metadatos separados con puntos.
- **Sin 3D ni WebGL.** Solo SVG y CSS, para mantener Lighthouse ≥ 90.

### 9.2 Paleta

Todas las combinaciones de texto cumplen **WCAG AA** (≥ 4,5:1).

| Token       | Nombre           | Claro     | Oscuro    | Uso                                       |
| ----------- | ---------------- | --------- | --------- | ----------------------------------------- |
| `--bg`      | Cal / Noche      | `#F6F6F2` | `#121921` | Fondo de página                           |
| `--surface` | —                | `#FFFFFF` | `#19222C` | Tarjetas                                  |
| `--text`    | Tinta            | `#18202B` | `#E8EAE6` | Texto principal (15,1:1 / 14,6:1)         |
| `--muted`   | —                | `#5B6573` | `#9AA4AF` | Texto secundario (5,5:1 / 7,0:1)          |
| `--line`    | —                | `#DFE1DC` | `#26313D` | Bordes y separadores                      |
| `--accent`  | Almagra          | `#A8322A` | `#E0675C` | Único acento: botón principal, foco, nav  |
| —           | Azulejo          | `#63B5BE` | `#63B5BE` | Prompt de la terminal (7,5:1 sobre Noche) |
| —           | Albero           | `#D9A441` | `#D9A441` | Cursor de la terminal                     |
| `--term-bg` | Noche / Noche +1 | `#121921` | `#0B1016` | Fondo de la terminal en ambos temas       |

Almagra es el rojo de los arcos de la Mezquita, azulejo y albero son los otros colores de Córdoba, y cal es un neutro, no un crema cálido.

### 9.3 Tipografía

- **Schibsted Grotesk** (400, 500, 700, 800) para titulares y texto.
- **IBM Plex Mono** (400, 500) solo para la terminal.
- Se cargan con `@nuxt/fonts`, autoalojadas en el build, sin peticiones a Google en producción.
- Escala clásica de _The Elements of Typographic Style_:

| Rol                 | Tamaño                     | Peso | Interlineado | Tracking |
| ------------------- | -------------------------- | ---- | ------------ | -------- |
| Display (tu nombre) | `clamp(48px, 8vw, 96px)`   | 800  | 0,95         | −0,02em  |
| H2 (secciones)      | `clamp(36px, 5vw, 48px)`   | 800  | 1,05         | −0,02em  |
| H3 (tarjetas)       | 24px                       | 700  | 1,2          | −0,01em  |
| Cuerpo grande       | 21px                       | 400  | 1,5          | 0        |
| Cuerpo              | 18px                       | 400  | 1,6          | 0        |
| Pequeño / etiquetas | 14px                       | 500  | 1,4          | 0        |
| Terminal            | `clamp(14px, 1.6vw, 16px)` | 400  | 1,7          | 0        |

- Longitud de línea: como máximo 70 caracteres en los párrafos.

### 9.4 Forma y layout

- Todo alineado a la izquierda, con un contenedor de 1120 px de máximo y 16 px de margen lateral en móvil.
- Esquinas de 6 px en tarjetas, botones y etiquetas, sin sombras: las superficies se separan con `--line`.
- Proyectos: Stories Factory destacado a todo el ancho; Tripshot, Unified LLM Gateway y Documind en una rejilla de 2 columnas, más una tarjeta discontinua «¿Tu proyecto?» que lleva a contacto. En móvil, una sola columna.

```
┌──────────────────────────────────────────────────────────────┐
│ Juan Carlos Cuadrado    Sobre mí  Proyectos  Contacto  ES/EN ◐│
├──────────────────────────────────────────────────────────────┤
│  Juan Carlos                                                 │
│  Cuadrado                                                    │
│  Ingeniero full-stack en Córdoba…                            │
│  [Ver proyectos]  [Descargar CV]                             │
├──────────── #about: terminal fija mientras se escribe ───────┤
│ ~ $ whoami                                                   │
│ ~ $ cat stack.json                                           │
│ ~ $ git log --oneline carrera                                │
│ ~ $ ls proyectos/        ← cada carpeta enlaza a su ficha    │
├──────────────────────────────────────────────────────────────┤
│ #projects  [ Stories Factory · a todo el ancho ]             │
│            [ Tripshot ]       [ Unified LLM Gateway ]        │
│            [ Documind ]       [ ¿Tu proyecto? ]              │
├──────────────────────────────────────────────────────────────┤
│ #contact   Construyamos algo juntos.                         │
│            email  LinkedIn  GitHub      CV (ES)  CV (EN)     │
└──────────────────────────────────────────────────────────────┘
```

La ficha `/projects/[slug]` sigue este orden: volver, título y resumen, datos (stack, papel, enlaces), portada, problema, solución, decisiones, aprendizajes y siguiente proyecto.

### 9.5 La terminal (Sobre mí)

- Es HTML real: se puede seleccionar, se traduce con i18n y la leen los lectores de pantalla.
- Mientras se recorre su sección, la terminal queda fija y cada comando se «escribe» cuando llega su tramo de scroll, una sola vez.
- Comandos y salida:
  - `whoami`: nombre y rol.
  - `cat stack.json`: stack por áreas.
  - `git log --oneline carrera`: experiencia contada como commits.
  - `ls proyectos/`: una carpeta por proyecto, cada una enlazada a su ficha.
- Con `prefers-reduced-motion` se muestra entera y estática.
- Los comandos van en inglés en los dos idiomas; las salidas se traducen.

### 9.6 Implementación de los tokens

- Los tokens anteriores se trasladan a las variables CSS de shadcn-vue (`--background`, `--foreground`, `--primary`, `--muted-foreground`, `--border`, `--ring`, `--radius`…) en formato OKLCH, con sus valores para `:root` y `.dark`.

## 10. Stack técnico

| Área               | Elección                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework          | Nuxt 4 (`app/` como raíz del código)                                                                                                                                                                                                  |
| Lenguaje           | TypeScript en todo el proyecto (`<script setup lang="ts">` en los componentes). Comprobación de tipos con `vue-tsc` + `typescript@^6` y el script `typecheck` (`nuxt typecheck`). TypeScript 7 todavía no es compatible con `vue-tsc` |
| Gestor de paquetes | pnpm                                                                                                                                                                                                                                  |
| UI                 | shadcn-vue a través de `shadcn-nuxt`, con componentes en `app/components/ui/`                                                                                                                                                         |
| Fuentes            | `@nuxt/fonts`: Schibsted Grotesk e IBM Plex Mono autoalojadas                                                                                                                                                                         |
| Estilos            | Tailwind CSS v4 (`@tailwindcss/vite`)                                                                                                                                                                                                 |
| Tema               | `@nuxtjs/color-mode` (`classSuffix: ''`)                                                                                                                                                                                              |
| i18n               | `@nuxtjs/i18n` (`strategy: 'prefix_except_default'`)                                                                                                                                                                                  |
| Contenido          | `@nuxt/content` con colecciones por idioma y esquema zod                                                                                                                                                                              |
| Analítica          | `@vercel/analytics`                                                                                                                                                                                                                   |
| Lint y formato     | `@nuxt/eslint` + Prettier con la configuración de Tripshot (`.prettierrc`: sin `;`, comillas simples, sin trailing commas) y `.editorconfig`                                                                                          |
| Hosting            | Vercel (estático), `*.vercel.app`                                                                                                                                                                                                     |
| Repositorio        | `JCCG-code/jccg-code-portal`, público                                                                                                                                                                                                 |

### Estructura prevista

```
app/
├── components/
│   └── ui/              # componentes shadcn-vue
├── layouts/default.vue
├── pages/
│   ├── index.vue          # hero + #about + #projects + #contact
│   └── projects/[slug].vue
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

| Campo      | Tipo     | Notas                          |
| ---------- | -------- | ------------------------------ |
| `title`    | string   |                                |
| `summary`  | string   | Una línea, para tarjetas y SEO |
| `stack`    | string[] |                                |
| `repo`     | url      | Opcional (repos privados)      |
| `demo`     | url      | Opcional                       |
| `cover`    | string   | Imagen principal               |
| `images`   | string[] | Galería                        |
| `order`    | number   | Orden en la lista              |
| `featured` | boolean  | Aparece en Inicio              |

## 11. Plan de implementación

1. **Limpieza y git**: quitar `primevue` de `.mcp.json`, migrar a pnpm (borrar `package-lock.json` y `node_modules`, `pnpm install`), `git init`, primer commit, crear el repo en GitHub y hacer push.
2. **Tooling**: `@nuxt/eslint` + Prettier con los scripts `lint` y `format`, y `vue-tsc` + `typescript` con el script `typecheck`.
3. **Propuesta de diseño** ✅: aprobada la dirección A (sección 9).
4. **UI base**: shadcn-nuxt, Tailwind v4, `@nuxt/fonts`, tokens de la sección 9, color-mode y layout.
5. **i18n**: configuración, archivos de traducción y prefijo `/en`, con rutas en inglés en ambos idiomas.
6. **Contenido**: colecciones, esquema y borradores de las 4 fichas.
7. **Páginas**: Inicio (hero, terminal, proyectos, contacto), detalle de proyecto y SEO.
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
- [ ] Texto o datos para «Sobre mí», incluidas las entradas de experiencia del `git log` de la terminal
- [ ] Conectar el repo en Vercel (necesita su sesión)

## 13. Verificación

- `pnpm lint`, `pnpm format:check`, `pnpm typecheck` y `pnpm generate` sin errores.
- `pnpm dev` y recorrido con el MCP de Playwright o el de Chrome DevTools: todas las páginas en ES y EN, en tema claro y oscuro, en escritorio y en móvil (375 px), con capturas.
- El selector de idioma conserva la ruta, los enlaces a repos y CV funcionan y no hay scroll horizontal en móvil.
- La terminal se escribe una sola vez al hacer scroll, y con `prefers-reduced-motion` aparece completa y estática.
- Tras el despliegue: la URL de `*.vercel.app` carga y las visitas aparecen en Vercel Analytics.

## 14. Registro de decisiones

| #   | Decisión                                                                             | Alternativas descartadas                          |
| --- | ------------------------------------------------------------------------------------ | ------------------------------------------------- |
| 1   | Portafolio personal orientado a reclutadores                                         | Freelance, comunidad, archivo personal            |
| 2   | Nuxt Content con Markdown                                                            | GitHub API, CMS headless, híbrido                 |
| 3   | shadcn-vue + Tailwind v4                                                             | PrimeVue (todo, estilado o unstyled)              |
| 4   | v1 sin blog                                                                          | —                                                 |
| 5   | Bilingüe ES (por defecto) + EN                                                       | Solo ES, solo EN                                  |
| 6   | Contacto por enlaces + CV PDF                                                        | Formulario con servicio externo, Nitro + Resend   |
| 7   | 4 fichas a fondo                                                                     | 5-8 medias, 1-2 casos de estudio                  |
| 8   | pnpm como gestor de paquetes                                                         | npm                                               |
| 9   | Rutas solo en inglés (`/projects/[slug]`) en ambos idiomas                           | Rutas traducidas por idioma                       |
| 10  | Vercel                                                                               | Cloudflare Pages, Netlify, GitHub Pages           |
| 11  | Full-stack + IA aplicada                                                             | Frontend Vue/Nuxt, AI/LLM engineer                |
| 12  | Borradores de Claude + revisión                                                      | Escritos por Juan Carlos, plantillas vacías       |
| 13  | CV aportado en ES y EN                                                               | Uno solo, generado desde el sitio                 |
| 14  | `*.vercel.app` por ahora                                                             | Dominio propio                                    |
| 15  | Propuesta de diseño previa, claro y oscuro                                           | Solo oscuro, sin propuesta                        |
| 16  | `@nuxt/eslint` + Prettier                                                            | Solo ESLint, nada                                 |
| 17  | Vercel Web Analytics                                                                 | Sin analítica                                     |
| 18  | Claude crea el repo y hace push                                                      | Push manual, todo local                           |
| 19  | Eliminar el MCP `primevue`                                                           | Mantenerlo                                        |
| 20  | TypeScript con comprobación de tipos (`nuxt typecheck`), siguiendo la guía de Nuxt 4 | JavaScript                                        |
| 21  | Inicio como una sola página con secciones + fichas en `/projects/[slug]`             | Rutas `/about` y `/contact` propias, multipágina  |
| 22  | La terminal como momento memorable de «Sobre mí»                                     | Model card de IA, diagrama de arquitectura        |
| 23  | Sin 3D: SVG + CSS                                                                    | Escena 3D ligera con TresJS                       |
| 24  | Grotesca técnica + mono                                                              | Editorial (serif + sans), una sola sans expresiva |
| 25  | Dirección A · Cal y almagra (Schibsted Grotesk + IBM Plex Mono)                      | B · Azul Klein (Switzer + Fragment Mono)          |
