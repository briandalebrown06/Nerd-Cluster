import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import {
  aboutStrip,
  brandHero,
  featuredReview,
  franchiseTakeover,
  fromBlog,
  heroSpotlight,
  latestNews,
  newsletterCta,
  podcastVideoLane,
  storeSpotlight,
  tonightInCluster,
} from '@/lib/homepage-content';

export const metadata: Metadata = {
  title: 'Nerd Cluster | Entertainment News, Reviews, Fandom & Collector Culture',
  description:
    'Nerd Cluster covers entertainment news, reviews, fandom culture, features, collectibles, and merch with a cinematic editorial voice.',
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
        {/* ── BRAND HERO + TONIGHT IN THE CLUSTER ── */}
        <section className="home-lead-grid" aria-labelledby="home-hero-title">
          <article className="feature-hero">
            <p className="section-label">{brandHero.edition}</p>

            <h1 id="home-hero-title" className="feature-hero__title">
              {brandHero.headline}
            </h1>

            <p className="feature-hero__excerpt">{brandHero.excerpt}</p>

            <div className="feature-hero__actions">
              <Link className="button-link" href={brandHero.primaryHref}>
                {brandHero.primaryCta}
              </Link>
              <Link className="button-link button-link--subtle" href={brandHero.secondaryHref}>
                {brandHero.secondaryCta}
              </Link>
            </div>

            <div className="cover-story-card">
              <p className="cover-story-card__label">{heroSpotlight.label}</p>
              <p className="cover-story-card__category">{heroSpotlight.category}</p>
              <h2 className="cover-story-card__title">
                <Link href={heroSpotlight.href}>{heroSpotlight.title}</Link>
              </h2>
            </div>
          </article>

          <aside className="stacked-modules" aria-label="Front page modules">
            <section className="editorial-module" aria-labelledby="tonight-title">
              <p className="section-label" id="tonight-title">
                Tonight in the Cluster
              </p>
              <ul className="tonight-list">
                {tonightInCluster.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="editorial-module editorial-module--spotlight"
              aria-labelledby="featured-review-title"
            >
              <p className="section-label">Featured Review</p>
              <p className="story-row__category">The Verdict</p>
              <h2 id="featured-review-title" className="module-title">
                {featuredReview.title}
              </h2>
              {featuredReview.score ? (
                <div className="review-score-chip">
                  <span className="review-score-chip__number">{featuredReview.score}</span>
                  <span className="review-score-chip__verdict">/ 10</span>
                </div>
              ) : null}
              <p className="module-excerpt">{featuredReview.excerpt}</p>
              <Link className="story-link" href={featuredReview.href}>
                Read Full Verdict
              </Link>
            </section>
          </aside>
        </section>

        {/* ── NEWS WIRE ── */}
        <section className="home-section" aria-labelledby="news-row-title">
          <div className="home-section__header">
            <p className="section-label">News Wire</p>
            <h2 id="news-row-title" className="home-section__title">
              Fresh signals from the fandom front
            </h2>
          </div>

          <div className="story-row-grid">
            {leadNews ? (
              <article className="story-row story-row--lead">
                <p className="story-row__category">{leadNews.category}</p>
                <h3 className="story-row__title">{leadNews.title}</h3>
                <p className="feature-hero__excerpt">{leadNews.excerpt}</p>
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
                <article key={story.title} className="story-row">
                  <p className="story-row__category">{story.category}</p>
                  <h3 className="story-row__title">{story.title}</h3>
                  <p className="home-meta">{story.meta}</p>
                  <Link className="story-link" href={story.href}>
                    Open Brief
                  </Link>
                </article>
              ))}
              <div>
                <Link className="story-link" href="/news">
                  All news
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FRANCHISE TAKEOVER ── */}
        <section className="franchise-takeover-strip" aria-labelledby="franchise-title">
          <div className="card-shell franchise-takeover">
            <p className="franchise-takeover__label">{franchiseTakeover.label}</p>
            <h2 id="franchise-title" className="franchise-takeover__title">
              {franchiseTakeover.title}
            </h2>
            <p className="franchise-takeover__deck">{franchiseTakeover.deck}</p>
            <ul className="franchise-points" aria-label="Takeover coverage angles">
              {franchiseTakeover.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div>
              <Link className="button-link button-link--amber" href={franchiseTakeover.href}>
                {franchiseTakeover.cta}
              </Link>
            </div>
          </div>
        </section>

        {/* ── FROM THE FEATURES DESK ── */}
        <section className="home-two-column" aria-labelledby="features-column-title">
          <div>
            <div className="home-section__header">
              <p className="section-label">From the Features Desk</p>
              <h2 id="features-column-title" className="home-section__title">
                Essays, craft breakdowns, and fandom analysis
              </h2>
            </div>

            {leadFeature ? (
              <article className="feature-story-panel">
                <p className="story-row__category">{leadFeature.category}</p>
                <h3 className="story-row__title">{leadFeature.title}</h3>
                <p className="feature-hero__excerpt">{leadFeature.excerpt}</p>
                <p className="home-meta">{leadFeature.meta}</p>
                <Link className="story-link" href={leadFeature.href}>
                  Read Feature
                </Link>
              </article>
            ) : null}
          </div>

          <aside className="minimal-list-block" aria-label="More features">
            <p className="section-label">More to Read</p>
            <ul className="minimal-story-list">
              {columnFeatures.map((story) => (
                <li key={story.title}>
                  <Link href={story.href}>{story.title}</Link>
                  <span>{story.meta}</span>
                </li>
              ))}
              <li>
                <Link href="/features">All features →</Link>
                <span>Deep dives, rankings, and essays</span>
              </li>
            </ul>
          </aside>
        </section>

        {/* ── PODCAST / VIDEO LANE ── */}
        <section className="home-section" aria-labelledby="podcast-lane-title">
          <div className="home-section__header">
            <p className="section-label">Audio + Video</p>
            <h2 id="podcast-lane-title" className="home-section__title">
              Cluster Cast: Staging for launch
            </h2>
            <p className="section-description">
              Podcast and video formats are being prepared carefully so the experience stays high
              signal from day one.
            </p>
          </div>

          <div className="podcast-lane-grid">
            {podcastVideoLane.map((show) => (
              <article key={show.title} className="card-shell podcast-lane-card">
                <p className="podcast-format-chip">{show.format}</p>
                <h3 className="module-title">{show.title}</h3>
                <p className="module-excerpt">{show.description}</p>
                <p className="podcast-status-chip">{show.status}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── COLLECTOR SIGNAL + NEWSLETTER ── */}
        <section className="home-two-column" aria-labelledby="collector-signal-title">
          <section className="collector-strip" aria-labelledby="collector-signal-title">
            <p className="section-label">Collector Signal</p>
            <h2 id="collector-signal-title" className="home-section__title">
              Shelf-worthy drops this week
            </h2>
            <p className="home-meta" style={{ marginTop: '0.2rem' }}>
              Merch for people who treat shelf space like sacred ground.
            </p>
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
            <div style={{ marginTop: '1rem' }}>
              <Link className="button-link" href="/store">
                Shop the Drop
              </Link>
            </div>
          </section>

          <section className="editorial-module" aria-labelledby="newsletter-cta-title">
            <p className="section-label">Cluster Signal</p>
            <h2 id="newsletter-cta-title" className="module-title">
              {newsletterCta.title}
            </h2>
            <p className="module-excerpt">{newsletterCta.body}</p>
            <div className="feature-hero__actions">
              <Link className="button-link" href={newsletterCta.primaryHref}>
                {newsletterCta.primaryLabel}
              </Link>
              <Link
                className="button-link button-link--subtle"
                href={newsletterCta.secondaryHref}
              >
                {newsletterCta.secondaryLabel}
              </Link>
            </div>
          </section>
        </section>

        {/* ── ABOUT STRIP ── */}
        <section aria-labelledby="about-strip-title">
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
