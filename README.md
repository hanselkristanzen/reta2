# Margareta Nadya — Cyber Security Portfolio

An editorial, art-directed portfolio for Margareta Nadya Roselani Bramanjaya, a
Cyber Security student at BINUS University. Built with React, Vite,
TypeScript, and Tailwind CSS v4, with a handful of components adapted from
[React Bits](https://reactbits.dev).

Every fact on the site — dates, GPA, organizational titles, project scope,
tools, metrics — is sourced from the CV or from certificates/photos/project
case studies supplied directly. See **Content accuracy** below.

## Getting started

```bash
npm install
npm run dev       # dev server, usually http://localhost:5173
```

```bash
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build locally
npm run lint       # oxlint
```

Deploy `dist/` anywhere static: on Vercel or Netlify, framework preset
"Vite", no extra config needed.

This repo is git-initialized with one commit per build phase, so you can
`git log --oneline` to see how the design evolved and `git diff` between
phases if you want to roll part of it back.

## Project structure

```text
src/
├── assets/images/        Optimized WebP photos, certificates, project shots
├── components/
│   ├── react-bits/       Adapted React Bits components (see below)
│   ├── sections/         Page sections (Hero, About, Projects, ...)
│   └── ui/                Reusable primitives (Dialog, Reveal, EditorialImage, ...)
├── data/portfolio.ts      All content — the single source of truth
├── types/portfolio.ts     TypeScript interfaces for the data above
├── hooks/                 usePrefersReducedMotion, useActiveSection, useDialogBehavior
├── lib/cn.ts              Tiny classnames helper
├── App.tsx
├── main.tsx
└── index.css              Design tokens, motion system, base styles
```

To change any text, edit `src/data/portfolio.ts` — components read from
there rather than hardcoding copy.

## Design system

- **Palette**: a warm ink-and-paper base (`--color-void`/`--color-ink`/
  `--color-paper`) with one muted brass accent (`--color-signal`) used
  sparingly — active nav state, the one primary call-to-action, a handful
  of pull-quotes — rather than washed across every badge and icon.
  Severity colors (crimson/amber/wire-blue for High/Medium/Low findings)
  are semantic and independent of the accent.
- **Type**: Space Grotesk (display) + Inter (body) + JetBrains Mono
  (technical labels only — tool tags, dates, CVSS-style figures).
- **Motion tokens**: `--ease-out` / `--ease-in-out` / `--ease-drawer` —
  strong custom curves rather than built-in CSS easings, per
  emil-design-eng's standards. Every entrance uses the shared `.reveal`
  CSS-transition pattern (`Reveal.tsx`); nothing scrubs against scroll
  position except the one `ScrollReveal` paragraph in About.
- **`can-hover:`** is used everywhere instead of Tailwind's `hover:` — a
  custom variant (`@custom-variant can-hover` in `index.css`) gated behind
  `@media (hover: hover) and (pointer: fine)`, so tapping on touch devices
  never leaves an element stuck mid-hover.
- **Navigation**: a single full-screen "Index" overlay (not a persistent
  link row + separate mobile drawer) — the same component serves both
  desktop and mobile.

## React Bits components used

Fetched from the React Bits repository (MIT + Commons Clause) and adapted
where noted:

| Component | Where | Adaptation |
|---|---|---|
| `DecryptedText` | Hero role line | none |
| `SplitText` | Every section heading | none |
| `ScrollReveal` | About's summary paragraph | renders `<div><p>` instead of `<h2><p>`, so it's valid as body copy |
| `SpotlightCard` | (available, currently unused after the Projects redesign) | base surface/border classes removed so `className` fully controls theming |
| `TiltedCard` | Featured project visual | accepts `children` in addition to `imageSrc` (no real screenshot exists for that project); tilt physics now gated behind real hover capability so touch doesn't get stuck mid-tilt |

`BlurText`, `FadeContent`, and `Particles` were used in an earlier pass of
this site and are no longer wired up (Hero and section entrances now use
simpler, lighter-weight approaches) — not deleted, in case a future pass
wants them.

## Content accuracy

- CV facts (dates, GPA, titles, project scope, tools, metrics) are
  transcribed verbatim or lightly reworded for flow — never changed in
  substance.
- ICPC Asia Jakarta 2025 and Codeavour 7.0 are shown as photo evidence
  only, with no invented title, date, or responsibilities.
- The HILET "2nd Place — Best Noble, House Highspire" recognition is
  shown under SESVENT 2025 using the exact wording on the award slide,
  since it differs from "Best Mentor Award."
- **The Mobile Application Penetration Tester project deliberately omits
  the hospital's real name and does not reproduce the four technical
  evidence screenshots supplied for it.** Those images show a live API
  domain, real JWT payloads, an exposed email address, and a working
  OTP-brute-force sequence against a named, presumably still-operational
  hospital system — not appropriate for a public, search-indexable
  portfolio regardless of the academic context. An original abstract
  graphic (`SecurityVisual.tsx`) stands in for it instead, and the
  write-up stays at the same descriptive level the CV already used.
- WasteWise (project 04) has no CV entry; everything shown is drawn
  directly from the project image supplied for it, presented
  conservatively as an additional project.
- The EdTech project's case-study image states "22 math topics" while the
  CV says "30+" — the CV's figure was kept as the on-site claim since the
  CV is the designated source of truth; this discrepancy is simply
  worth knowing about.

## Accessibility & performance

- Skip-to-content link, semantic landmarks, full keyboard support,
  visible focus states, a focus-trapped/Escape-to-close dialog shared by
  the nav overlay, the project case-study modal, and the image lightbox.
- Every JS-driven animation is skipped under `prefers-reduced-motion`;
  CSS transitions are neutralized globally via a media query.
- The project case-study modal and the image lightbox are code-split
  (`React.lazy`) since neither is needed for first paint.
- Photos/certificates are optimized WebP, lazy-loaded below the fold.
- `viewport-fit=cover` + `env(safe-area-inset-*)` so the fixed header and
  full-screen nav overlay clear notches and home indicators.
- Gzipped JS is ~176KB — down from ~194KB in the previous pass after
  removing the WebGL particle background and its `ogl` dependency, which
  the new Hero no longer uses.
