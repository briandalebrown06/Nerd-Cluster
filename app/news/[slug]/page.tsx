import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { EditorialDetail } from '@/components/content/editorial-detail';
import { getEntriesBySection, getEntryBySlug } from '@/lib/content/entries';

export async function generateStaticParams() {
  return getEntriesBySection('news').map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug('news', slug);

  if (!entry) {
    return { title: 'News Story' };
  }

  return {
    title: entry.title,
    description: entry.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntryBySlug('news', slug);

  if (!entry) {
    notFound();
  }

  return <EditorialDetail entry={entry} section="news" />;
}
