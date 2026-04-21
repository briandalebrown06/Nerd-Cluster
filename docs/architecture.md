# Nerd Cluster Architecture (Milestone 0)

## Purpose

Establish a low-chaos foundation that supports editorial growth without early overengineering.

## Route strategy

- Use Next.js App Router.
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
