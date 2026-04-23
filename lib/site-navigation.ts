export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const primaryNav: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    description: 'Editorial front page',
  },
  {
    href: '/news',
    label: 'News',
    description: 'Breaking stories and live updates',
  },
  {
    href: '/reviews',
    label: 'Reviews',
    description: 'Sharp verdicts and scorecards',
  },
  {
    href: '/features',
    label: 'Blog',
    description: 'Features, essays, and deep dives',
  },
  {
    href: '/store',
    label: 'Store',
    description: 'Collector-focused product drops',
  },
  {
    href: '/about',
    label: 'About',
    description: 'Our voice and editorial mission',
  },
  {
    href: '/contact',
    label: 'Contact',
    description: 'Editorial and partnership lines',
  },
];

export const footerEditorialLinks = [
  {
    href: '/news',
    label: 'Latest News',
  },
  {
    href: '/reviews',
    label: 'Featured Reviews',
  },
  {
    href: '/features',
    label: 'From the Blog',
  },
  {
    href: '/store',
    label: 'Store Spotlight',
  },
];

export const futureChannels = ['Newsletter', 'Podcast', 'Video Lane', 'Search'] as const;
