export type AuthorMeta = {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
};

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
  status: 'draft' | 'published';
};

export type ReviewMeta = ArticleMeta & {
  score?: number;
  platform?: string[];
};

export type ProductMeta = {
  name: string;
  slug: string;
  price: string;
  category: string;
  image: string;
  externalUrl?: string;
  inStock: boolean;
};
