import type { Metadata } from 'next';

import { StoreLanding } from '@/components/store/store-landing';

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Curated fandom products and collectible drops with structured data and room for future checkout integrations.',
  alternates: {
    canonical: '/store',
  },
};

export default function StorePage() {
  return <StoreLanding />;
}
