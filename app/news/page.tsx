import type { Metadata } from 'next';

import { EditorialListing } from '@/components/content/editorial-listing';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Breaking stories and editorially curated updates from fandom and entertainment culture.',
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
