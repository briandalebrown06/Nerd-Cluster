import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';
import type { StoryCard } from '@/lib/homepage-content';

type HomeHeroProps = {
  feature: StoryCard;
};

export function HomeHero({ feature }: HomeHeroProps) {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__lead">
        <p className="home-kicker">Front Page Feature</p>
        <h1 id="home-hero-title" className="home-hero__title">
          {feature.title}
        </h1>
        <p className="home-hero__excerpt">{feature.excerpt}</p>
        <p className="home-meta">{feature.meta}</p>
        <Link className="button-link" href={feature.href}>
          Read Feature Story
        </Link>
      </div>

      <CardShell className="home-hero__aside">
        <p className="home-kicker">Why it matters</p>
        <p className="home-hero__aside-copy">
          Nerd Cluster covers where fandom culture, entertainment craft, and collector passion
          intersect. This week&apos;s lead story sets the tone: informed, stylish, and deeply
          fan-aware.
        </p>
      </CardShell>
    </section>
  );
}
