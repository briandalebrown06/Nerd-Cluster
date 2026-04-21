import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn what Nerd Cluster covers and the editorial principles behind the publication.',
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Nerd Cluster"
      description="Nerd Cluster is built to cover entertainment, fandom, and collector culture with a polished editorial voice and modern browsing experience."
    />
  );
}
