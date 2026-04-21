import type { Metadata } from 'next';

import { EditorialListing } from '@/components/content/editorial-listing';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Longform features and analysis across entertainment, fandom, and collector culture.',
};

export default function FeaturesPage() {
  return (
    <EditorialListing
      section="features"
      title="Features"
      description="Longform stories, analysis, and culture reporting for readers who want deeper context beyond the headlines."
    />
  );
}
