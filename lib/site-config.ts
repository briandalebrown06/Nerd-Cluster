const FALLBACK_DEV_ORIGIN = 'http://localhost:3000';

function normalizeOrigin(value: string): string {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, '');
}

function resolveSiteOrigin(): string {
  const configuredOrigin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (configuredOrigin) {
    return normalizeOrigin(configuredOrigin);
  }

  return FALLBACK_DEV_ORIGIN;
}

const siteOrigin = resolveSiteOrigin();

export const siteConfig = {
  name: 'Nerd Cluster',
  description:
    'Nerd Cluster is a polished entertainment, fandom, pop-culture, and collector-focused editorial website.',
  url: siteOrigin,
  ogImage: '/og-default.jpg',
  xHandle: '@nerdcluster',
} as const;

export function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.url);
}
