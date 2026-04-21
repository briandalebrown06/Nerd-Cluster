'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { NerdClusterLogo } from '@/components/brand/nerd-cluster-logo';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import { primaryNav } from '@/lib/site-navigation';

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link
          className="brand-cluster"
          href="/"
          aria-label="Nerd Cluster home"
          onClick={() => setMobileOpen(false)}
        >
          <NerdClusterLogo className="brand-cluster__logo" />
          <span className="brand-cluster__text-wrap">
            <span className="brand-cluster__name">Nerd Cluster</span>
            <span className="brand-cluster__tagline">Editorial fandom culture</span>
          </span>
        </Link>

        <button
          className="mobile-menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-primary-nav"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>

        <nav aria-label="Primary" className="site-nav desktop-nav">
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
                    aria-current={isActive ? 'page' : undefined}
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

      {mobileOpen ? (
        <div className={cn('mobile-panel', 'mobile-panel--open')} id="mobile-primary-nav">
          <Container>
            <nav aria-label="Mobile primary" className="site-nav">
              <ul className="mobile-nav__list">
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
                        aria-current={isActive ? 'page' : undefined}
                        className={cn('mobile-nav__link', isActive && 'mobile-nav__link--active')}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="mobile-nav__description">{item.description}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
