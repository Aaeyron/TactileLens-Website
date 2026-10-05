import { downloadCta, hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/** A single, text-first introduction; the next topic starts on a grey section. */
export default function HeroSection() {
  return (
    <section className="landing-hero" data-tone="white" aria-labelledby="hero-title">
      <Container>
        <div className="landing-hero-copy">
          <p className="section-eyebrow">For teachers. For accessible learning.</p>
          <h1 id="hero-title" className="landing-hero-title">
            {hero.headlinePrefix} <span>{hero.headlineHighlight}</span>
          </h1>
          <p className="landing-hero-lead">{hero.lead}</p>
          <div className="hero-actions">
            <Button href={downloadCta.pageHref}>{downloadCta.label}</Button>
            <span className="action-caption">Explore the Android app</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
