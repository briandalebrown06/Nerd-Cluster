import type { EditorialEntry } from '@/lib/content/types';

export const newsEntries: EditorialEntry[] = [
  {
    id: 'news-convergence-festival-lineup',
    section: 'news',
    title: 'Convergence Festival Reveals Creator-First Lineup for Fall',
    slug: 'convergence-festival-creator-first-lineup',
    excerpt:
      'The annual event shifts toward director and showrunner showcases, giving fans deeper access to the people behind major franchises.',
    publishedAt: '2026-04-19',
    authorId: 'maya-lane',
    categories: ['Events', 'Industry'],
    tags: ['festival', 'creators', 'panels'],
    featuredImage: 'Neon-lit convention stage with panel lights',
    readingTimeMinutes: 5,
    status: 'published',
    body: [
      'Convergence Festival announced a stronger creator-focused program this year, prioritizing writer rooms, production design showcases, and behind-the-scenes process sessions.',
      'Organizers said the move responds to fan demand for context and craft, not just trailer reveals. Several major studios are also piloting longer Q&A formats with moderated editorial hosts.',
      'For Nerd Cluster readers, the shift marks a useful trend: fandom events are maturing into spaces where storytelling process matters as much as headline announcements.',
    ],
  },
  {
    id: 'news-collector-wave-signal-series',
    section: 'news',
    title: 'Signal Series Collector Wave Adds Numbered Deluxe Variant',
    slug: 'signal-series-collector-wave-deluxe-variant',
    excerpt:
      'The latest run introduces serialized packaging and expanded accessory sets aimed at long-term collectors.',
    publishedAt: '2026-04-17',
    authorId: 'maya-lane',
    categories: ['Collectibles'],
    tags: ['figures', 'limited', 'collector-market'],
    featuredImage: 'Collector shelf featuring premium boxed figures',
    readingTimeMinutes: 4,
    status: 'published',
    body: [
      'Manufacturers are increasingly treating premium variants as archival products rather than short-term novelty drops.',
      'This new Signal Series run includes serialized certificates, alternate sculpt details, and a stronger preservation-friendly packaging profile.',
      'Retail analysts expect demand to skew toward core collectors who prioritize display quality, long-term value retention, and lore relevance.',
    ],
  },
  {
    id: 'news-streaming-anthology-window',
    section: 'news',
    title: 'Three Genre Anthologies Target Staggered Weekly Windows',
    slug: 'three-genre-anthologies-staggered-weekly-windows',
    excerpt:
      'Studios are testing release pacing built around discourse durability rather than weekend spikes.',
    publishedAt: '2026-04-15',
    authorId: 'jules-orozco',
    categories: ['Streaming'],
    tags: ['anthology', 'release-strategy', 'audience-behavior'],
    featuredImage: 'Streaming control room dashboard with release calendar',
    readingTimeMinutes: 6,
    status: 'published',
    body: [
      'The anthology strategy appears designed to generate sustained conversation cycles rather than immediate completion metrics.',
      'Executives pointed to stronger episode-level engagement when release cadence leaves room for reaction, theory-building, and creator commentary.',
      'For editorial sites, this format creates an opportunity for richer weekly coverage that mixes criticism, analysis, and fan-context reporting.',
    ],
  },
  {
    id: 'news-draft-collector-market-forecast',
    section: 'news',
    title: 'Collector Market Forecast: What Summer Waves Might Look Like',
    slug: 'collector-market-forecast-summer-waves',
    excerpt:
      'Early channel chatter suggests summer product waves may pivot toward smaller serialized drops.',
    publishedAt: '2026-04-22',
    authorId: 'maya-lane',
    categories: ['Collectibles'],
    tags: ['market', 'forecast', 'draft'],
    featuredImage: 'Draft board with collectible release projections',
    readingTimeMinutes: 5,
    status: 'draft',
    body: [
      'This draft entry is intentionally unpublished and should never surface on public routes, listings, sitemap output, or homepage selections.',
      'It exists to harden launch behavior around editorial visibility and prevent accidental pre-publication exposure.',
      'Finalize this story only after sourcing is complete and status is switched to published in a separate editorial workflow step.',
    ],
  }

];
