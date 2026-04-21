export type EditorialSection = 'news' | 'reviews' | 'features';

export type Author = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
};

export type EditorialEntry = {
  id: string;
  section: EditorialSection;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  authorId: string;
  categories: string[];
  tags: string[];
  featuredImage: string;
  readingTimeMinutes: number;
  status: 'draft' | 'published';
  body: string[];
};

export type ReviewEntry = EditorialEntry & {
  section: 'reviews';
  score: number;
  verdict: string;
};
