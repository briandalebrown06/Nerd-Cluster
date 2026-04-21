import { BrandVoiceCta } from '@/components/home/brand-voice-cta';
import { FeaturedReview } from '@/components/home/featured-review';
import { HomeHero } from '@/components/home/home-hero';
import { HomeRail } from '@/components/home/home-rail';
import { StorySection } from '@/components/home/story-section';
import {
  featuredReview,
  heroFeature,
  latestFeatures,
  latestNews,
  storeTeasers,
  trendingTopics,
} from '@/lib/homepage-content';

export default function HomePage() {
  return (
    <main id="main-content" className="page-shell">
      <div className="container home-layout">
        <HomeHero feature={heroFeature} />
        <StorySection title="Latest News" eyebrow="Fresh Coverage" stories={latestNews} />
        <FeaturedReview review={featuredReview} />
        <StorySection title="Latest Features" eyebrow="Deep Dives" stories={latestFeatures} />
        <HomeRail trendingTopics={trendingTopics} products={storeTeasers} />
        <BrandVoiceCta />
      </div>
    </main>
  );
}
