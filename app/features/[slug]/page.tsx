import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EditorialDetail } from '@/components/content/editorial-detail';
import { getEntriesBySection, getEntryBySlug } from '@/lib/content/entries';

export async function generateStaticParams() {
  return getEntriesBySection('features').map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug('features', slug);

  if (!entry) {
    return { title: 'Feature' };
  }

  return {
    title: entry.title,
    description: entry.excerpt,
  };
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntryBySlug('features', slug);

  if (!entry) {
    notFound();
  }

  return <EditorialDetail entry={entry} section="features" />;
}
