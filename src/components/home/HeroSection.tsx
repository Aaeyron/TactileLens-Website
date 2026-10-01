import { downloadCta, hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-content">
          <Chip>{hero.badge}</Chip>

          <h1 id="hero-title" className="hero-title">
            {hero.titleLead}{" "}
            <span className="hero-title-highlight">{hero.titleHighlight}</span>
          </h1>

          <p className="hero-lead">{hero.description}</p>

          <div className="hero-actions">
            <Button href={downloadCta.pageHref} variant="inverse">
              {downloadCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline-inverse">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="chip-row hero-chips" role="list">
            {hero.trustBadges.map((badge) => (
              <li key={badge.label}>
                <Chip icon={badge.icon}>{badge.label}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <PhoneMockup />
          {hero.floatingCards.map((card, index) => (
            <div className={`float-card float-card--${index + 1}`} key={card.label} aria-hidden="true">
              <span className="float-card-icon">
                <Icon name={card.icon} size={18} />
              </span>
              {card.label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
