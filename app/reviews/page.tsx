import type { Metadata } from 'next';

import { EditorialListing } from '@/components/content/editorial-listing';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Critical reviews of games, series, films, and collector releases with clear scoring and verdicts.',
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
