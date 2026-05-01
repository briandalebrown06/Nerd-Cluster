import type { Metadata } from 'next';

import { PageShell } from '@/components/layout/page-shell';
import { CardShell } from '@/components/ui/card-shell';
import { SectionHeading } from '@/components/ui/section-heading';

const contactChannels = [
  {
    title: 'Editorial tips',
    description:
      'Story leads, release notes, corrections, and industry updates the newsroom should see.',
    value: 'tips@nerdcluster.com',
    note: 'Best for time-sensitive news and factual corrections.',
  },
  {
    title: 'Review requests',
    description:
      'Screeners, review copies, collector editions, and preview access for coverage consideration.',
    value: 'reviews@nerdcluster.com',
    note: 'Include title, category, release date, and access format.',
  },
  {
    title: 'Partnerships + brand',
    description:
      'Brand collaborations, sponsorships, store partnerships, and campaign conversations.',
    value: 'partners@nerdcluster.com',
    note: 'Include timeline, budget range, and campaign goals when possible.',
  },
  {
    title: 'Contributors',
    description:
      'Pitches from writers, critics, photographers, illustrators, and fan-culture specialists.',
    value: 'contributors@nerdcluster.com',
    note: 'Share clips, beat expertise, and two or three pitch angles.',
  },
] as const;

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@nerdcluster',
    note: 'Editorial drops, collector signals, and visual coverage',
  },
  {
    label: 'YouTube',
    handle: 'Nerd Cluster',
    note: 'Video content in rollout — subscribe now to catch the first drops',
  },
  {
    label: 'Cluster Signal',
    handle: 'Newsletter',
    note: 'Weekly editorial digest — sign up via this form',
  },
] as const;

export const metadata: Metadata = {
  title: 'Contact Nerd Cluster',
  description:
    'Contact Nerd Cluster for editorial tips, review requests, partnerships, and contributor opportunities.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Got a tip, pitch, or partnership idea for the Cluster desk?"
      description="Reach the right inbox and your message will land where it can actually move. We read the signal. We just do not promise to reply at hyperspeed."
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
          eyebrow="Quick inquiry"
          title="Send a message directly"
          description="Backend submissions are being configured. Use the email channels above for an active response path right now."
        />

        <CardShell className="contact-form-shell">
          <div className="contact-form-status" role="note" aria-label="Form status">
            <p>
              Form submissions are currently offline during launch preparation. Please use the
              appropriate inbox above for guaranteed delivery.
            </p>
          </div>

          <form className="contact-form" aria-describedby="contact-form-disclaimer">
            <fieldset disabled aria-label="Contact form fields — currently disabled">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Inquiry type
                <select name="inquiry_type">
                  <option value="">Select a type</option>
                  <option value="editorial-tip">Editorial tip</option>
                  <option value="review-request">Review request</option>
                  <option value="partnership">Partnership</option>
                  <option value="store-merch">Store / merch</option>
                  <option value="contributor">Contributor pitch</option>
                  <option value="general">General</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What would you like to discuss?"
                />
              </label>
            </fieldset>
            <button type="button" disabled aria-disabled="true">
              Send message (form offline)
            </button>
            <p id="contact-form-disclaimer" className="contact-form__disclaimer">
              This form will be activated once secure backend handling and confirmations are in
              place.
            </p>
          </form>
        </CardShell>
      </section>

      <section className="contact-section">
        <SectionHeading
          eyebrow="Elsewhere"
          title="Follow the brand"
          description="Social and newsletter channels are staging for expansion as Nerd Cluster grows."
        />

        <ul className="contact-social" aria-label="Nerd Cluster social channels">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <span>{link.label}</span>
              <span>{link.handle}</span>
              <span style={{ marginTop: '0.25rem', display: 'block' }}>{link.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
