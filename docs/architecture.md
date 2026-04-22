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

## Component layering

1. `app/*` handles route composition and page-level metadata.
2. `components/layout/*` provides global shell primitives (`SiteHeader`, `SiteFooter`, `PageShell`).
3. `components/ui/*` contains reusable visual primitives.
4. `lib/*` stores utilities and shared data contracts.
5. `content/*` holds section-based editorial content.

## Why Milestone 0 was refined

- The previous home-only shell was replaced with a global site shell so every core section now shares consistent structure and rhythm.
- Metadata was upgraded to include a baseline `metadataBase`, title template, and Open Graph defaults.
- Route scaffolding was expanded to support all core sections without introducing duplicate app trees.

## Maintainability rules

- Keep naming explicit and stable.
- Avoid alternate route structures unless they clearly reduce complexity.
- Extend shared layout primitives before adding one-off page wrappers.
- Keep future CMS integration paths straightforward via stable content contracts.
