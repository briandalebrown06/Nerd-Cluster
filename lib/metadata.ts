import type { Metadata } from 'next';

import { siteConfig, toAbsoluteUrl } from '@/lib/site-config';

type DetailMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  type?: 'article' | 'website';
  publishedTime?: string;
};

export function buildDetailMetadata({
  title,
  description,
  pathname,
  type = 'article',
  publishedTime,
}: DetailMetadataInput): Metadata {
  const canonicalUrl = toAbsoluteUrl(pathname).toString();
  const ogImageUrl = toAbsoluteUrl(siteConfig.ogImage).toString();

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} cover image`,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      creator: siteConfig.xHandle,
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
