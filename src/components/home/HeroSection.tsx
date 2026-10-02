import { downloadCta, hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Container from "@/components/ui/Container";
import Screenshot from "@/components/ui/Screenshot";

export default function HeroSection() {
  return (
    <section className="hero" data-tone="white" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-content">
          <Chip>{hero.badge}</Chip>

          <h1 id="hero-title" className="hero-title">
            {hero.titleLead}{" "}
            <span className="hero-title-highlight">{hero.titleHighlight}</span>
          </h1>

          <p className="hero-lead">{hero.description}</p>

          <div className="hero-actions">
            <Button href={downloadCta.pageHref} variant="primary">
              {downloadCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="chip-row hero-chips" role="list">
            {hero.trustBadges.map((badge) => (
              <li key={badge.label}>
                <Chip>{badge.label}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          {/* TODO: screenshot — see screens.scanResult in site.ts */}
          <Screenshot screen={hero.screen} frame preload sizes="(min-width: 960px) 272px, 240px" />
        </div>
      </Container>
    </section>
  );
}
