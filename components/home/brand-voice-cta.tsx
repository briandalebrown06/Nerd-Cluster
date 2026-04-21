import Link from 'next/link';

import { CardShell } from '@/components/ui/card-shell';

export function BrandVoiceCta() {
  return (
    <section className="home-section" aria-labelledby="brand-voice-title">
      <CardShell className="brand-voice-cta">
        <div>
          <p className="home-kicker">Nerd Cluster Voice</p>
          <h2 id="brand-voice-title" className="home-section__title">
            Built for fans who want substance, style, and discovery.
          </h2>
          <p className="section-description">
            We blend fast-moving culture coverage with collector-minded perspective and editorial
            depth. The newsletter is in planning and will be announced when ready.
          </p>
        </div>
        <div className="brand-voice-cta__actions">
          <Link className="button-link" href="/about">
            About Nerd Cluster
          </Link>
          <span className="home-meta">Newsletter status: Coming soon</span>
        </div>
      </CardShell>
    </section>
  );
}
