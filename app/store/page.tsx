import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Collector-focused product discovery with room for future product detail pages and commerce integrations.',
};

export default function StorePage() {
  return (
    <PageShell
      eyebrow="Store"
      title="Store"
      description="Collector-focused picks and product discovery, with a clean structure that can grow into richer storefront experiences."
    />
  );
}
