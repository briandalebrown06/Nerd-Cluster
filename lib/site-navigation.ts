export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export const primaryNav: NavItem[] = [
  {
    href: '/',
    label: 'Home',
<<<<<<< HEAD
    description: 'Front page and featured coverage',
=======
    description: 'Editorial front page',
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
  },
  {
    href: '/news',
    label: 'News',
<<<<<<< HEAD
    description: 'Breaking stories and updates',
=======
    description: 'Breaking stories and live updates',
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
  },
  {
    href: '/reviews',
    label: 'Reviews',
<<<<<<< HEAD
    description: 'Critiques for games, shows, and media',
  },
  {
    href: '/features',
    label: 'Features',
    description: 'Deep dives, essays, and creator spotlights',
=======
    description: 'Sharp verdicts and scorecards',
  },
  {
    href: '/features',
    label: 'Blog',
    description: 'Features, essays, and deep dives',
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
  },
  {
    href: '/store',
    label: 'Store',
<<<<<<< HEAD
    description: 'Collector-focused picks and merch',
=======
    description: 'Collector-focused product drops',
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
  },
  {
    href: '/about',
    label: 'About',
<<<<<<< HEAD
    description: 'Who we are and what we cover',
=======
    description: 'Our voice and editorial mission',
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
  },
  {
    href: '/contact',
    label: 'Contact',
<<<<<<< HEAD
    description: 'Editorial and partnership contact',
  },
];
=======
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
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
