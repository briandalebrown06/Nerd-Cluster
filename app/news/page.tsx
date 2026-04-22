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
