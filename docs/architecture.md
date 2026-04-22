<<<<<<< HEAD
# Nerd Cluster Architecture (Milestone 1)

## Purpose

Establish a clean, scalable site shell and route foundation before building full content systems.
=======
# Nerd Cluster Architecture (Milestone 0)

## Purpose

Establish a low-chaos foundation that supports editorial growth without early overengineering.
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710

## Route strategy

- Use Next.js App Router.
<<<<<<< HEAD
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
=======
- Keep one route tree under `app/`.
- Avoid alternate app structures or duplicate layout systems.

## Component layering

1. `app/*` handles route composition.
2. `components/ui/*` provides reusable presentation primitives.
3. `lib/*` contains pure utilities and types.
4. `content/*` stores structured section content.

## Rules for maintainability

- Keep naming explicit and stable.
- Do not create one-off structural patterns for individual pages.
- Add new primitives only when they are reused.
- Prefer extension over replacement for base layout patterns.

## Planned growth path

- Milestone 1: route expansion + global page shell patterns
- Milestone 2: navigation + footer
- Milestone 3+: homepage and content systems
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
