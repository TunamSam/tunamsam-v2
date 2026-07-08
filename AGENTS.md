# AGENTS.md

## Commands

```bash
npm run dev        # start Vite dev server
npm run build      # typecheck (tsc -b) then build (vite build)
npm run preview    # preview production build
```

No lint, format, or test tooling is configured.

## Architecture

Single-page Vite + React 19 + TypeScript landing site for a web studio. No router — everything is one page with hash-anchor sections.

- `src/main.tsx` — entry point
- `src/App.tsx` — root component, wraps everything in `I18nProvider`, renders each section top-to-bottom
- `src/index.css` — Tailwind v3 directives + extensive custom CSS (collage layouts, marquee, wave animations, criteria scroll, reveal-on-scroll)

### Component ownership

- **Hand-written** (in `src/components/`): `Header`, `Hero`, `Criteria`, `Process`, `SuccessCtaSection`, `FaqSection`, `TestimonialCarousel`, `Icon`
- **Generated** (in `src/components/generated/`): `TrustedBy`, `ProblemSolution`, `Pricing`, `TechnicalSupportBanner`, `WhyUs`, `DesignChoices`, `AdditionalServices`, `Footer`

### SEO metadata

All SEO metadata is static in `index.html` — title, description, canonical, Open Graph, Twitter Card, Organization JSON-LD, WebSite JSON-LD, FAQPage JSON-LD, Google Analytics. No JS needed for crawlers.

`<html lang>` updates dynamically via `useEffect` in `App.tsx` when the user switches language (ID ↔ EN).

### Generated component workflow

Generated components come from `index.html.bak`. When that HTML source changes:

1. `node scripts/convert-html.mjs` — parses `index.html.bak` into `src/components/generated/*.tsx`
2. `node scripts/fix-generated.mjs` — converts `data-lucide` attrs to `<Icon name="..."/>`, `data-i18n` attrs to `{t('key')}`, adds imports

Generated output often needs manual cleanup after the scripts run.

## i18n

Two languages: `ID` (default) and `EN`. All translations in `src/i18n/translations.ts`.

To use translations in a component:
```tsx
import { useI18n } from '../context/I18nContext'; // or ../../context/... for generated/
const { t } = useI18n();
// then: {t('some_key')}
```

When adding a new translation key:
1. Add the string literal to the `TranslationKey` union type
2. Add entries to both `ID` and `EN` records
3. Fallback: undefined keys fall back to the `ID` translation, then to the raw key string

## Styling conventions

- Tailwind for layout/utility classes
- Custom CSS in `index.css` for complex animations (`.collage-container`, `.wave-container`, `.marquee-container`, `.criteria-section`, `.slider-container`)
- Scroll-reveal: add class `reveal-on-scroll` + optional `stagger-N` delay; the `useRevealOnScroll` hook (called from `AppContent`) handles intersection detection
- Brand colors: `brand` (#026937), `brand-light` (#00bf63), `brand-dark` (#004d28)
- Fonts: `font-sans` (Inter), `font-heading` (Roboto Slab). Outfit and Font Awesome 6 also loaded via CDN in `index.html`

## TypeScript quirks

- `verbatimModuleSyntax: true` — must use `import type` for type-only imports
- `noUnusedLocals: true`, `noUnusedParameters: true` — strict on dead code
- `tsc -b` uses project references (`tsconfig.app.json` + `tsconfig.node.json`) so typechecking covers both `src/` and `vite.config.ts`

## Assets

- Images in `public/assets/` (logos, screenshots, client logos)
- Referenced as `/assets/...` in components
- Favicon: `public/assets/logo/tunamsam.webp`

## SEO Standards

Before creating or modifying any page:

- Always preserve semantic HTML.
- Only one H1 per page.
- Every image must have an appropriate alt attribute.
- Every page must have unique metadata.
- Use reusable SEO component.
- Keep Organization Schema valid.
- Never remove structured data.
- Preserve robots.txt and sitemap.xml.
- Maintain Lighthouse:
  - SEO >= 100
  - Accessibility >= 95
  - Best Practices = 100
  - Performance >= 90

## Accessibility Standards

- All interactive elements must be keyboard accessible.
- All icon-only buttons require aria-label.
- Decorative images use empty alt.
- Visible focus state must remain.
- Use semantic HTML whenever possible.

## Branding Standards

Always refer to the company consistently as:

Tunamsam

Preferred description:

Software House Indonesia specializing in website development, custom software, web applications, dashboards, UI/UX, and digital solutions.

Avoid inconsistent naming.