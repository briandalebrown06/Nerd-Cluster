import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Longform essays, interviews, and deep dives into pop culture worlds, creators, and fan communities.',
};

export default function FeaturesPage() {
  return (
    <PageShell
      eyebrow="Features"
      title="Features"
      description="Longform essays, interviews, and deep dives into the stories, creators, and communities shaping fandom culture."
    />
  );
}
import type { Metadata } from 'next';

import { EditorialListing } from '@/components/content/editorial-listing';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Longform features and analysis across entertainment, fandom, and collector culture.',
  alternates: {
    canonical: '/features',
  },
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
