import type { MetadataRoute } from 'next';

import { getEntriesBySection } from '@/lib/content/entries';
import { toAbsoluteUrl } from '@/lib/site-config';
import { getStoreProducts } from '@/lib/store/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/news',
    '/reviews',
    '/features',
    '/store',
    '/about',
    '/contact',
  ].map((route) => ({
    url: toAbsoluteUrl(route).toString(),
    lastModified: new Date(),
  }));

  const editorialRoutes = ['news', 'reviews', 'features'] as const;

  const editorialEntries = editorialRoutes.flatMap((section) =>
    getEntriesBySection(section).map((entry) => ({
      url: toAbsoluteUrl(`/${section}/${entry.slug}`).toString(),
      lastModified: new Date(entry.publishedAt),
    })),
  );

  const storeRoutes = getStoreProducts().map((product) => ({
    url: toAbsoluteUrl(`/store/${product.slug}`).toString(),
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...editorialEntries, ...storeRoutes];
}
