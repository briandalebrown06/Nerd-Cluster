import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import {
  formatPublishedDate,
  getEntriesBySection,
  getEntryAuthorName,
} from '@/lib/content/entries';
import type { EditorialSection, ReviewEntry } from '@/lib/content/types';

type EditorialListingProps = {
  section: EditorialSection;
  title: string;
  description: string;
};

function isReviewEntry(entry: { section: string }): entry is ReviewEntry {
  return entry.section === 'reviews';
}

export function EditorialListing({ section, title, description }: EditorialListingProps) {
  const entries = getEntriesBySection(section);

  const eyebrowLabel =
    section === 'news' ? 'News' : section === 'reviews' ? 'Reviews' : 'Features';

  const readLabel = section === 'news' ? 'Read Story' : section === 'reviews' ? 'Read Verdict' : 'Read Feature';

  return (
    <main id="main-content" className="page-shell">
      <div className="container editorial-page">
        <header className="editorial-page__header">
          <p className="home-kicker">{eyebrowLabel}</p>
          <h1 className="editorial-page__title">{title}</h1>
          <p className="section-description">{description}</p>
        </header>

        <div className="editorial-grid">
          {entries.map((entry) => (
            <CardShell key={entry.id} className="editorial-card">
              <p className="story-card__category">{entry.categories.join(' · ')}</p>
              <h2 className="editorial-card__title">
                <Link href={`/${section}/${entry.slug}`}>{entry.title}</Link>
              </h2>
              <p className="story-card__excerpt">{entry.excerpt}</p>

              {isReviewEntry(entry) ? (
                <div className="review-score-chip">
                  <span className="review-score-chip__number">{entry.score.toFixed(1)}</span>
                  <span className="review-score-chip__verdict">
                    / 10 &mdash; {entry.verdict}
                  </span>
                </div>
              ) : null}

              <div className="editorial-card__meta">
                <span>{formatPublishedDate(entry.publishedAt)}</span>
                <span>{getEntryAuthorName(entry.authorId)}</span>
                {entry.readingTimeMinutes ? (
                  <span>{entry.readingTimeMinutes} min read</span>
                ) : null}
              </div>

              <div className="editorial-card__tags">
                {entry.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="editorial-tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <Link className="story-card__link" href={`/${section}/${entry.slug}`}>
                {readLabel}
              </Link>
            </CardShell>
          ))}
        </div>
      </div>
    </main>
  );
}
