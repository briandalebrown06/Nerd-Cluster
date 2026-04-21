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
