import Link from 'next/link';

import { ProductCard } from '@/components/store/product-card';
import type { ProductMeta } from '@/lib/content/types';
import { getRelatedStoreProducts } from '@/lib/store/products';

type StoreProductDetailProps = {
  product: ProductMeta;
};

function availabilityLabel(status: ProductMeta['availability']) {
  if (status === 'available') {
    return 'Available now';
  }

  if (status === 'preorder') {
    return 'Open for preorder';
  }

  return 'Currently sold out';
}

export function StoreProductDetail({ product }: StoreProductDetailProps) {
  const relatedProducts = getRelatedStoreProducts(product);
  const canPurchase = Boolean(product.externalUrl) && product.availability !== 'sold-out';

  return (
    <main id="main-content" className="page-shell">
      <article className="container store-detail">
        <Link href="/store" className="button-link button-link--subtle">
          Back to Store
        </Link>

        <header className="store-detail__header">
          <div className="store-detail__hero" role="img" aria-label={product.imageAlt}>
            <p>{product.image}</p>
          </div>

          <div className="store-detail__summary">
            <p className="page-intro__eyebrow">
              {product.category} · {product.type}
            </p>
            <h1 className="page-intro__title">{product.name}</h1>
            <p className="store-detail__tagline">{product.tagline}</p>
            <p className="store-detail__description">{product.description}</p>

            <dl className="store-detail__meta-grid">
              <div>
                <dt>Franchise</dt>
                <dd>{product.franchise}</dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>{product.price}</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>{availabilityLabel(product.availability)}</dd>
              </div>
            </dl>

            <div className="store-detail__actions">
              {canPurchase ? (
                <a className="button-link" href={product.externalUrl} target="_blank" rel="noreferrer noopener">
                  {product.ctaLabel ?? 'Buy from Partner'}
                </a>
              ) : (
                <p className="store-card__disabled-cta">
                  No direct purchase link is active for this product yet.
                </p>
              )}
            </div>

            <ul className="store-detail__tags" aria-label="Product tags">
              {product.tags.map((tag) => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
          </div>
        </header>

        <section className="store-section" aria-labelledby="related-products-title">
          <div className="section-heading">
            <p className="section-eyebrow">You might also like</p>
            <h2 id="related-products-title" className="section-title">
              Related picks
            </h2>
          </div>

          <div className="store-grid">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} compact />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
