import { downloadCta, hero } from "@/content/site";

export default function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-container">
        <div className="hero-content">
          <p className="hero-badge">{hero.badge}</p>

          <h1 id="hero-title" className="hero-title">
            {hero.titleLead} <span>{hero.titleHighlight}</span>
          </h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <a href={downloadCta.href} className="button-primary">
              {downloadCta.label}
            </a>

            <a href={hero.secondaryCta.href} className="button-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
