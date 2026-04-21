# Content conventions

This directory defines shared content modeling rules for Nerd Cluster's editorial sections.

## Required shape for editorial entries

News / Reviews / Features content should include at least:

- `title`
- `slug`
- `excerpt`
- `publishedAt` (ISO date string)
- `authorId` (maps to an author record)
- `categories` (array)
- `tags` (array)
- `featuredImage`
- `status` (`draft` or `published`)

Optional fields can be added per section (for example, review scores).

## Slug rules

- Slugs should be lowercase.
- Use hyphen-separated words.
- Keep slugs stable after publishing.

## Date rules

- Use ISO 8601 date format, preferably UTC.
- Keep publication date immutable once content is live.

## Future CMS mapping

These fields map cleanly to common headless CMS schemas.
Keep naming stable to reduce migration friction.
