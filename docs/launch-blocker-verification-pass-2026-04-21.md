# Launch-Blocker Verification Pass (2026-04-21)

## Scope
Focused verification for remediation work across:
- metadata wiring
- robots and sitemap consistency
- draft content visibility
- homepage date label durability
- homepage card-link correctness
- focus-visible consistency
- mobile menu keyboard behavior
- contact page launch-safe UX

## Results Summary

### Passed
1. **Metadata is wired across core routes and detail pages**
   - Global metadata base, OG, Twitter, and canonical defaults are defined in `app/layout.tsx`.
   - Route-level metadata exists for home, section listings, static pages, and dynamic detail pages via `generateMetadata`.

2. **`robots.ts` and `sitemap.ts` are valid and consistent**
   - `robots.ts` exposes `allow: '/'`, `host`, and a sitemap URL derived from the same site config source.
   - `sitemap.ts` includes static routes, editorial detail routes, and store detail routes.
   - Build output confirms `robots.txt` and `sitemap.xml` were generated.

3. **Draft content is not publicly rendered**
   - Content retrieval for all editorial sections is filtered by `status === 'published'` prior to route generation and lookup.

4. **Homepage date labels are durable**
   - Homepage card metadata uses `formatPublishedDate(...)` with a concrete `Intl.DateTimeFormat` date output rather than relative-time placeholders.

5. **Homepage cards link to expected detail pages**
   - Editorial cards resolve to `/${section}/${slug}`.
   - Store teaser cards resolve to `/store/${slug}`.

6. **Focus-visible states are present and broadly consistent**
   - Global `:focus-visible` styling is applied to links, buttons, inputs, textareas, and selects.

7. **Mobile menu keyboard handling is improved versus baseline**
   - Opening the menu moves focus to the first link.
   - `Escape` closes the panel and returns focus to the toggle.

8. **Contact page no longer presents as a broken “live” form**
   - The form is explicitly marked offline with clear guidance.
   - Inputs are disabled via `fieldset disabled` and the submit action is disabled.

### Still needs improvement
1. **Sitemap `lastModified` values for static/store routes currently use `new Date()`**
   - This can cause daily churn without meaningful content updates.
   - Recommend replacing with stable content-level timestamps or build/version timestamp.

2. **No in-repo draft fixtures currently exist**
   - Publication filtering logic is correct, but launch readiness would be stronger with at least one explicit draft fixture plus a test/assertion to prevent regression.

3. **Mobile nav keyboard UX is improved but not complete**
   - No focus trap while menu is open, so tabbing can move focus behind the overlay.
   - Optional enhancement: close on outside click and lock body scroll while open.

4. **Accessibility regression checks are manual only**
   - Add automated checks (Playwright + axe or equivalent) for focus order, skip-link behavior, and keyboard-only nav paths.

### Code smells observed
1. **Type narrowing pattern repeats in dynamic pages**
   - `entry`/`product` is checked and then used after `notFound()`; this works at runtime but can be brittle with type inference across Next versions.

2. **Metadata duplication across section detail routes**
   - News/Features/Reviews detail pages repeat near-identical metadata assembly logic.
   - A small shared utility could reduce drift risk.

3. **Sitemap update semantics are partially synthetic**
   - Editorial routes are tied to actual publish dates, but static and store routes use generated timestamps.

## Final pre-launch tasks (priority order)
1. Add stable `lastModified` strategy for static/store sitemap entries.
2. Add at least one draft fixture and regression test ensuring draft exclusion from lists, detail routes, and sitemap.
3. Add keyboard focus trap + body-scroll lock for the mobile menu overlay.
4. Add lightweight automated a11y smoke checks in CI (focus-visible, skip link, nav keyboard path).
5. Optional cleanup: centralize repeated detail-page metadata builder for editorial sections.
