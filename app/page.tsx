import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import {
  aboutStrip,
  featuredReview,
  fromBlog,
  heroSpotlight,
  latestNews,
  newsletterCta,
  storeSpotlight,
  tonightInCluster,
} from '@/lib/homepage-content';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Nerd Cluster is a cinematic editorial front page for entertainment, fandom culture, and collector-minded coverage.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const leadNews = latestNews[0];
  const sideNews = latestNews.slice(1);
  const leadFeature = fromBlog[0];
  const columnFeatures = fromBlog.slice(1);

  return (
    <main id="main-content" className="page-shell home-page">
      <Container className="home-magazine">
        <section className="home-lead-grid" aria-labelledby="home-hero-title">
          <article className="feature-hero">
            <p className="section-label">Cover Story</p>
            <h1 id="home-hero-title" className="feature-hero__title">
              {heroSpotlight.title}
            </h1>
            <p className="feature-hero__excerpt">{heroSpotlight.excerpt}</p>
            <p className="home-meta">{heroSpotlight.meta}</p>
            <div className="feature-hero__actions">
              <Link className="button-link" href={heroSpotlight.href}>
                {heroSpotlight.cta}
              </Link>
              <Link className="button-link button-link--subtle" href="/news">
                Open News Desk
              </Link>
            </div>
          </article>

          <aside className="stacked-modules" aria-label="Front page modules">
            <section className="editorial-module">
              <p className="section-label">Tonight in the Cluster</p>
              <ul className="tonight-list">
                {tonightInCluster.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </section>

            <section className="editorial-module editorial-module--spotlight">
              <p className="section-label">Featured Review</p>
              <h2 className="module-title">{featuredReview.title}</h2>
              <p className="module-excerpt">{featuredReview.excerpt}</p>
              <p className="home-meta">{featuredReview.meta}</p>
              <Link className="story-link" href={featuredReview.href}>
                Read Full Verdict
              </Link>
            </section>
          </aside>
        </section>

        <section className="home-section" aria-labelledby="news-row-title">
          <div className="home-section__header">
            <p className="section-label">News Wire</p>
            <h2 id="news-row-title" className="home-section__title">
              Breaking updates and studio shifts
            </h2>
          </div>

          <div className="story-row-grid">
            {leadNews ? (
              <article className="story-row story-row--lead">
                <p className="story-row__category">{leadNews.category}</p>
                <h3 className="story-row__title">{leadNews.title}</h3>
                <p className="story-row__excerpt">{leadNews.excerpt}</p>
                <div className="story-row__meta">
                  <span className="home-meta">{leadNews.meta}</span>
                  <Link className="story-link" href={leadNews.href}>
                    Read Story
                  </Link>
                </div>
              </article>
            ) : null}

            <div className="story-row-stack">
              {sideNews.map((story) => (
                <article key={story.title} className="story-row story-row--compact">
                  <p className="story-row__category">{story.category}</p>
                  <h3 className="story-row__title">{story.title}</h3>
                  <p className="home-meta">{story.meta}</p>
                  <Link className="story-link" href={story.href}>
                    Open Brief
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-two-column" aria-labelledby="features-column-title">
          <div>
            <p className="section-label">From the Features Desk</p>
            <h2 id="features-column-title" className="home-section__title">
              Essays, craft breakdowns, and fandom analysis
            </h2>

            {leadFeature ? (
              <article className="feature-story-panel">
                <p className="story-row__category">{leadFeature.category}</p>
                <h3 className="story-row__title">{leadFeature.title}</h3>
                <p className="story-row__excerpt">{leadFeature.excerpt}</p>
                <p className="home-meta">{leadFeature.meta}</p>
                <Link className="story-link" href={leadFeature.href}>
                  Read Feature
                </Link>
              </article>
            ) : null}
          </div>

          <aside className="minimal-list-block" aria-label="Secondary feature stories">
            <p className="section-label">More to Read</p>
            <ul className="minimal-story-list">
              {columnFeatures.map((story) => (
                <li key={story.title}>
                  <Link href={story.href}>{story.title}</Link>
                  <span>{story.meta}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="home-two-column" aria-labelledby="collector-signal-title">
          <section className="collector-strip">
            <p className="section-label">Collector Signal</p>
            <h2 id="collector-signal-title" className="home-section__title">
              Shelf-worthy drops this week
            </h2>
            <div className="collector-cards">
              {storeSpotlight.map((product) => (
                <article key={product.name} className="collector-card">
                  <p className="story-row__category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="home-meta">{product.price}</p>
                  <Link className="story-link" href={product.href}>
                    View Product
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="editorial-module">
            <p className="section-label">Cluster Signal</p>
            <h2 className="module-title">{newsletterCta.title}</h2>
            <p className="module-excerpt">{newsletterCta.body}</p>
            <div className="feature-hero__actions">
              <Link className="button-link" href={newsletterCta.primaryHref}>
                {newsletterCta.primaryLabel}
              </Link>
              <Link className="button-link button-link--subtle" href={newsletterCta.secondaryHref}>
                {newsletterCta.secondaryLabel}
              </Link>
            </div>
          </section>
        </section>

        <section className="home-section" aria-labelledby="about-strip-title">
          <article className="about-ribbon">
            <p className="section-label">About Nerd Cluster</p>
            <h2 id="about-strip-title" className="home-section__title">
              {aboutStrip.title}
            </h2>
            <p className="module-excerpt">{aboutStrip.body}</p>
            <Link className="story-link" href={aboutStrip.href}>
              {aboutStrip.cta}
            </Link>
          </article>
        </section>
      </Container>
    </main>
  );
}
