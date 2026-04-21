import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import type { StoryCard } from '@/lib/homepage-content';

type FeaturedReviewProps = {
  review: StoryCard;
};

export function FeaturedReview({ review }: FeaturedReviewProps) {
  return (
    <section className="home-section" aria-labelledby="featured-review-title">
      <p className="home-kicker">Editor&apos;s Pick</p>
      <h2 id="featured-review-title" className="home-section__title">
        Featured Review
      </h2>

      <CardShell className="featured-review">
        <div>
          <p className="story-card__category">{review.category}</p>
          <h3 className="featured-review__title">{review.title}</h3>
          <p className="featured-review__excerpt">{review.excerpt}</p>
          <p className="home-meta">{review.meta}</p>
        </div>
        <Link className="button-link button-link--subtle" href={review.href}>
          Explore Reviews
        </Link>
      </CardShell>
    </section>
  );
}
