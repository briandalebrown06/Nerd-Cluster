import {
  formatPublishedDate,
  getEntriesBySection,
  getEntryAuthorName,
} from '@/lib/content/entries';
import { getFeaturedStoreProducts } from '@/lib/store/products';

export type StoryCard = {
  title: string;
  category: string;
  excerpt: string;
  href: string;
  meta: string;
};

export type TonightItem = {
  label: string;
  value: string;
};

export type PodcastLaneItem = {
  title: string;
  format: string;
  status: string;
  description: string;
};

export type ProductTeaser = {
  name: string;
  category: string;
  price: string;
  href: string;
};

function toStoryCard(entry: {
  title: string;
  categories: string[];
  excerpt: string;
  slug: string;
  section: 'news' | 'reviews' | 'features';
  publishedAt: string;
  authorId: string;
  readingTimeMinutes?: number;
}): StoryCard {
  return {
    title: entry.title,
    category: entry.categories[0] ?? 'Editorial',
    excerpt: entry.excerpt,
    href: `/${entry.section}/${entry.slug}`,
    meta: `${formatPublishedDate(entry.publishedAt)} · ${getEntryAuthorName(entry.authorId)}${entry.readingTimeMinutes ? ` · ${entry.readingTimeMinutes} min` : ''}`,
  };
}

const news = getEntriesBySection('news');
const features = getEntriesBySection('features');
const reviews = getEntriesBySection('reviews');

const heroLead = features[0] ?? reviews[0] ?? news[0];
const featuredReviewEntry = reviews[0];

/* ============================================================
   BRAND HERO — editorial front page identity statement
   ============================================================ */
export const brandHero = {
  edition: 'Midnight Edition',
  headline: 'The pop-culture desk is open.',
  excerpt:
    'Nerd Cluster tracks the movies, shows, games, comics, collectibles, and fandom moments worth talking about — with sharp reviews, smart features, and collector-minded coverage.',
  primaryCta: 'Enter the Cluster',
  primaryHref: '/news',
  secondaryCta: 'Browse Reviews',
  secondaryHref: '/reviews',
};

/* ============================================================
   HERO SPOTLIGHT — top content article for Cover Story card
   ============================================================ */
export const heroSpotlight = heroLead
  ? {
      ...toStoryCard(heroLead),
      label: 'Cover Story',
      cta: 'Enter the Story',
    }
  : {
      title: 'First stories drop here soon.',
      category: 'Launch',
      excerpt: 'The editorial desk is warming up. Fresh coverage is being queued.',
      href: '/features',
      meta: 'Nerd Cluster Editorial',
      label: 'Cover Story',
      cta: 'Explore Features',
    };

/* ============================================================
   TONIGHT IN THE CLUSTER
   ============================================================ */
export const tonightInCluster: TonightItem[] = [
  {
    label: 'Watching',
    value: 'Trailers, releases, and streaming chaos',
  },
  {
    label: 'Playing',
    value: 'Backlog picks and launch-week noise',
  },
  {
    label: 'Reading',
    value: 'Comics, lore, and creator moves',
  },
  {
    label: 'Collecting',
    value: 'Drops, shelves, and display-worthy finds',
  },
];

/* ============================================================
   LATEST NEWS
   ============================================================ */
export const latestNews: StoryCard[] = news.slice(0, 3).map(toStoryCard);

/* ============================================================
   FEATURED REVIEW
   ============================================================ */
export const featuredReview: StoryCard & { score?: string } = featuredReviewEntry
  ? {
      ...toStoryCard(featuredReviewEntry),
      category: 'The Verdict',
      meta: `Score ${featuredReviewEntry.score.toFixed(1)} / 10`,
      score: `${featuredReviewEntry.score.toFixed(1)}`,
    }
  : {
      title: 'Next verdict from the review desk.',
      category: 'The Verdict',
      excerpt: 'Our next deep review is being finalized.',
      href: '/reviews',
      meta: 'Nerd Cluster Reviews',
    };

/* ============================================================
   FRANCHISE TAKEOVER
   ============================================================ */
export const franchiseTakeover = {
  label: 'Franchise Takeover',
  title: 'One universe. One week. All the lore.',
  deck: 'Every week Nerd Cluster picks one franchise, universe, or fandom storm and breaks down what is happening, what matters, and what fans are currently arguing about.',
  points: [
    'Lore checkpoint: what changed and why it matters to long-term fans',
    'Collector briefing: serialized drops, display strategy, and what to track',
    'Creator radar: who is steering the next era and what fans should expect',
    'Fan debate temperature: the takes worth having and the takes to skip',
  ],
  href: '/features/franchise-lore-streaming-era-context-new-canon',
  cta: 'Enter the Takeover',
};

/* ============================================================
   FROM THE BLOG
   ============================================================ */
export const fromBlog: StoryCard[] = features.slice(0, 3).map(toStoryCard);

/* ============================================================
   PODCAST / VIDEO LANE
   ============================================================ */
export const podcastVideoLane: PodcastLaneItem[] = [
  {
    title: 'Cluster Cast: Weekly Dispatch',
    format: 'Podcast',
    status: 'Pilot season in production',
    description:
      'Fast takes, sharp context, and one must-watch recommendation per episode. No hype sludge, just useful fandom signal.',
  },
  {
    title: 'Shelf Control',
    format: 'Video',
    status: 'Studio setup in progress',
    description:
      'Collector-focused breakdowns on display design, premium drops, and practical buying strategy for people who care about what goes on the shelf.',
  },
  {
    title: 'After-Credits Room',
    format: 'Podcast + Video',
    status: 'Editorial lineup locked',
    description:
      'Post-release reactions with no hype, just informed fandom conversation. The kind of debrief worth having before the group chat gets loud.',
  },
];

/* ============================================================
   STORE SPOTLIGHT
   ============================================================ */
export const storeSpotlight: ProductTeaser[] = getFeaturedStoreProducts(3).map((product) => ({
  name: product.name,
  category: product.category,
  price: product.price,
  href: `/store/${product.slug}`,
}));

/* ============================================================
   NEWSLETTER CTA
   ============================================================ */
export const newsletterCta = {
  title: 'Join Cluster Signal.',
  body: 'Sharp reviews, fresh drops, release radar, and the fandom debates worth entering. Zero spam energy. Just the good stuff — weekly.',
  primaryLabel: 'Join Cluster Signal',
  primaryHref: '/contact',
  secondaryLabel: 'See Latest Stories',
  secondaryHref: '/news',
};

/* ============================================================
   ABOUT STRIP
   ============================================================ */
export const aboutStrip = {
  title: 'Built for people who treat stories like places to live.',
  body: 'Nerd Cluster is an editorial home for lore divers, collector-brains, backlog warriors, rewatch addicts, trailer pausers, convention wanderers, and anyone who has ever said "just one more breakdown."',
  href: '/about',
  cta: 'About Nerd Cluster',
};
