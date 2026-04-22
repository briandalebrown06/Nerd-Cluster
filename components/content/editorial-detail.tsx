import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import { formatPublishedDate, getEntryAuthorName, getRelatedEntries } from '@/lib/content/entries';
import type { EditorialEntry, EditorialSection, ReviewEntry } from '@/lib/content/types';

type EditorialDetailProps = {
  entry: EditorialEntry | ReviewEntry;
  section: EditorialSection;
};

function isReviewEntry(entry: EditorialEntry | ReviewEntry): entry is ReviewEntry {
  return entry.section === 'reviews';
}

export function EditorialDetail({ entry, section }: EditorialDetailProps) {
  const related = getRelatedEntries(section, entry.slug);

  return (
    <main id="main-content" className="page-shell">
      <article className="container article-page">
        <header className="article-header">
          <p className="home-kicker">{entry.section}</p>
          <h1 className="article-header__title">{entry.title}</h1>
          <p className="article-header__excerpt">{entry.excerpt}</p>

          <div className="article-header__meta">
            <span>{formatPublishedDate(entry.publishedAt)}</span>
            <span>{getEntryAuthorName(entry.authorId)}</span>
            <span>{entry.readingTimeMinutes} min read</span>
          </div>

          <div className="article-header__tags">
            {entry.tags.map((tag) => (
              <span key={tag} className="editorial-tag">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="article-featured-image" role="img" aria-label={entry.featuredImage}>
          <p>{entry.featuredImage}</p>
        </div>

        {isReviewEntry(entry) ? (
          <CardShell className="review-score-panel">
            <p className="review-score-panel__score">{entry.score.toFixed(1)} / 10</p>
            <p className="review-score-panel__verdict">{entry.verdict}</p>
          </CardShell>
        ) : null}

        <div className="article-body">
          {entry.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="article-related" aria-labelledby="related-title">
          <h2 id="related-title" className="home-section__title">
            Related in {section}
          </h2>

          <div className="editorial-grid">
            {related.map((relatedEntry) => (
              <CardShell key={relatedEntry.id} className="editorial-card">
                <p className="story-card__category">{relatedEntry.categories.join(' · ')}</p>
                <h3 className="editorial-card__title">{relatedEntry.title}</h3>
                <p className="story-card__excerpt">{relatedEntry.excerpt}</p>
                <Link className="story-card__link" href={`/${section}/${relatedEntry.slug}`}>
                  Read Related
                </Link>
              </CardShell>
            ))}
          </div>
        </section>

        <Link href={`/${section}`} className="button-link button-link--subtle">
          Back to {section}
        </Link>
      </article>
    </main>
  );
}
