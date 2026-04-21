import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const pillars = [
  'Entertainment',
  'Fandom',
  'Pop Culture',
  'Collecting',
  'Editorial Features',
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-shell">
        <Container>
          <p className="hero-eyebrow">Nerd Cluster</p>
          <h1 className="hero-title">
            A modern culture magazine for fans, collectors, and obsessives.
          </h1>
          <p className="hero-description">
            This foundation milestone establishes the brand tone, visual rhythm, and scalable
            architecture that future sections will build on.
          </p>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Foundation"
            title="What this baseline is optimizing for"
            description="Strong editorial hierarchy, future CMS portability, and clean modular growth."
          />

          <ul className="pill-grid" aria-label="Editorial pillars">
            {pillars.map((pillar) => (
              <li key={pillar} className="pill-card">
                {pillar}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
