import type { Metadata } from 'next';
import './globals.css';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  metadataBase: new URL('https://nerdcluster.com'),
  title: {
    default: 'Nerd Cluster',
    template: '%s | Nerd Cluster',
  },
  description:
    'Nerd Cluster is a polished entertainment, fandom, pop-culture, and collector-focused editorial website.',
  openGraph: {
    title: 'Nerd Cluster',
    description:
      'A modern culture destination for news, reviews, features, and collector-focused discovery.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
