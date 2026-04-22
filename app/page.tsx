import type { Metadata } from 'next';
import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import { Container } from '@/components/ui/container';
import {
  aboutStrip,
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
  title: 'Home',
  description:
    'Nerd Cluster is a cinematic editorial front page for entertainment, fandom culture, and collector-minded coverage.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const leadNews = latestNews[0];
  const secondaryNews = latestNews.slice(1);

  return (
    <main id="main-content" className="page-shell home-page">
      <Container className="home-stack home-launch">
        <section className="home-hero" aria-labelledby="home-hero-title">
          <div className="home-hero__lead home-hero__lead--launch">
            <p className="home-kicker">Launch Spotlight</p>
            <h1 id="home-hero-title" className="home-hero__title">
              {heroSpotlight.title}
            </h1>
            <p className="home-hero__excerpt">{heroSpotlight.excerpt}</p>
            <p className="home-meta">{heroSpotlight.meta}</p>
            <div className="home-hero__actions">
              <Link className="button-link" href={heroSpotlight.href}>
                {heroSpotlight.cta}
              </Link>
              <Link className="button-link button-link--subtle" href="/features">
                Browse Features
              </Link>
            </div>
          </div>

          <CardShell className="home-hero__aside">
            <p className="home-kicker">Tonight in the Cluster</p>
            <ul className="tonight-list">
              {tonightInCluster.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </CardShell>
        </section>

        <section className="home-section" aria-labelledby="latest-news-title">
          <div className="home-section__header">
            <p className="home-kicker">Latest News</p>
            <h2 id="latest-news-title" className="home-section__title">
              Breaking updates, confirmed rumors, and fresh production heat
            </h2>
          </div>

          <div className="news-command-grid">
            {leadNews ? (
              <CardShell className="story-card story-card--lead">
                <p className="story-card__category">{leadNews.category}</p>
                <h3 className="story-card__title">{leadNews.title}</h3>
                <p className="story-card__excerpt">{leadNews.excerpt}</p>
                <div className="story-card__footer">
                  <span className="home-meta">{leadNews.meta}</span>
                  <Link className="story-card__link" href={leadNews.href}>
                    Read Story
                  </Link>
                </div>
              </CardShell>
            ) : null}

            <div className="news-command-grid__stack">
              {secondaryNews.map((story) => (
                <CardShell key={story.title} className="story-card">
                  <p className="story-card__category">{story.category}</p>
                  <h3 className="story-card__title">{story.title}</h3>
                  <p className="story-card__excerpt">{story.excerpt}</p>
                  <div className="story-card__footer">
                    <span className="home-meta">{story.meta}</span>
                    <Link className="story-card__link" href={story.href}>
                      Read Story
                    </Link>
                  </div>
                </CardShell>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section" aria-labelledby="featured-review-title">
          <p className="home-kicker">Featured Review</p>
          <CardShell className="featured-review featured-review--launch">
            <div>
              <p className="story-card__category">{featuredReview.category}</p>
              <h2 id="featured-review-title" className="featured-review__title">
                {featuredReview.title}
              </h2>
              <p className="featured-review__excerpt">{featuredReview.excerpt}</p>
              <p className="home-meta">{featuredReview.meta}</p>
            </div>
            <Link className="button-link" href={featuredReview.href}>
              Read the Full Verdict
            </Link>
          </CardShell>
        </section>

        <section className="home-section" aria-labelledby="franchise-takeover-title">
          <CardShell className="franchise-takeover">
            <p className="home-kicker">Franchise Takeover</p>
            <h2 id="franchise-takeover-title" className="home-section__title">
              {franchiseTakeover.title}
            </h2>
            <p className="section-description">{franchiseTakeover.deck}</p>
            <ul className="franchise-points">
              {franchiseTakeover.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="button-link button-link--subtle" href={franchiseTakeover.href}>
              Enter the Takeover Storyline
            </Link>
          </CardShell>
        </section>

        <section className="home-section" aria-labelledby="from-blog-title">
          <p className="home-kicker">From the Blog</p>
          <h2 id="from-blog-title" className="home-section__title">
            Deep dives, craft breakdowns, and fandom analysis with perspective
          </h2>
          <div className="home-card-grid">
            {fromBlog.map((story) => (
              <CardShell key={story.title} className="story-card">
                <p className="story-card__category">{story.category}</p>
                <h3 className="story-card__title">{story.title}</h3>
                <p className="story-card__excerpt">{story.excerpt}</p>
                <div className="story-card__footer">
                  <span className="home-meta">{story.meta}</span>
                  <Link className="story-card__link" href={story.href}>
                    Read Feature
                  </Link>
                </div>
              </CardShell>
            ))}
          </div>
        </section>

        <section className="home-section" aria-labelledby="podcast-video-title">
          <p className="home-kicker">Podcast / Video Lane</p>
          <h2 id="podcast-video-title" className="home-section__title">
            On-deck shows and studio formats entering the rotation
          </h2>
          <div className="podcast-lane-grid">
            {podcastVideoLane.map((item) => (
              <CardShell key={item.title} className="podcast-lane-card">
                <p className="story-card__category">{item.format}</p>
                <h3 className="story-card__title">{item.title}</h3>
                <p className="home-meta">{item.status}</p>
                <p className="story-card__excerpt">{item.description}</p>
              </CardShell>
            ))}
          </div>
        </section>

        <section className="home-section" aria-labelledby="store-spotlight-title">
          <p className="home-kicker">Store Spotlight</p>
          <h2 id="store-spotlight-title" className="home-section__title">
            Shelf-worthy picks for display-minded collectors
          </h2>
          <div className="store-teaser-grid store-teaser-grid--spotlight">
            {storeSpotlight.map((product) => (
              <CardShell key={product.name} className="store-teaser-card">
                <p className="story-card__category">{product.category}</p>
                <h3 className="store-teaser-card__title">{product.name}</h3>
                <p className="home-meta">{product.price}</p>
                <Link className="story-card__link" href={product.href}>
                  View Product
                </Link>
              </CardShell>
            ))}
          </div>
        </section>

        <section className="home-section" aria-labelledby="newsletter-title">
          <CardShell className="brand-voice-cta brand-voice-cta--newsletter">
            <div>
              <p className="home-kicker">Cluster Signal</p>
              <h2 id="newsletter-title" className="home-section__title">
                {newsletterCta.title}
              </h2>
              <p className="section-description">{newsletterCta.body}</p>
            </div>
            <div className="brand-voice-cta__actions">
              <Link className="button-link" href={newsletterCta.primaryHref}>
                {newsletterCta.primaryLabel}
              </Link>
              <Link className="button-link button-link--subtle" href={newsletterCta.secondaryHref}>
                {newsletterCta.secondaryLabel}
              </Link>
            </div>
          </CardShell>
        </section>

        <section className="home-section" aria-labelledby="about-strip-title">
          <CardShell className="about-strip">
            <p className="home-kicker">About Nerd Cluster</p>
            <h2 id="about-strip-title" className="home-section__title">
              {aboutStrip.title}
            </h2>
            <p className="section-description">{aboutStrip.body}</p>
            <Link className="button-link button-link--subtle" href={aboutStrip.href}>
              {aboutStrip.cta}
            </Link>
          </CardShell>
        </section>
      </Container>
    </main>
  );
}
