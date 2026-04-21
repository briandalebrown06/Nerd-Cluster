# Content conventions

This directory defines shared content modeling rules for Nerd Cluster's editorial sections.

## Current implementation (Milestone 4)

- Content is file-based and local to the repo.
- Section entries live in:
  - `content/news/entries.ts`
  - `content/reviews/entries.ts`
  - `content/features/entries.ts`
- Shared query helpers and formatting utilities live in `lib/content/entries.ts`.
- Shared author records live in `lib/content/authors.ts`.

## Required shape for editorial entries

News / Reviews / Features entries should include:

- `id`
- `section`
- `title`
- `slug`
- `excerpt`
- `publishedAt` (ISO date string)
- `authorId` (maps to an author record)
- `categories` (array)
- `tags` (array)
- `featuredImage` (descriptor string for now)
- `readingTimeMinutes`
- `status` (`draft` or `published`)
- `body` (array of paragraphs)

Reviews additionally support:

- `score`
- `verdict`

## Slug rules

- Slugs should be lowercase.
- Use hyphen-separated words.
- Keep slugs stable after publishing.

## Date rules

- Use ISO 8601 date format, preferably UTC.
- Keep publication date immutable once content is live.

## Future CMS mapping

The current fields map cleanly to common headless CMS schemas.
Keep naming stable to reduce migration friction.
No CMS integration is implemented yet.
