import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { StoreProductDetail } from '@/components/store/store-product-detail';
import { buildDetailMetadata } from '@/lib/metadata';
import { getStoreProductBySlug, getStoreProducts } from '@/lib/store/products';

type StoreProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: StoreProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getStoreProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return buildDetailMetadata({
    title: `${product.name} | Store`,
    description: product.tagline,
    pathname: `/store/${product.slug}`,
    type: 'website',
  });
}

export function generateStaticParams() {
  return getStoreProducts().map((product) => ({ slug: product.slug }));
}

export default async function StoreProductPage({ params }: StoreProductPageProps) {
  const { slug } = await params;
  const product = getStoreProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <StoreProductDetail product={product} />;
}
