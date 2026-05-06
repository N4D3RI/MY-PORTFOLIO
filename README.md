# NADERI

Personal site. Beacon. South Florida.

Static export. Next.js. Deploys to GitHub Pages on push to `main`.

## Run locally

```
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```
npm run build
```

Output lands in `out/`. The site is fully static — no server required.

## Deploy

Push to `main`. The `.github/workflows/deploy.yml` workflow builds the export and publishes to GitHub Pages.

In the repo's GitHub settings: `Settings → Pages → Build and deployment → Source = GitHub Actions`.

- If the repo is named `<username>.github.io`, it lives at that root URL.
- If the repo is anything else, the workflow auto-sets `basePath` to `/<repo-name>` so links resolve.

## State

Currently empty by design. Three sections render `PAYLOAD PENDING`. Content infra is dormant — MDX dependencies and `src/lib/content.ts` are still installed, and seed entries live in `content_archive/` for when transmissions resume.

## Stack

- Next.js 16 (App Router) + TypeScript, static export (`output: "export"`)
- Tailwind CSS v4 with `@theme` CSS-first config
- `next/font/google` (Space Grotesk · Inter · IBM Plex Mono — auto self-hosted at build, no CDN flicker)
- `next-mdx-remote` + `gray-matter` retained for when content returns

## Keyboard

- `?` toggles the shortcut overlay
- `G P` jumps to PROJECTS
- `G C` jumps to CHANNEL
- `ESC` closes overlays
