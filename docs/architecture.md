# Nerd Cluster Architecture (Milestone 1)

## Purpose

Establish a clean, scalable site shell and route foundation before building full content systems.

## Route strategy

- Use Next.js App Router.
- Keep one route tree under `app/` with explicit top-level routes:
  - `/`
  - `/news`
  - `/reviews`
  - `/features`
  - `/store`
  - `/about`
  - `/contact`
- Add `app/not-found.tsx` for intentional 404 handling.
- Avoid duplicate layout systems or alternate app trees.

## Component layering

1. `app/*` handles route composition and page-level metadata.
2. `components/layout/*` provides global shell primitives (`SiteHeader`, `SiteFooter`, `PageShell`).
3. `components/ui/*` contains reusable visual primitives.
4. `lib/*` stores utilities and shared data contracts.
5. `content/*` holds section-based editorial content.

## Why Milestone 0 was refined

- The initial foundation established clean utilities and content contracts.
- The shell was then expanded so all core sections share consistent structure and rhythm.
- Metadata was upgraded with `metadataBase`, title templating, and Open Graph defaults.
- Route scaffolding now covers all core sections without introducing duplicate app trees.

## Maintainability rules

- Keep naming explicit and stable.
- Extend shared layout primitives before adding one-off page wrappers.
- Add new primitives only when they are reused.
- Keep future CMS migration paths straightforward via stable content contracts.

## Planned growth path

- Milestone 2: navigation and footer refinements
- Milestone 3+: homepage evolution and deeper content systems
