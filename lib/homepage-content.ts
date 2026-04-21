import { getEntriesBySection, formatPublishedDate, getEntryAuthorName } from '@/lib/content/entries';
import { getFeaturedStoreProducts } from '@/lib/store/products';

export type StoryCard = {
  title: string;
  category: string;
  excerpt: string;
  href: string;
  meta: string;
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

const featureLead = features[0];
const featuredReviewEntry = reviews[0];

export const heroFeature: StoryCard = featureLead
  ? {
      ...toStoryCard(featureLead),
      category: 'Feature Spotlight',
    }
  : {
      title: 'Feature spotlight coming soon',
      category: 'Feature Spotlight',
      excerpt: 'A new longform feature will be highlighted here shortly.',
      href: '/features',
      meta: 'Nerd Cluster Staff',
    };

export const latestNews: StoryCard[] = news.slice(0, 3).map(toStoryCard);

export const featuredReview: StoryCard = featuredReviewEntry
  ? {
      ...toStoryCard(featuredReviewEntry),
      category: 'Featured Review',
      meta: `Score: ${featuredReviewEntry.score.toFixed(1)} / 10 • ${formatPublishedDate(featuredReviewEntry.publishedAt)}`,
    }
  : {
      title: 'Featured review coming soon',
      category: 'Featured Review',
      excerpt: 'Our editors are preparing the next review spotlight now.',
      href: '/reviews',
      meta: 'Nerd Cluster Reviews',
    };

export const latestFeatures: StoryCard[] = features.slice(0, 3).map(toStoryCard);

export const trendingTopics = [
  'Retro game remaster season',
  'Limited steelbook drops',
  'Anime adaptation watchlist',
  'Convention cosplay trends',
  'Horror universe timeline debates',
];

export const storeTeasers: ProductTeaser[] = getFeaturedStoreProducts(3).map((product) => ({
  name: product.name,
  category: product.category,
  price: product.price,
  href: `/store/${product.slug}`,
}));
