'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
<<<<<<< HEAD

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
=======
import { useEffect, useId, useRef, useState } from 'react';

import { NerdClusterLogo } from '@/components/brand/nerd-cluster-logo';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import { clusterStatus } from '@/lib/homepage-content';
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
import { primaryNav } from '@/lib/site-navigation';

export function SiteHeader() {
  const pathname = usePathname();
<<<<<<< HEAD

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
=======
  const [mobileOpen, setMobileOpen] = useState(false);
  const navId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    firstMobileLinkRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header-wrap">
      <div className="cluster-status-bar" aria-label="Theme and launch status">
        <Container className="cluster-status-bar__inner">
          <p>{clusterStatus.theme}</p>
          <p>{clusterStatus.pulse}</p>
        </Container>
      </div>

      <div className="site-header">
        <Container className="site-header__inner">
          <Link
            className="brand-cluster"
            href="/"
            aria-label="Nerd Cluster home"
            onClick={() => setMobileOpen(false)}
          >
            <NerdClusterLogo className="brand-cluster__logo" priority />
            <span className="brand-cluster__text-wrap">
              <span className="brand-cluster__name">Nerd Cluster</span>
              <span className="brand-cluster__tagline">
                Entertainment • Fandom • Collector Culture
              </span>
            </span>
          </Link>

          <button
            ref={toggleRef}
            className="mobile-menu-toggle"
            aria-expanded={mobileOpen}
            aria-controls={navId}
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
      </div>

      {mobileOpen ? (
        <div className={cn('mobile-panel', 'mobile-panel--open')} id={navId}>
          <Container>
            <nav aria-label="Mobile primary" className="site-nav">
              <ul className="mobile-nav__list">
                {primaryNav.map((item, index) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname
                        ? pathname.startsWith(item.href)
                        : false;

                  return (
                    <li key={item.href}>
                      <Link
                        ref={index === 0 ? firstMobileLinkRef : undefined}
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
>>>>>>> 4a13034e25afd14ef80a122076e26e37ff64a710
    </header>
  );
}
