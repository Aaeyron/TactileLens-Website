import Image from "next/image";
import {
  downloadCta,
  hero,
  homeBeforeAfter,
  homeHighlights,
  homeSteps,
  homeWhy,
  sampleMath,
  seeItInAction,
} from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import EdSection from "@/components/ui/EdSection";
import ItemGrid from "@/components/ui/ItemGrid";
import Section from "@/components/ui/Section";
import StepList from "@/components/ui/StepList";
import TextLink from "@/components/ui/TextLink";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Highlights */}
      <Section id="highlights" eyebrow={homeHighlights.eyebrow} title={homeHighlights.title} description={homeHighlights.description}>
        <ItemGrid items={homeHighlights.items.map((item) => ({ title: item.title, description: item.description, bullets: item.bullets }))} columns={3} />
        <div className="section-footer"><TextLink href={homeHighlights.link.href}>{homeHighlights.link.label}</TextLink></div>
      </Section>

      {/* How It Works */}
      <Section id="what-it-does" tone="mist" eyebrow={homeSteps.eyebrow} title={homeSteps.title} description={homeSteps.description}>
        <StepList steps={homeSteps.steps} variant="row" />
      </Section>

      {/* See It in Action */}
      <EdSection
        id="see-it-in-action"
        tone="white"
        layout="side"
        eyebrow={seeItInAction.eyebrow}
        title={seeItInAction.title}
        description={seeItInAction.description}
      >
        <figure className="compare compare--large">
          <figcaption className="visually-hidden">{seeItInAction.srText}</figcaption>

          <div className="compare-panel" aria-hidden="true">
            <p className="compare-label">{seeItInAction.beforeLabel}</p>
            <p className="compare-printed">{sampleMath.printed}</p>
          </div>

          <div className="compare-panel" aria-hidden="true">
            <p className="compare-label">{seeItInAction.afterLabel}</p>
            <p className="braille-text compare-braille">{sampleMath.braille}</p>
          </div>
        </figure>
      </EdSection>

      {/* Why TactileLens */}
      <Section id="why" tone="mist" eyebrow={homeWhy.eyebrow} title={homeWhy.title} description={homeWhy.description}>
        <ItemGrid items={homeWhy.items} columns={3} />
      </Section>

      {/* Before & After */}
      <Section id="before-and-after" eyebrow={homeBeforeAfter.eyebrow} title={homeBeforeAfter.title} description={homeBeforeAfter.description}>
        <ItemGrid items={homeBeforeAfter.items} layout="split" />
      </Section>

      {/* Download CTA */}
      <CtaBanner />
    </>
  );
}
