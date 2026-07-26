# AGENTS.md

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # typecheck (tsc -b) then build (vite build) — no separate tsc script
npm run preview    # preview production build
```

No lint, format, or test tooling.

## Architecture

Vite + React 19 + TypeScript site. React Router (BrowserRouter). Homepage (`/`) stacks sections (Hero, TrustedBy, ProblemSolution, etc.). 8+ routes: `/katalog-desain`, `/harga-website`, `/tentang-kami`, `/testimoni`, `/kontak`, `/blog`, `/blog/:slug`.

### Component ownership

- **Hand-written** (`src/components/`): `Header`, `Hero`, `Criteria`, `Process`, `SuccessCtaSection`, `FaqSection`, `TestimonialCarousel`, `Icon`, `DesignCatalog`, `DesignDetail`, `PricingPage`, `AboutPage`, `TestimonialsPage`, `ContactPage`, `BlogPage`, `BlogPostPage`
- **Generated** (`src/components/generated/`): `TrustedBy`, `ProblemSolution`, `Pricing`, `TechnicalSupportBanner`, `WhyUs`, `DesignChoices`, `AdditionalServices`, `Footer`

### Generated component workflow

Source of truth is `index.html.bak`. When it changes:

1. `node scripts/convert-html.mjs` — splits HTML into `src/components/generated/*.tsx`
2. `node scripts/fix-generated.mjs` — converts `data-lucide` → `<Icon name="..."/>`, `data-i18n` → `{t('key')}`, adds imports

Output often needs manual cleanup after running scripts.

### SEO

All metadata static in `index.html` (title, OG, Twitter Card, JSON-LD, GA). No JS-based SEO. `<html lang>` updates via `useEffect` in `App.tsx` on language switch.

## i18n

Two languages: `ID` (default) and `EN`. Translations in `src/i18n/translations.ts`.

Usage: `const { t } = useI18n();` then `{t('some_key')}`. Import from `'../context/I18nContext'` (or `'../../context/I18nContext'` from generated/).

Adding a key: add string literal to `TranslationKey` union type + entries in both `ID` and `EN` records. Fallback: `EN` → `ID` → raw key.

## Styling

- Tailwind for layout/utility; custom CSS in `index.css` for complex animations
- Scroll-reveal: add class `reveal-on-scroll` (+ optional `stagger-N`); `useRevealOnScroll` hook handles IntersectionObserver
- Brand colors: `brand` (#026937), `brand-light` (#00bf63), `brand-dark` (#004d28)
- Fonts: `font-sans` (Inter), `font-heading` (Roboto Slab)

## TypeScript quirks

- `verbatimModuleSyntax: true` — must use `import type` for type-only imports
- `noUnusedLocals: true`, `noUnusedParameters: true` — build fails on dead code
- `tsc -b` uses project references (`tsconfig.app.json` + `tsconfig.node.json`)

## Branding

Always refer to the company as **Tunamsam** (not TunamSam).
