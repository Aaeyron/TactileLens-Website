
import { downloadCta, hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/**
 * Homepage hero:
 * A clean introduction focused on accessible learning.
 */
export default function HeroSection() {
  return (
    <section
      className="landing-hero"
      data-tone="white"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="landing-hero-copy">
          <p className="landing-hero-eyebrow">
            <span className="landing-hero-eyebrow-line" aria-hidden="true" />
            For teachers. For accessible learning.
          </p>

          <h1 id="hero-title" className="landing-hero-title">
            {hero.headlinePrefix}{" "}
            <span>{hero.headlineHighlight}</span>
          </h1>

          <p className="landing-hero-lead">
            {hero.lead}
          </p>

          <div className="hero-actions">
            <Button href={downloadCta.pageHref}>
              {downloadCta.label}
            </Button>

            <span className="action-caption">
              Available for Android
            </span>
          </div>

          <div className="landing-hero-bottom">
            <span className="landing-hero-bottom-label">
              Making printed learning materials more accessible.
            </span>

            <span
              className="landing-hero-bottom-decoration"
              aria-hidden="true"
            >
              ⠞⠁⠉⠞⠊⠇⠑
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
