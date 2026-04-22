import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import type { ProductTeaser } from '@/lib/homepage-content';

type HomeRailProps = {
  trendingTopics: string[];
  products: ProductTeaser[];
};

export function HomeRail({ trendingTopics, products }: HomeRailProps) {
  return (
    <div className="home-rail-layout">
      <section className="home-section" aria-labelledby="trending-title">
        <h2 id="trending-title" className="home-section__title">
          Trending Now
        </h2>
        <CardShell className="trending-card">
          <ol className="trending-list">
            {trendingTopics.map((topic) => (
              <li key={topic} className="trending-item">
                <span className="trending-item__dot" />
                <span>{topic}</span>
              </li>
            ))}
          </ol>
        </CardShell>
      </section>

      <section className="home-section" aria-labelledby="store-teaser-title">
        <h2 id="store-teaser-title" className="home-section__title">
          Store Teaser
        </h2>
        <div className="store-teaser-grid">
          {products.map((product) => (
            <CardShell key={product.name} className="store-teaser-card">
              <p className="story-card__category">{product.category}</p>
              <h3 className="store-teaser-card__title">{product.name}</h3>
              <p className="home-meta">{product.price}</p>
              <Link className="story-card__link" href={product.href}>
                View in Store
              </Link>
            </CardShell>
          ))}
        </div>
      </section>
    </div>
  );
}
