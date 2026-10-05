import { ScanLine, Sigma } from "lucide-react";
import { downloadCta, hero, heroBlocks, homeSteps, screenPreview } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Screenshot from "@/components/ui/Screenshot";

const featureIcons = [ScanLine, Sigma];

/** A contained grey hero with an upright preview and a clear three-step flow. */
export default function HeroSection() {
  return (
    <section className="landing-hero" aria-labelledby="hero-title">
      <Container>
        <div className="landing-hero-shell">
          <div className="landing-hero-copy">
            <p className="section-eyebrow">{hero.badge}</p>
            <h1 id="hero-title" className="landing-hero-title">
              {hero.headlinePrefix} <span>{hero.headlineHighlight}</span>
            </h1>
            <p className="landing-hero-lead">{hero.lead}</p>
            <div className="hero-actions">
              <Button href={downloadCta.pageHref}>{downloadCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">{hero.secondaryCta.label}</Button>
            </div>
            <ul className="hero-capabilities" role="list" aria-label="Product capabilities">
              {hero.trustBadges.map((badge) => <li key={badge.label}>{badge.label}</li>)}
            </ul>
          </div>

          <div className="landing-hero-visual">
            <div className="landing-preview">
              <Screenshot screen={hero.screen} frame caption={false} preload sizes="224px" />
            </div>
            {!hero.screen.src && <p className="landing-preview-status">{screenPreview.pending}</p>}
            <ol className="landing-process" aria-label={homeSteps.eyebrow}>
              {homeSteps.steps.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {step.title}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="landing-overview">
          {heroBlocks.features.map((feature, index) => {
            const FeatureIcon = featureIcons[index];
            return (
              <div className="landing-overview-item" key={feature.title}>
                <span className="landing-overview-icon" aria-hidden="true">
                  {FeatureIcon && <FeatureIcon size={24} />}
                </span>
                <div>
                  <h2>{feature.title}</h2>
                  <p>{feature.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
