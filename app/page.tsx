import type { Metadata } from 'next';

import { BrandVoiceCta } from '@/components/home/brand-voice-cta';
import { FeaturedReview } from '@/components/home/featured-review';
import { HomeHero } from '@/components/home/home-hero';
import { HomeRail } from '@/components/home/home-rail';
import { StorySection } from '@/components/home/story-section';
import { Container } from '@/components/ui/container';
import {
  featuredReview,
  heroFeature,
  latestFeatures,
  latestNews,
  storeTeasers,
  trendingTopics,
} from '@/lib/homepage-content';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Nerd Cluster delivers polished news, reviews, features, and collector-focused coverage across entertainment and fandom culture.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <main id="main-content" className="page-shell home-page">
      <Container className="home-stack">
        <HomeHero feature={heroFeature} />

        <StorySection
          eyebrow="Latest"
          title="News That Moves the Conversation"
          stories={latestNews}
        />

        <div className="home-two-column">
          <StorySection
            eyebrow="Deep Reads"
            title="Features with Long-View Context"
            stories={latestFeatures}
            className="home-two-column__main"
          />
          <HomeRail trendingTopics={trendingTopics} products={storeTeasers} />
        </div>

        <FeaturedReview review={featuredReview} />
        <BrandVoiceCta />
      </Container>
    </main>
  );
}
