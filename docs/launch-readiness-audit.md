# Nerd Cluster Milestone 8: Launch-Readiness & Maintainability Audit

_Date:_ 2026-04-21

This document captures a pre-launch QA review focused on architecture health, UX consistency, accessibility basics, maintainability, content operations, and launch risk.

## Scope Reviewed

- App routes, layout flow, and metadata strategy.
- Global navigation and footer consistency.
- Shared component patterns and reuse.
- Responsive CSS structure and mobile/desktop behavior.
- Accessibility fundamentals in current markup/styling.
- Editorial content model and update ergonomics.
- Store content model and future expansion readiness.
- Maintainability and technical debt hotspots.

## 1) Final Project Audit

### Overall status

**Current state:** strong foundation, **not fully launch-ready yet**.

The project is in good shape architecturally: clean route tree, reusable components, typed content models, and consistent visual system. However, there are a few launch-critical gaps (SEO/social metadata baseline, placeholder content fidelity, and accessibility polish) that should be fixed before public launch.

### Route structure

**Assessment: Good**

- Single App Router tree in `app/` with clear section alignment:
  - Home, News, Reviews, Features, Store, About, Contact.
  - Dynamic detail pages for News/Reviews/Features/Store via `[slug]`.
- `not-found.tsx` exists and is branded.
- Dynamic pages implement `generateStaticParams`, which keeps static generation straightforward.

### Navigation

**Assessment: Good with minor UX/accessibility caveats**

- Navigation source-of-truth is centralized in `lib/site-navigation.ts` and reused by header/footer.
- Active-state logic is in place and works for section roots + nested paths.
- Mobile menu has correct `aria-expanded` and `aria-controls` wiring.

Minor caveats:

- Mobile menu lacks keyboard escape handling and explicit focus management.
- Menu close behavior is click-driven only; keyboard/screen-reader flow could be more robust.

### Layout consistency

**Assessment: Good**

- Global shell (`layout.tsx`) applies skip link + shared header/footer.
- Typography, spacing, and card language are coherent across sections.
- Reusable primitives (`Container`, `CardShell`, `SectionHeading`) reinforce consistency.

### Component reuse

**Assessment: Good**

- Editorial listing/detail components are shared well across News/Reviews/Features.
- Store cards/detail patterns are modular and not duplicated.
- Utility functions (`lib/content/entries.ts`, `lib/store/products.ts`) keep route files thin.

### Responsive behavior

**Assessment: Good baseline**

- Grid and breakpoint strategy is clear and maintainable.
- Mobile-first flow is present with progressive desktop enhancements.
- Header/nav transitions to desktop nav at larger breakpoints cleanly.

Watch item:

- No explicit stress-testing for extreme copy lengths and dense taxonomy lists.

### Accessibility basics

**Assessment: Mixed (baseline present, needs polish)**

What is good:

- Skip link exists.
- Semantic sections/headings mostly structured.
- Mobile menu exposes expanded state.

Needs improvement:

- No visible `:focus-visible` treatment for many interactive controls.
- Decorative/representative images are placeholder text in `div role="img"` blocks; this is acceptable for scaffolding but weak for production semantics/performance.
- Disabled contact form is transparent about not being live (good), but still appears as a form users can attempt to use.

### Editorial content structure

**Assessment: Good, CMS-friendly direction**

- Strong typed model for article metadata.
- Consistent section datasets and author mapping.
- Content conventions documented in `lib/content/README.md`.

Key maintainability issue:

- `status` (`draft`/`published`) exists but is not enforced in retrieval functions; drafts would currently render if added.

### Maintainability

**Assessment: Good with a few high-value refactors**

- Naming is clear and predictable.
- Good separation between route composition, components, and content libraries.
- Minimal dead code detected.

Maintainability debt:

- Homepage content in `lib/homepage-content.ts` duplicates the editorial/store datasets and uses relative timing labels (`Today`, `Yesterday`, `2 hours ago`), which will age poorly and cause editorial drift.

### SEO/social metadata baseline

**Assessment: Not launch-ready yet**

- Basic page `title`/`description` is present.
- Missing production baseline items:
  - `metadataBase`
  - Open Graph and Twitter card defaults
  - canonical URL strategy
  - robots/sitemap outputs
  - richer structured data strategy (future, not necessarily blocker)

### Obvious missing pieces / user confusion risk

- Newsletter/podcast/search/tags/contributors are intentionally not live (communicated in UI, which is good).
- Homepage story cards currently link to section listing pages, not specific story detail pages; this weakens editorial browse depth and can feel unfinished.
- Contact form is intentionally disabled, but this should not be mistaken for an active submission flow.

## 2) Remaining Issues (Launch Priority)

### Must fix before launch (P0)

1. Add a real SEO/social metadata baseline (site-wide OG/Twitter/canonical + metadataBase).
2. Add `robots.ts` and `sitemap.ts` outputs.
3. Ensure draft filtering is enforced in content selectors.
4. Replace relative homepage recency strings with durable metadata-driven labels/dates.

### Should fix very soon (P1)

1. Improve keyboard/focus accessibility for menu and interactive elements.
2. Convert placeholder image blocks to actual optimized `next/image` usage where assets exist.
3. Link homepage cards to real detail pages (where applicable).

### Nice to fix (P2)

1. Add lightweight content validation scripts (slug uniqueness, required field checks).
2. Add visual regression checks for key templates.
3. Introduce section-level pagination or filtering as content volume grows.

## 3) Recommended Next Steps (Priority Order)

1. **SEO + crawl readiness pass** (metadata, robots, sitemap).
2. **Editorial integrity pass** (draft filtering + homepage data normalization).
3. **Accessibility polish pass** (focus states, menu keyboard flow, disabled-form UX affordances).
4. **Content operations guardrails** (validation script + editorial checklist).
5. **Discovery improvements** (tags/categories + search scaffolding).

## 4) Core Files to Understand for Maintenance

### Architecture and routes

- `app/layout.tsx`
- `app/page.tsx`
- `app/**/page.tsx` and `app/**/[slug]/page.tsx`
- `app/not-found.tsx`

### Shared UX foundations

- `app/globals.css`
- `components/layout/site-header.tsx`
- `components/layout/site-footer.tsx`
- `components/layout/page-shell.tsx`
- `components/ui/container.tsx`
- `components/ui/card-shell.tsx`
- `components/ui/section-heading.tsx`

### Editorial system

- `lib/content/types.ts`
- `lib/content/entries.ts`
- `lib/content/authors.ts`
- `lib/content/README.md`
- `content/news/entries.ts`
- `content/reviews/entries.ts`
- `content/features/entries.ts`
- `components/content/editorial-listing.tsx`
- `components/content/editorial-detail.tsx`

### Store system

- `lib/store/products.ts`
- `content/store/products.ts`
- `components/store/product-card.tsx`
- `components/store/store-landing.tsx`
- `components/store/store-product-detail.tsx`

### Navigation and homepage curation

- `lib/site-navigation.ts`
- `lib/homepage-content.ts`
- `components/home/*`

## 5) How to Continue This Project Safely (Short Guide)

1. **Keep one source of truth per content domain.** Avoid parallel datasets for the same stories/products.
2. **Never bypass shared layout/components** unless you are intentionally creating a new reusable pattern.
3. **Treat metadata as required content infrastructure, not polish.**
4. **Add features via vertical slices:** model -> data -> route -> UI -> validation.
5. **Run checks on every milestone:** lint, typecheck, build.
6. **Guard editorial quality with schema-like checks** before content merges.
7. **Prefer incremental evolution over rewrites** to preserve visual and architectural coherence.

## 6) Recommended Future Additions

### Newsletter

- Add a dedicated `/newsletter` landing page with archive-ready content blocks.
- Wire provider integration behind a server action/API route.
- Add consent/compliance copy and event tracking.

### Podcast

- Add `/podcast` listing + `/podcast/[slug]` episode pages.
- Define episode model: title, guest, runtime, summary, player embed, transcript status.

### Tags/Categories

- Normalize taxonomy definitions centrally in `lib/content`.
- Add tag/category index routes and entry-level linking.

### Search

- Start with client-side indexed search for current scale.
- Move to server/index-backed search as content grows.

### Contributor pages

- Expand author model (`avatar`, `bio`, socials, beats, archive links).
- Add `/contributors` and `/contributors/[id]`.

### CMS integration

- Preserve current schema names for easy migration.
- Build a data access abstraction so route components are CMS-agnostic.
- Support draft preview workflow.

### Merch/store expansion

- Add product detail enrichment (gallery, specs, shipping, release windows).
- Add availability lifecycle dates and regional support flags.
- Add affiliate disclosure and outbound tracking conventions.

## Bottom line

Nerd Cluster has a strong, coherent foundation and clear product voice. It is close to launch-ready, but **should be cleaned up before launch** in three direct areas:

1. SEO/social metadata baseline,
2. editorial data integrity (draft filtering + homepage consistency),
3. accessibility interaction polish.

Addressing these will materially reduce launch risk and long-term maintenance friction.
