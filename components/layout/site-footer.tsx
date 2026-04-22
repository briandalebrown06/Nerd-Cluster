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
              A cinematic editorial hub for people who care about stories, craft, and what belongs
              on the shelf.
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
          <h2 className="site-footer__heading">Front Page Lanes</h2>
          <ul className="site-footer__links">
            {footerEditorialLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="site-footer__heading">Signal Lane</h2>
          <ul className="site-footer__chips" aria-label="Upcoming channels in launch queue">
            {futureChannels.map((channel) => (
              <li key={channel} className="site-footer__chip">
                {channel} <span className="site-footer__chip-note">In rollout</span>
              </li>
            ))}
          </ul>
          <p className="site-footer__note">
            More channels are being staged carefully so the experience stays clean, curated, and
            high-signal.
          </p>
        </section>
      </Container>
    </footer>
  );
}
