import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import {
  formatPublishedDate,
  getEntriesBySection,
  getEntryAuthorName,
} from '@/lib/content/entries';
import type { EditorialSection } from '@/lib/content/types';

type EditorialListingProps = {
  section: EditorialSection;
  title: string;
  description: string;
};

export function EditorialListing({ section, title, description }: EditorialListingProps) {
  const entries = getEntriesBySection(section);

  return (
    <main id="main-content" className="page-shell">
      <div className="container editorial-page">
        <header className="editorial-page__header">
          <p className="home-kicker">{section}</p>
          <h1 className="editorial-page__title">{title}</h1>
          <p className="section-description">{description}</p>
        </header>

        <div className="editorial-grid">
          {entries.map((entry) => (
            <CardShell key={entry.id} className="editorial-card">
              <p className="story-card__category">{entry.categories.join(' · ')}</p>
              <h2 className="editorial-card__title">{entry.title}</h2>
              <p className="story-card__excerpt">{entry.excerpt}</p>

              <div className="editorial-card__meta">
                <span>{formatPublishedDate(entry.publishedAt)}</span>
                <span>{getEntryAuthorName(entry.authorId)}</span>
                <span>{entry.readingTimeMinutes} min read</span>
              </div>

              <div className="editorial-card__tags">
                {entry.tags.map((tag) => (
                  <span key={tag} className="editorial-tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <Link className="story-card__link" href={`/${section}/${entry.slug}`}>
                Read Story
              </Link>
            </CardShell>
          ))}
        </div>
      </div>
    </main>
  );
}
