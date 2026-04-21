import { ProductCard } from '@/components/store/product-card';
import { getFeaturedStoreProducts, getStoreCategories, getStoreProducts } from '@/lib/store/products';

export function StoreLanding() {
  const products = getStoreProducts();
  const featuredProducts = getFeaturedStoreProducts();
  const categories = getStoreCategories();

  return (
    <main id="main-content" className="page-shell">
      <section className="container store-intro">
        <p className="page-intro__eyebrow">Store</p>
        <h1 className="page-intro__title">Collector Store</h1>
        <p className="page-intro__description">
          Curated collectibles, apparel, and fan-culture essentials selected with an editorial eye.
          This is a discovery-first storefront with architecture ready for richer commerce later.
        </p>

        <div className="store-taxonomy" aria-label="Store category overview">
          {categories.map((category) => (
            <article key={category.category} className="store-taxonomy__chip">
              <p className="store-taxonomy__name">{category.category}</p>
              <p className="store-taxonomy__count">{category.count} products</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container store-section" aria-labelledby="featured-store-title">
        <div className="section-heading">
          <p className="section-eyebrow">Featured drops</p>
          <h2 id="featured-store-title" className="section-title">
            Curated spotlight picks
          </h2>
          <p className="section-description">
            Handpicked products with strong design language, franchise relevance, and collector
            utility.
          </p>
        </div>

        <div className="store-grid store-grid--featured">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container store-section" aria-labelledby="all-products-title">
        <div className="section-heading">
          <p className="section-eyebrow">All products</p>
          <h2 id="all-products-title" className="section-title">
            Browse the current collection
          </h2>
        </div>

        <div className="store-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
