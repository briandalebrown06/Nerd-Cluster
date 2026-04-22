export type PublishingStatus = 'draft' | 'published';

export type EditorialSection = 'news' | 'reviews' | 'features';

export type AuthorMeta = {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
};

export type Author = AuthorMeta;

export type ArticleMeta = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  authorId: string;
  categories: string[];
  tags: string[];
  featuredImage: string;
  readingTimeMinutes?: number;
  status: PublishingStatus;
};

type EditorialBase = ArticleMeta & {
  id: string;
  section: EditorialSection;
  body: string[];
};

export type EditorialEntry = EditorialBase & {
  score?: number;
  verdict?: string;
  platform?: string[];
};

export type ReviewEntry = EditorialBase & {
  section: 'reviews';
  score: number;
  verdict: string;
  platform?: string[];
};

export type ProductAvailability = 'available' | 'preorder' | 'sold-out';

export type ProductCategory =
  | 'Collectibles'
  | 'Apparel'
  | 'Home & Display'
  | 'Books & Art'
  | 'Gaming Accessories';

export type ProductMeta = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: string;
  category: ProductCategory;
  franchise: string;
  type: string;
  image: string;
  imageAlt: string;
  availability: ProductAvailability;
  featured?: boolean;
  externalUrl?: string;
  ctaLabel?: string;
  tags: string[];
};
