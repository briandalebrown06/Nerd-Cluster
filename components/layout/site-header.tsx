'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

import { NerdClusterLogo } from '@/components/brand/nerd-cluster-logo';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import { primaryNav } from '@/lib/site-navigation';

export function SiteHeader() {
  const pathname = usePathname();
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
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  return (
    <header className="site-header-wrap">
      <div className="signal-status-bar" role="note" aria-label="Editorial signal status">
        <Container className="signal-status-bar__inner">
          <span className="signal-status-bar__edition">Midnight Edition</span>
          <p className="signal-status-bar__message">
            Signal live · Fresh drops across News, Reviews, and Features
          </p>
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
              <span className="brand-cluster__tagline">Pop-culture editorial</span>
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
        <div className="mobile-panel" id={navId}>
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
    </header>
  );
}
