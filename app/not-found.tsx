import Link from 'next/link';

import { PageShell } from '@/components/layout/page-shell';

export default function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="Page not found"
      description="The page you were looking for does not exist or has moved."
    >
      <p className="section-description">
        Try returning home or jump directly into one of the core sections.
      </p>
      <div className="not-found__actions">
        <Link href="/" className="button-link">
          Back to Home
        </Link>
        <Link href="/news" className="button-link button-link--subtle">
          Go to News
        </Link>
      </div>
    </PageShell>
  );
}
