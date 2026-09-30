import { downloadCta, hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-content">
          <p className="hero-badge">{hero.badge}</p>

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

          <ul className="trust-badges" role="list">
            {hero.trustBadges.map((badge) => (
              <li className="trust-badge" key={badge.label}>
                <Icon name={badge.icon} size={18} />
                {badge.label}
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
