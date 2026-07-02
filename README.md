# Jeremy Kirkham — CV

Personal CV/résumé site. **Vite + React + TypeScript + Tailwind CSS**, deployed
to GitHub Pages.

🔗 https://jeremykirkham.github.io/resume/

> This site is intentionally excluded from search engines (`noindex` +
> `robots.txt`).

## Development

```bash
npm install
npm run dev        # http://localhost:5173/resume/
```

## Scripts

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the dev server          |
| `npm run build`     | Type-check + production build |
| `npm run preview`   | Preview the production build  |
| `npm run typecheck` | Type-check only               |
| `npm run lint`      | Run ESLint                    |
| `npm run lint:fix`  | Run ESLint with `--fix`       |
| `npm run format`    | Format with Prettier          |

## Editing content

All résumé content lives in [`src/data/resume.ts`](src/data/resume.ts). Edit
that file to update jobs, skills, side projects, or talks — the components
render it generically.

## Deployment

Pushing to `main` builds and publishes via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup:** in the repo **Settings → Pages**, set **Source** to
**"GitHub Actions"**.

Pull requests run type-check, lint, format check, and build via
[`.github/workflows/ci.yml`](.github/workflows/ci.yml).

See [CLAUDE.md](CLAUDE.md) for conventions and constraints.
