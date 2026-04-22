import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { primaryNav } from '@/lib/site-navigation';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Nerd Cluster</p>
          <p className="site-footer__tagline">
            A modern editorial home for entertainment, fandom, and collector culture.
          </p>
        </div>

        <div>
          <p className="site-footer__heading">Explore</p>
          <ul className="site-footer__links">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
