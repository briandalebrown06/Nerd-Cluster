import type { ReactNode } from 'react';

import { Container } from '@/components/ui/container';

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <main id="main-content" className="page-shell">
      <Container>
        <section className="page-intro">
          <p className="page-intro__eyebrow">{eyebrow}</p>
          <h1 className="page-intro__title">{title}</h1>
          <p className="page-intro__description">{description}</p>
        </section>

        {children}
      </Container>
    </main>
  );
}
