'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import { primaryNav } from '@/lib/site-navigation';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="brand-mark" href="/" aria-label="Nerd Cluster home">
          Nerd Cluster
        </Link>

        <nav aria-label="Primary" className="site-nav">
          <ul className="site-nav__list">
            {primaryNav.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname
                    ? pathname.startsWith(item.href)
                    : false;

              return (
                <li key={item.href}>
                  <Link
                    className={cn('site-nav__link', isActive && 'site-nav__link--active')}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
