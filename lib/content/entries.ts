import { featureEntries } from '@/content/features/entries';
import { newsEntries } from '@/content/news/entries';
import { reviewEntries } from '@/content/reviews/entries';
import { getAuthorById } from '@/lib/content/authors';
import type { EditorialEntry, EditorialSection, ReviewEntry } from '@/lib/content/types';

type EntryBySection<TSection extends EditorialSection> = TSection extends 'reviews'
  ? ReviewEntry
  : EditorialEntry;

function sortEntries<T extends EditorialEntry>(entries: T[]): T[] {
  return [...entries].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

function filterPublished<T extends EditorialEntry>(entries: T[]): T[] {
  return entries.filter((entry) => entry.status === 'published');
}

const sectionMap = {
  news: sortEntries(filterPublished(newsEntries)),
  reviews: sortEntries(filterPublished(reviewEntries)),
  features: sortEntries(filterPublished(featureEntries)),
};

export function getEntriesBySection<TSection extends EditorialSection>(
  section: TSection,
): EntryBySection<TSection>[] {
  return sectionMap[section] as EntryBySection<TSection>[];
}

export function getEntryBySlug<TSection extends EditorialSection>(
  section: TSection,
  slug: string,
): EntryBySection<TSection> | undefined {
  return sectionMap[section].find((entry) => entry.slug === slug) as
    | EntryBySection<TSection>
    | undefined;
}

export function getRelatedEntries(
  section: EditorialSection,
  slug: string,
  limit = 3,
): EditorialEntry[] {
  const current = getEntryBySlug(section, slug);

  if (!current) {
    return [];
  }

  return sectionMap[section]
    .filter((entry) => entry.slug !== slug)
    .sort((a, b) => {
      const aTagOverlap = a.tags.filter((tag) => current.tags.includes(tag)).length;
      const bTagOverlap = b.tags.filter((tag) => current.tags.includes(tag)).length;

      if (aTagOverlap === bTagOverlap) {
        return a.publishedAt < b.publishedAt ? 1 : -1;
      }

      return bTagOverlap - aTagOverlap;
    })
    .slice(0, limit);
}

export function getEntryAuthorName(authorId: string) {
  return getAuthorById(authorId)?.name ?? 'Nerd Cluster Staff';
}

export function formatPublishedDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}
