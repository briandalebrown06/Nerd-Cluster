import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';
import { CardShell } from '@/components/ui/card-shell';
import { SectionHeading } from '@/components/ui/section-heading';

const coverageAreas = [
  {
    title: 'Movies + Film Craft',
    description:
      'Releases, craft breakdowns, production deep dives, and the cultural conversations that follow major releases into the group chat.',
  },
  {
    title: 'TV + Streaming',
    description:
      'Episode reactions, season analysis, series verdicts, and the shows worth watching twice — or arguing about for months.',
  },
  {
    title: 'Games + Interactives',
    description:
      'Reviews, release radar, studio news, and coverage that respects both the craft of making games and the time investment of playing them.',
  },
  {
    title: 'Comics + Anime',
    description:
      'Panel-level analysis, arc coverage, adaptation tracking, and lore context for readers who treat their pull list seriously.',
  },
  {
    title: 'Collectibles + Merch',
    description:
      'Collector editions, display strategy, drop coverage, and reviews that ask the useful questions: is it worth it, and where does it live?',
  },
  {
    title: 'Fandom Culture',
    description:
      'The debates, rituals, communities, and conventions that keep pop culture alive long after the credits roll.',
  },
] as const;

const editorialValues = [
  'Enthusiastic without becoming hype-first',
  'Critical without becoming cynical',
  'Collector-aware without gatekeeping',
  'Opinionated with receipts',
  'Designed for browseability, depth, and return visits',
] as const;

const futureChannels = [
  { name: 'Cluster Signal Newsletter', status: 'Launch prep underway' },
  { name: 'Cluster Cast Podcast', status: 'Pilot season in production' },
  { name: 'Shelf Control Video Series', status: 'Studio setup in progress' },
  { name: 'Contributor Features', status: 'Pitch process opening soon' },
] as const;

export const metadata: Metadata = {
  title: 'About Nerd Cluster',
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
      description="We cover entertainment, fandom, and collector life with a modern magazine voice — clear, opinionated, and worth returning to."
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
          eyebrow="Point of view"
          title="Because fandom deserves better than noise"
          description="Nerd Cluster was built to bridge the gap between algorithm-chasing updates and overly academic criticism. Culture coverage can be sharp, welcoming, and visually polished at the same time."
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
          <p>
            We like enthusiasm with taste, criticism with receipts, and fandom without the sludge.
          </p>
        </CardShell>
      </section>

      <section className="about-section">
        <SectionHeading
          eyebrow="Who it is for"
          title="For people who treat stories like places to live"
          description="If any of the following describes you, you are probably in the right place."
        />

        <CardShell className="who-its-for">
          <p>
            Lore divers and collector-brains. Backlog warriors and rewatch addicts. Trailer
            pausers and convention wanderers. People who have ever said &ldquo;just one more
            breakdown&rdquo; at midnight.
          </p>
          <p>
            People who have a pull list and a theory about the next season. People who reorganize
            their shelf every few months and cannot fully explain why. People who care about
            whether a sequel earned its story, not just whether it made money.
          </p>
          <p>
            If you have ever paused a trailer frame-by-frame, argued about whether a reboot was
            necessary, or spent more on packaging than on the thing inside it — this is your
            editorial home.
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

      <section className="about-section">
        <SectionHeading
          eyebrow="What is coming"
          title="The Nerd Cluster signal is still expanding"
          description="Version one is the foundation. These are the channels being built with the same care."
        />

        <div className="future-channels-grid">
          {futureChannels.map((channel) => (
            <article key={channel.name} className="future-channel-card">
              <p className="future-channel-card__name">{channel.name}</p>
              <p className="future-channel-card__status">{channel.status}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
