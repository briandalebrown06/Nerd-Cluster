# Nerd Cluster

Nerd Cluster is a polished entertainment, fandom, pop-culture, and collector-focused editorial website.

## Milestone status

- ✅ Milestone 0: stack and tooling foundation
- ✅ Milestone 1: global layout and core route structure

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Run validation checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Scripts

- `npm run dev` — start local development
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — lint with Next.js rules
- `npm run typecheck` — run TypeScript checks
- `npm run format` — apply Prettier formatting
- `npm run format:check` — check formatting

## Route foundation (Milestone 1)

- `/` Home
- `/news`
- `/reviews`
- `/features`
- `/store`
- `/about`
- `/contact`
- `app/not-found.tsx` — 404 fallback UI (App Router convention, not a direct route)

## Project structure

- `app/` — App Router pages and global layout
- `components/layout/` — site-wide shell and page wrappers
- `components/ui/` — reusable UI primitives
- `content/` — section-based content directories
- `lib/` — utilities and shared types
- `docs/` — architecture and design guidance

## Content workflow (initial)

- Place content by section under `content/news`, `content/reviews`, `content/features`.
- Follow metadata conventions in `lib/content/README.md`.
- Keep schemas stable for future CMS migration.

## Principles

- Keep architecture clean and predictable.
- Prefer reusable components and consistent naming.
- Maintain editorial polish and accessibility from day one.
