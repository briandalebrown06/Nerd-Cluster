import Link from 'next/link';

import { PageShell } from '@/components/layout/page-shell';
import { CardShell } from '@/components/ui/card-shell';
import { primaryNav } from '@/lib/site-navigation';

export default function HomePage() {
  const featuredSections = primaryNav.filter((item) => item.href !== '/');

  return (
    <PageShell
      eyebrow="Home"
      title="Nerd Cluster"
      description="A cinematic editorial destination for entertainment, fandom, and collector culture."
    >
      <section className="section-shell" aria-labelledby="section-map-title">
        <h2 id="section-map-title" className="section-title">
          Section map
        </h2>
        <p className="section-description">
          Milestone 1 establishes the route and layout foundation. Each section now has a dedicated
          destination and shared page rhythm.
        </p>

        <ul className="route-grid" aria-label="Site sections">
          {featuredSections.map((item) => (
            <li key={item.href}>
              <CardShell className="route-card">
                <h3 className="route-card__title">{item.label}</h3>
                <p className="route-card__description">{item.description}</p>
                <Link className="route-card__link" href={item.href}>
                  Visit section
                </Link>
              </CardShell>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
