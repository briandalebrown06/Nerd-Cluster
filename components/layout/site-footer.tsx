import Link from 'next/link';

import { NerdClusterLogo } from '@/components/brand/nerd-cluster-logo';
import { Container } from '@/components/ui/container';
import { footerEditorialLinks, futureChannels, primaryNav } from '@/lib/site-navigation';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <section className="site-footer__brand-block" aria-label="Nerd Cluster brand summary">
          <NerdClusterLogo className="site-footer__logo" />
          <div>
            <p className="site-footer__brand">Nerd Cluster</p>
            <p className="site-footer__tagline">
              A cinematic editorial destination for entertainment, fandom, and collector culture.
            </p>
          </div>
        </section>

        <section>
          <h2 className="site-footer__heading">Navigate</h2>
          <ul className="site-footer__links">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="site-footer__heading">Editorial</h2>
          <ul className="site-footer__links">
            {footerEditorialLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="site-footer__heading">Next channels</h2>
          <ul className="site-footer__chips" aria-label="Upcoming channel roadmap">
            {futureChannels.map((channel) => (
              <li key={channel} className="site-footer__chip">
                {channel} <span className="site-footer__chip-note">Coming soon</span>
              </li>
            ))}
          </ul>
          <p className="site-footer__note">
            These areas are planned and intentionally marked as in-progress, not yet live features.
          </p>
        </section>
      </Container>
    </footer>
  );
}
