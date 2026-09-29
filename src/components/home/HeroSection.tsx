import { hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DownloadCta from "@/components/download/DownloadCta";
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
            <DownloadCta idPrefix="hero" />
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="hero-media">
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}
