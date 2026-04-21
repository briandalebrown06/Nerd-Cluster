export const siteConfig = {
  name: 'Nerd Cluster',
  description:
    'Nerd Cluster is a polished entertainment, fandom, pop-culture, and collector-focused editorial website.',
  url: 'https://nerdcluster.example',
  ogImage: '/og-default.jpg',
  xHandle: '@nerdcluster',
} as const;

export function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.url);
}
