import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EditorialDetail } from '@/components/content/editorial-detail';
import { getEntriesBySection, getEntryBySlug } from '@/lib/content/entries';

export async function generateStaticParams() {
  return getEntriesBySection('reviews').map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug('reviews', slug);

  if (!entry) {
    return { title: 'Review' };
  }

  return {
    title: entry.title,
    description: entry.excerpt,
  };
}

export default async function ReviewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntryBySlug('reviews', slug);

  if (!entry) {
    notFound();
  }

  return <EditorialDetail entry={entry} section="reviews" />;
}
