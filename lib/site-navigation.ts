export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const primaryNav: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    description: 'Front page and featured coverage',
  },
  {
    href: '/news',
    label: 'News',
    description: 'Breaking stories and updates',
  },
  {
    href: '/reviews',
    label: 'Reviews',
    description: 'Critiques for games, shows, and media',
  },
  {
    href: '/features',
    label: 'Features',
    description: 'Deep dives, essays, and creator spotlights',
  },
  {
    href: '/store',
    label: 'Store',
    description: 'Collector-focused picks and merch',
  },
  {
    href: '/about',
    label: 'About',
    description: 'Who we are and what we cover',
  },
  {
    href: '/contact',
    label: 'Contact',
    description: 'Editorial and partnership contact',
  },
];

export const footerEditorialLinks = [
  {
    href: '/news',
    label: 'Latest News',
  },
  {
    href: '/reviews',
    label: 'Recent Reviews',
  },
  {
    href: '/features',
    label: 'Featured Stories',
  },
  {
    href: '/store',
    label: 'Collector Store',
  },
];

export const futureChannels = [
  'Newsletter',
  'Podcast',
  'Contributor Network',
  'Social Channels',
] as const;
