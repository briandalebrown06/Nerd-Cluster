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
