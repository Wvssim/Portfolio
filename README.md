# Wassim Lazim — Portfolio v3

A personal portfolio built on top of [Naresh Khatri's 3d-portfolio
template](https://github.com/Naresh-Khatri/3d-portfolio) (MIT licensed, see
`LICENSE`), adapted with Wassim's own projects, experience and content.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Cache Components)
- React 19 + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- GSAP + Framer Motion (`motion`) for animation
- Lenis for smooth scroll
- Three.js + `@chibi3d/runtime` — the interactive 3D keyboard in the skills
  section (client-only, loaded via `next/dynamic`)
- `next-mdx-remote` for the blog
- Resend for the contact form
- `socket.io-client` for optional realtime presence/cursors/chat (no-op
  unless `NEXT_PUBLIC_WS_URL` is set)

Note: this version drops the previous EN/FR/AR i18n system — the site is
English-only, matching the template.

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

## Environment variables

See `.env.example`. Everything is optional except `RESEND_API_KEY` if you
want the contact form to actually send email — the build succeeds without
it, but sending will fail at request time until it's set.

## Project structure

```
src/
  app/            # routes (App Router)
  components/     # sections, UI primitives, 3D keyboard, realtime, game
  data/           # config.ts, constants.ts (skills/experience), projects.tsx
  content/blogs/  # MDX blog posts
  lib/, hooks/, contexts/, types/, utils/
public/
  assets/         # fonts, icons, backgrounds, keyboard models/sounds
  certs/          # certification previews
  Wassim_Lazim_CV_Full_Stack.pdf
```

## Deployment

Deployed on [Vercel](https://vercel.com): import the GitHub repo, Next.js is
auto-detected, deploy. Every push to `main` redeploys automatically.

## License

The template this portfolio is built on is MIT licensed by Naresh Khatri
(see `LICENSE`). Wassim's own content (projects, copy, CV, certificates) is
not covered by that license.
