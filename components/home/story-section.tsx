import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import { cn } from '@/lib/cn';
import type { StoryCard } from '@/lib/homepage-content';

type StorySectionProps = {
  title: string;
  eyebrow?: string;
  stories: StoryCard[];
  className?: string;
};

export function StorySection({ title, eyebrow, stories, className }: StorySectionProps) {
  return (
    <section
      className={cn('home-section', className)}
      aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
    >
      {eyebrow ? <p className="home-kicker">{eyebrow}</p> : null}
      <h2 id={title.replace(/\s+/g, '-').toLowerCase()} className="home-section__title">
        {title}
      </h2>

      <div className="home-card-grid">
        {stories.map((story) => (
          <CardShell key={story.title} className="story-card">
            <p className="story-card__category">{story.category}</p>
            <h3 className="story-card__title">{story.title}</h3>
            <p className="story-card__excerpt">{story.excerpt}</p>
            <div className="story-card__footer">
              <span className="home-meta">{story.meta}</span>
              <Link className="story-card__link" href={story.href}>
                Read More
              </Link>
            </div>
          </CardShell>
        ))}
      </div>
    </section>
  );
}
