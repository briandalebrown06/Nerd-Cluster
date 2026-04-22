import type { MetadataRoute } from 'next';

import { getEntriesBySection } from '@/lib/content/entries';
import { toAbsoluteUrl } from '@/lib/site-config';
import { getStoreProducts } from '@/lib/store/products';

function getStableSiteLastModified(editorialDates: Date[]): Date {
  if (editorialDates.length === 0) {
    return new Date('2026-01-01T00:00:00.000Z');
  }

  return editorialDates.reduce((latest, current) => (current > latest ? current : latest));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const editorialRoutes = ['news', 'reviews', 'features'] as const;

  const editorialEntries = editorialRoutes.flatMap((section) =>
    getEntriesBySection(section).map((entry) => ({
      url: toAbsoluteUrl(`/${section}/${entry.slug}`).toString(),
      lastModified: new Date(entry.publishedAt),
    })),
  );

  const stableSiteLastModified = getStableSiteLastModified(
    editorialEntries.map((entry) => entry.lastModified),
  );

  const staticRoutes = ['/', '/news', '/reviews', '/features', '/store', '/about', '/contact'].map(
    (route) => ({
      url: toAbsoluteUrl(route).toString(),
      lastModified: stableSiteLastModified,
    }),
  );

  const storeRoutes = getStoreProducts().map((product) => ({
    url: toAbsoluteUrl(`/store/${product.slug}`).toString(),
    lastModified: stableSiteLastModified,
  }));

  return [...staticRoutes, ...editorialEntries, ...storeRoutes];
}
