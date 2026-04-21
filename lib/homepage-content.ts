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

export const heroFeature: StoryCard = {
  title: 'Inside the New Wave of Sci-Fi Fandom Communities',
  category: 'Feature Spotlight',
  excerpt:
    'From midnight screenings to custom collector builds, fan-driven communities are redefining how stories live beyond the screen.',
  href: '/features',
  meta: 'By Staff • 8 min read',
};

export const latestNews: StoryCard[] = [
  {
    title: 'Major Comic-Con Panels Announced for Summer Season',
    category: 'Events',
    excerpt:
      'Studios and creators line up franchise reveals, behind-the-scenes discussions, and exclusive previews.',
    href: '/news',
    meta: '2 hours ago',
  },
  {
    title: 'Collector Figure Line Expands with Limited Variant Run',
    category: 'Collectibles',
    excerpt:
      'A new premium wave targets long-time collectors with alternate paint editions and numbered releases.',
    href: '/news',
    meta: 'Today',
  },
  {
    title: 'Streaming Slate Reveals Three New Genre Anthologies',
    category: 'Streaming',
    excerpt:
      'Platform executives revealed creator-led anthology projects set to debut across the next two quarters.',
    href: '/news',
    meta: 'Yesterday',
  },
];

export const featuredReview: StoryCard = {
  title: 'Review: Eclipse Protocol Is Smart, Stylish, and Surprisingly Emotional',
  category: 'Featured Review',
  excerpt:
    'A bold sci-fi thriller that balances tactical gameplay with character-driven stakes, rewarding patient, curious players.',
  href: '/reviews',
  meta: 'Score: 8.8 / 10',
};

export const latestFeatures: StoryCard[] = [
  {
    title: 'How Practical Effects Are Winning Back Modern Creature Cinema',
    category: 'Craft',
    excerpt:
      'Filmmakers are blending analog techniques with digital polish to restore texture and weight on-screen.',
    href: '/features',
    meta: 'Feature',
  },
  {
    title: 'The New Rules of Franchise Lore in the Streaming Era',
    category: 'Analysis',
    excerpt:
      'Shared universes now move at platform speed, reshaping how audiences follow canon and continuity.',
    href: '/features',
    meta: 'Analysis',
  },
  {
    title: 'From Shelf to Spotlight: Building a Collection with Story Value',
    category: 'Collector Guide',
    excerpt:
      'A practical framework for choosing pieces that balance aesthetics, rarity, and long-term cultural significance.',
    href: '/features',
    meta: 'Guide',
  },
];

export const trendingTopics = [
  'Retro game remaster season',
  'Limited steelbook drops',
  'Anime adaptation watchlist',
  'Convention cosplay trends',
  'Horror universe timeline debates',
];

export const storeTeasers: ProductTeaser[] = [
  {
    name: 'Nerd Cluster Collector Tee',
    category: 'Apparel',
    price: '$32',
    href: '/store',
  },
  {
    name: 'Arcade Nights Art Print Set',
    category: 'Prints',
    price: '$48',
    href: '/store',
  },
  {
    name: 'Signal Wave Enamel Pin Pack',
    category: 'Accessories',
    price: '$18',
    href: '/store',
  },
];
