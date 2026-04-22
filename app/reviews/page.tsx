import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Critical takes on games, films, series, and collector products with clear editorial voice.',
};

export default function ReviewsPage() {
  return (
    <PageShell
      eyebrow="Reviews"
      title="Reviews"
      description="Critical takes on games, films, series, and collector products—built for clear opinions and strong editorial voice."
    />
  );
}
import type { Metadata } from 'next';

import { EditorialListing } from '@/components/content/editorial-listing';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Critical reviews of games, series, films, and collector releases with clear scoring and verdicts.',
  alternates: {
    canonical: '/reviews',
  },
};

export default function ReviewsPage() {
  return (
    <EditorialListing
      section="reviews"
      title="Reviews"
      description="Critical takes on games, series, films, and collector editions with clear scoring and strong editorial perspective."
    />
  );
}
