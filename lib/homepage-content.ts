import {
  getEntriesBySection,
  formatPublishedDate,
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
    meta: `${formatPublishedDate(entry.publishedAt)} • ${getEntryAuthorName(entry.authorId)}${entry.readingTimeMinutes ? ` • ${entry.readingTimeMinutes} min read` : ''}`,
  };
}

const news = getEntriesBySection('news');
const features = getEntriesBySection('features');
const reviews = getEntriesBySection('reviews');

const heroLead = features[0] ?? reviews[0] ?? news[0];
const featuredReviewEntry = reviews[0];

export const clusterStatus = {
  theme: 'Theme: Cinematic worlds, franchise lore, and collector heat checks',
  pulse: 'Status: Live editorial desk with fresh drops across News, Reviews, and Features',
};

export const heroSpotlight = heroLead
  ? {
      ...toStoryCard(heroLead),
      label: 'Launch Spotlight',
      cta: 'Enter the Story',
    }
  : {
      title: 'Nerd Cluster launch sequence is warming up.',
      category: 'Launch Spotlight',
      excerpt: 'Fresh front-page coverage is being queued now. Check back soon for the first drop.',
      href: '/features',
      meta: 'Nerd Cluster Editorial',
      label: 'Launch Spotlight',
      cta: 'Explore Features',
    };

export const tonightInCluster: TonightItem[] = [
  {
    label: 'Stories live tonight',
    value: String(Math.min(news.length + features.length + reviews.length, 9)),
  },
  { label: 'Franchise in focus', value: 'Signal Universe' },
  { label: 'Collector watch', value: 'Deluxe variants + steelbook chatter' },
  {
    label: 'Review desk now playing',
    value: featuredReviewEntry?.title ?? 'Fresh review incoming',
  },
];

export const latestNews: StoryCard[] = news.slice(0, 3).map(toStoryCard);

export const featuredReview: StoryCard = featuredReviewEntry
  ? {
      ...toStoryCard(featuredReviewEntry),
      category: 'Featured Review',
      meta: `Score ${featuredReviewEntry.score.toFixed(1)}/10 • ${featuredReviewEntry.verdict}`,
    }
  : {
      title: 'Featured review drops here next.',
      category: 'Featured Review',
      excerpt: 'Our next deep verdict is being finalized by the review desk.',
      href: '/reviews',
      meta: 'Nerd Cluster Reviews',
    };

export const franchiseTakeover = {
  title: 'Franchise Takeover: Signal Universe',
  deck: 'Tonight we are tracking every major beat in the Signal timeline—from creator interviews to collector wave reveals and lore shakeups.',
  points: [
    'Lore checkpoint: what changed in the latest anthology drop',
    'Collector briefing: serialized packaging and display strategy',
    'Creator radar: who is steering the next era and why fans care',
  ],
  href: '/features/franchise-lore-streaming-era-context-new-canon',
};

export const fromBlog: StoryCard[] = features.slice(0, 3).map(toStoryCard);

export const podcastVideoLane: PodcastLaneItem[] = [
  {
    title: 'Cluster Cut: Weekly Dispatch',
    format: 'Podcast',
    status: 'Pilot season in production',
    description: 'Fast takes, sharp context, and one must-watch recommendation per episode.',
  },
  {
    title: 'Shelf Control',
    format: 'Video',
    status: 'Studio setup in progress',
    description:
      'Collector-focused breakdowns on display design, premium drops, and practical buying strategy.',
  },
  {
    title: 'After-Credits Room',
    format: 'Podcast + Video',
    status: 'Editorial lineup locked',
    description: 'Post-release reactions with no hype sludge, just informed fandom conversation.',
  },
];

export const storeSpotlight: ProductTeaser[] = getFeaturedStoreProducts(3).map((product) => ({
  name: product.name,
  category: product.category,
  price: product.price,
  href: `/store/${product.slug}`,
}));

export const newsletterCta = {
  title: 'Join the Cluster Signal',
  body: 'Weekly dispatches, editor picks, and collector-minded recommendations. Zero spam energy. Just the good stuff.',
  primaryLabel: 'Get Newsletter Updates',
  primaryHref: '/contact',
  secondaryLabel: 'See Latest Stories',
  secondaryHref: '/news',
};

export const aboutStrip = {
  title: 'Nerd Cluster is your front row to fandom culture.',
  body: 'We cover the stories behind the stories: entertainment craft, franchise worlds, and the collector mindset that keeps culture alive between releases.',
  href: '/about',
  cta: 'Read the About Page',
};
