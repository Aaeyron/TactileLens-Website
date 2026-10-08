
import Image from "next/image";
import { downloadCta, hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section
      className="landing-hero"
      data-tone="white"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="landing-hero-layout">
          {/* LEFT — Hero introduction */}
          <div className="landing-hero-copy">
            <p className="landing-hero-eyebrow">
              <span
                className="landing-hero-eyebrow-line"
                aria-hidden="true"
              />
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
                Explore the Android app
              </span>
            </div>

            <div className="landing-hero-bottom">
              <span className="landing-hero-bottom-label">
                Making printed learning materials more accessible.
              </span>
            </div>
          </div>

          
            {/* RIGHT — TactileLens app showcase */}
            <div className="landing-hero-visual">
              <div className="landing-hero-showcase">

                {/* Decorative background */}
                <div
                  className="landing-hero-showcase-circle"
                  aria-hidden="true"
                />

                <div
                  className="landing-hero-showcase-dots"
                  aria-hidden="true"
                />

                {/* Actual TactileLens app image */}
                <div className="landing-hero-image-wrapper">
                  <Image
                    src="/homescreen.png"
                    alt="A hand holding a smartphone displaying the TactileLens app home screen, including Quick Scan, Materials, and History."
                    width={1148}
                    height={1370}
                    priority
                    sizes="(max-width: 639px) 90vw, (max-width: 959px) 440px, 45vw"
                    className="landing-hero-image"
                  />
                </div>

                {/* Showcase caption */}
                <div className="landing-hero-showcase-caption">
                  <span className="landing-hero-showcase-caption-line" />
                  <span>TactileLens Android Application</span>
                </div>

              </div>
            </div>

        </div>
      </Container>
    </section>
  );
}
