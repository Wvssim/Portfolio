# Wassim Lazim — Portfolio

A trilingual (EN / FR / AR), fully responsive personal portfolio with an
editorial / luxury aesthetic — built with Next.js and hand-crafted animations.

## Highlights

- **Trilingual i18n** — English, French and Arabic, with a proper **RTL mirror**
  for Arabic (layout, alignment and decorative elements all flip), via a
  lightweight React context (`lib/i18n.tsx`) — no external i18n dependency.
- **Responsive** — a shared `--gutter` token + grid breakpoints adapt every
  section from desktop down to mobile.
- **Editorial polish** — paper-grain overlay, optical typography (Fraunces +
  DM Sans), pure-CSS scroll reveals, spotlight cards, an animated gold-dust
  footer, refined shadows / scrollbar / focus rings. All motion respects
  `prefers-reduced-motion`.
- **Certifications gallery** — 10 certificates as a click-to-open **lightbox**
  (keyboard navigation, focus trap), optimised WebP previews (~12× smaller than
  the source PNGs) and live Coursera verification links.
- **SEO / sharing** — `W` favicon, dynamic Open Graph image (`next/og`),
  `sitemap.xml`, `robots.txt`. The site URL is derived automatically from the
  Vercel production URL (no hard-coded domain).
- **Extras** — downloadable CV, custom 404 page.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 18 + TypeScript
- Inline styles + a single `app/globals.css` (CSS variables, keyframes,
  scroll-driven animations)
- Canvas effects (`LetterGlitch`, `GoldDust`)
- `next/og` for the social image

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx            # metadata, fonts, i18n provider
  page.tsx              # section composition
  globals.css           # design tokens, animations, responsive grids
  icon.svg              # favicon
  opengraph-image.tsx   # dynamic social card
  sitemap.ts / robots.ts
  not-found.tsx         # custom 404
components/             # Hero, Nav, WorkGrid, Education (certs lightbox), …
lib/
  i18n.tsx              # language context (+ RTL handling)
  translations.ts       # EN / FR / AR copy
  data.ts               # projects, skills, experience, certifications
public/
  certs/*.webp          # certificate previews
  Wassim_Lazim_CV.pdf
scripts/
  convert-certs.mjs     # one-off PNG -> WebP helper (sharp)
```

## Deployment

Deployed on [Vercel](https://vercel.com): import the GitHub repo, Next.js is
auto-detected, deploy. Every push to `main` redeploys automatically. The Open
Graph image, sitemap and canonical URLs pick up the Vercel production URL on
their own.

## License

Personal project — all rights reserved.
