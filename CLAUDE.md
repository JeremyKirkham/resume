# CLAUDE.md

Guidance for Claude Code (and humans) working in this repository.

## What this is

A personal CV/résumé single-page site for Jeremy Kirkham. Static, no backend.
Built with **Vite + React + TypeScript**, styled with **Tailwind CSS v4**, and
deployed to **GitHub Pages** via GitHub Actions.

Live URL: https://jeremykirkham.github.io/resume/

## Commands

| Task             | Command             |
| ---------------- | ------------------- |
| Dev server       | `npm run dev`       |
| Type check       | `npm run typecheck` |
| Lint             | `npm run lint`      |
| Auto-fix lint    | `npm run lint:fix`  |
| Format           | `npm run format`    |
| Production build | `npm run build`     |
| Preview build    | `npm run preview`   |

**Before committing, run `npm run typecheck`, `npm run lint`, and
`npm run format` — these are enforced by CI on every pull request.**

## Project layout

- `src/data/resume.ts` — **single source of truth for all résumé content.**
  To change wording, jobs, skills, projects, or talks, edit this file only;
  components render it generically.
- `src/components/` — small presentational components (`Header`, `Section`,
  `Experience`, `Skills`, `SideProjects`, `Talks`, `TechTag`).
- `src/App.tsx` — page layout composition.
- `src/index.css` — Tailwind import + brand palette (`@theme` block).

## Conventions & constraints

- **Base path:** `vite.config.ts` sets `base: '/resume/'` because the repo is
  named `resume` and Pages serves it from a sub-path. Reference `public/` assets
  as `/resume/<file>`. Do not remove this without also changing the deploy URL.
- **No search indexing:** the site must stay out of search engines. Keep the
  `noindex, nofollow` robots meta tags in `index.html` **and**
  `public/robots.txt` (`Disallow: /`). Do not remove either.
- **No personal contact details:** this is a public page. Do **not** add home
  address, phone number, or email. GitHub link only.
- **Palette:** use the brand colours via Tailwind utilities generated from the
  `@theme` block, e.g. `bg-indigo_velvet-500`, `text-amber_flame-600`,
  `text-cayenne_red-500`. Prefer these over ad-hoc hex values.
- **Light theme** only.

## Deployment

- Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
  publishes `dist/` to GitHub Pages.
- One-time setup: repo **Settings → Pages → Source = "GitHub Actions"**.
- `.github/workflows/ci.yml` runs typecheck + lint + format check + build on PRs.
