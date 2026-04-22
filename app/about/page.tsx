import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn what Nerd Cluster covers and the editorial principles behind the publication.',
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About Nerd Cluster"
      description="Nerd Cluster is built to cover entertainment, fandom, and collector culture with a polished editorial voice and modern browsing experience."
    />
  );
}
import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';
import { CardShell } from '@/components/ui/card-shell';
import { SectionHeading } from '@/components/ui/section-heading';

const coverageAreas = [
  {
    title: 'News + Industry Moves',
    description:
      'Fast, useful context on releases, shake-ups, and fandom moments that actually matter.',
  },
  {
    title: 'Reviews',
    description:
      'Opinionated, craft-aware takes that respect both newcomers and longtime obsessives.',
  },
  {
    title: 'Features + Culture',
    description:
      'Longform stories about fan communities, collecting rituals, and the media shaping the zeitgeist.',
  },
] as const;

const editorialValues = [
  'Enthusiastic without becoming hype-first',
  'Critical without becoming cynical',
  'Collector-aware without gatekeeping',
  'Designed for browseability, depth, and return visits',
] as const;

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn what Nerd Cluster covers, why it exists, and the editorial personality behind the brand.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Nerd Cluster is an editorial home for people who care deeply about culture."
      description="We cover entertainment, fandom, and collector life with a modern magazine voice: clear, opinionated, and fun to read."
    >
      <section className="about-section">
        <SectionHeading
          eyebrow="What we cover"
          title="Coverage built for fans who want both signal and style"
          description="From breaking shifts to niche obsessions, we aim for reporting and commentary that is useful in the moment and worth revisiting later."
        />

        <div className="about-grid">
          {coverageAreas.map((area) => (
            <CardShell key={area.title} className="about-card">
              <h3 className="about-card__title">{area.title}</h3>
              <p className="about-card__description">{area.description}</p>
            </CardShell>
          ))}
        </div>
      </section>

      <section className="about-section">
        <SectionHeading
          eyebrow="Why we exist"
          title="Because fandom deserves better than noise"
          description="Nerd Cluster was created to bridge the gap between algorithm-chasing updates and overly academic criticism. We believe culture coverage can be sharp, welcoming, and visually polished at the same time."
        />

        <CardShell className="about-manifesto">
          <p>
            We treat fan culture as real culture. That means respecting the craft behind stories,
            the communities that keep them alive, and the collectors who turn passion into
            curation.
          </p>
          <p>
            Our editorial personality is confident, playful, and intentional. We are here to help
            readers discover what is worth their time, what is changing, and what is genuinely
            exciting right now.
          </p>
        </CardShell>
      </section>

      <section className="about-section">
        <SectionHeading
          eyebrow="Editorial personality"
          title="How we approach every story"
          description="These principles keep the voice consistent across news, reviews, features, and future channels."
        />

        <ul className="about-values" aria-label="Nerd Cluster editorial principles">
          {editorialValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
