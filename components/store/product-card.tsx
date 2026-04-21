import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import { cn } from '@/lib/cn';
import type { ProductMeta } from '@/lib/content/types';

type ProductCardProps = {
  product: ProductMeta;
  compact?: boolean;
};

function getAvailabilityLabel(status: ProductMeta['availability']) {
  switch (status) {
    case 'available':
      return 'Available now';
    case 'preorder':
      return 'Preorder';
    case 'sold-out':
      return 'Sold out';
    default:
      return 'Unknown status';
  }
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const availabilityLabel = getAvailabilityLabel(product.availability);
  const hasPurchaseLink = Boolean(product.externalUrl) && product.availability !== 'sold-out';

  return (
    <CardShell className={cn('store-card', compact && 'store-card--compact')}>
      <div className="store-card__image" role="img" aria-label={product.imageAlt}>
        <p>{product.image}</p>
      </div>

      <div className="store-card__content">
        <p className="store-card__eyebrow">
          {product.category} · {product.type}
        </p>

        <h3 className="store-card__title">{product.name}</h3>
        <p className="store-card__tagline">{product.tagline}</p>

        <div className="store-card__meta-row">
          <p className="store-card__price">{product.price}</p>
          <p className={cn('store-card__availability', `store-card__availability--${product.availability}`)}>
            {availabilityLabel}
          </p>
        </div>

        <div className="store-card__actions">
          <Link className="button-link button-link--subtle" href={`/store/${product.slug}`}>
            View details
          </Link>

          {hasPurchaseLink ? (
            <a
              className="button-link"
              href={product.externalUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {product.ctaLabel ?? 'Buy from partner'}
            </a>
          ) : (
            <span className="store-card__disabled-cta">External purchase unavailable</span>
          )}
        </div>
      </div>
    </CardShell>
  );
}
