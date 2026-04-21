import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nerd Cluster for editorial tips, partnerships, and contributor conversations.',
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contact"
      description="Reach out for editorial tips, partnership conversations, and contributor inquiries."
    />
  );
}
