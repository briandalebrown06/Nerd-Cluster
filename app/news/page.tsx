import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Breaking updates and editorially curated stories from fandom and entertainment culture.',
};

export default function NewsPage() {
  return (
    <PageShell
      eyebrow="News"
      title="News"
      description="Breaking stories, major announcements, and editorially curated updates from across fandom and entertainment."
    />
  );
}
import type { Metadata } from 'next';

import { EditorialListing } from '@/components/content/editorial-listing';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Breaking stories and editorially curated updates from fandom and entertainment culture.',
  alternates: {
    canonical: '/news',
  },
};

export default function NewsPage() {
  return (
    <EditorialListing
      section="news"
      title="News"
      description="Breaking stories, industry shifts, and fandom updates curated with context and editorial clarity."
    />
  );
}
