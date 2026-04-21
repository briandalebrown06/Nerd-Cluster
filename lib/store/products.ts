import { storeProducts } from '@/content/store/products';
import type { ProductCategory, ProductMeta } from '@/lib/content/types';

type CategorySummary = {
  category: ProductCategory;
  count: number;
};

export function getStoreProducts(): ProductMeta[] {
  return [...storeProducts].sort((a, b) => a.name.localeCompare(b.name));
}

export function getFeaturedStoreProducts(limit = 3): ProductMeta[] {
  return getStoreProducts()
    .filter((product) => product.featured)
    .slice(0, limit);
}

export function getStoreProductBySlug(slug: string): ProductMeta | undefined {
  return storeProducts.find((product) => product.slug === slug);
}

export function getStoreCategories(): CategorySummary[] {
  const categoryCounts = getStoreProducts().reduce<Map<ProductCategory, number>>((map, product) => {
    map.set(product.category, (map.get(product.category) ?? 0) + 1);
    return map;
  }, new Map());

  return Array.from(categoryCounts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

export function getRelatedStoreProducts(product: ProductMeta, limit = 3): ProductMeta[] {
  return getStoreProducts()
    .filter((candidate) => candidate.slug !== product.slug)
    .sort((a, b) => {
      const franchiseBoost = Number(b.franchise === product.franchise) - Number(a.franchise === product.franchise);

      if (franchiseBoost !== 0) {
        return franchiseBoost;
      }

      const categoryBoost = Number(b.category === product.category) - Number(a.category === product.category);

      if (categoryBoost !== 0) {
        return categoryBoost;
      }

      return a.name.localeCompare(b.name);
    })
    .slice(0, limit);
}
