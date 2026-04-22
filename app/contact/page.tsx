import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';
import { CardShell } from '@/components/ui/card-shell';
import { SectionHeading } from '@/components/ui/section-heading';

const contactChannels = [
  {
    title: 'Editorial tips',
    description: 'Story leads, release notes, and industry updates our newsroom should see.',
    value: 'tips@nerdcluster.example',
    note: 'Best for time-sensitive news and corrections.',
  },
  {
    title: 'Business + partnerships',
    description: 'Brand collaborations, sponsorships, and campaign conversations.',
    value: 'partners@nerdcluster.example',
    note: 'Include timeline, budget range, and campaign goals when possible.',
  },
  {
    title: 'Contributors',
    description: 'Pitches from writers, critics, photographers, and fan-culture specialists.',
    value: 'contributors@nerdcluster.example',
    note: 'Please share clips, beat expertise, and 2-3 pitch angles.',
  },
] as const;

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@nerdcluster',
  },
  {
    label: 'YouTube',
    handle: 'Nerd Cluster',
  },
  {
    label: 'Newsletter',
    handle: 'Launch planned',
  },
] as const;

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nerd Cluster for editorial tips, partnerships, and contributor opportunities.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let’s talk stories, partnerships, and fandom culture."
      description="Reach the Nerd Cluster team through the channel that fits your request. We keep communication structured so the right people can respond quickly."
    >
      <section className="contact-section">
        <SectionHeading
          eyebrow="Contact channels"
          title="Choose the right inbox"
          description="A focused inbox structure keeps editorial, business, and contributor conversations moving without crossed wires."
        />

        <div className="contact-grid">
          {contactChannels.map((channel) => (
            <CardShell key={channel.title} className="contact-card">
              <h3 className="contact-card__title">{channel.title}</h3>
              <p className="contact-card__description">{channel.description}</p>
              <p className="contact-card__value">{channel.value}</p>
              <p className="contact-card__note">{channel.note}</p>
            </CardShell>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <SectionHeading
          eyebrow="Contact form"
          title="Quick inquiry form"
          description="Backend submissions are not live yet. Use the email channels above for guaranteed delivery right now."
        />

        <CardShell className="contact-form-shell">
          <div className="contact-form-status" role="note" aria-label="Form status">
            <p>
              Form submissions are currently offline during launch hardening. Please email the
              appropriate inbox above for an active response path.
            </p>
          </div>
          <form className="contact-form" aria-describedby="contact-form-disclaimer">
            <fieldset disabled>
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} placeholder="What would you like to discuss?" />
              </label>
            </fieldset>
            <button type="button" disabled aria-disabled="true">
              Submission disabled during launch prep
            </button>
          </form>
          <p id="contact-form-disclaimer" className="contact-form__disclaimer">
            We will enable this form once secure backend handling and confirmations are in place.
          </p>
        </CardShell>
      </section>

      <section className="contact-section">
        <SectionHeading
          eyebrow="Elsewhere"
          title="Follow the brand"
          description="Social and newsletter channels are staged for expansion as Nerd Cluster grows."
        />

        <ul className="contact-social" aria-label="Nerd Cluster social channels">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <span>{link.label}</span>
              <span>{link.handle}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}

import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nerd Cluster for editorial tips, partnerships, and contributor conversations.',
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contact"
      description="Reach out for editorial tips, partnership conversations, and contributor inquiries."
    />
  );
}
