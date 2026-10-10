import Image from "next/image";
import type { ReactNode } from "react";
import {
  Calculator,
  Camera,
  FileText,
  Grid3X3,
  ScanLine,
  ScanText,
  type LucideIcon,
} from "lucide-react";
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
import CheckList from "@/components/ui/CheckList";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import ItemGrid from "@/components/ui/ItemGrid";
import RichText from "@/components/ui/RichText";
import Section from "@/components/ui/Section";
import TextLink from "@/components/ui/TextLink";
import "./home.css";

const highlightIcons = {
  Text: FileText,
  Math: Calculator,
  Offline: ScanLine,
};

const stepPreviews = [
  {
    label: "Scan Screen",
    description: "Capture printed learning materials",
    icon: Camera,
  },
  {
    label: "Recognition Results",
    description: "View recognized text and algebraic expressions",
    icon: ScanText,
  },
  {
    label: "Braille Output",
    description: "Accessible Braille and Nemeth translation",
    icon: Grid3X3,
  },
] as const;

type AppPreviewProps = {
  label: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

function AppPreview({ label, description, icon: PreviewIcon, className = "" }: AppPreviewProps) {
  return (
    <figure className={`app-preview ${className}`.trim()}>
      <div className="app-preview-frame">
        <div className="app-preview-screen" role="img" aria-label={`${label} screenshot placeholder`}>
          <div className="app-preview-marker" aria-hidden="true">
            <PreviewIcon size={24} strokeWidth={1.6} />
            <span>Screenshot placeholder</span>
          </div>
        </div>
      </div>
      <figcaption className="app-preview-caption">
        <strong>{label}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
}

type EditorialSectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  tone?: "white" | "soft" | "navy";
  layout?: "stack" | "side";
  children?: ReactNode;
};

function EditorialSection({
  id,
  title,
  eyebrow,
  description,
  tone = "white",
  layout = "stack",
  children,
}: EditorialSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className="ed-section" data-tone={tone} aria-labelledby={titleId} data-reveal>
      <Container className={`ed-layout ed-layout--${layout}`}>
        <header className="ed-header">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 id={titleId} className="ed-title">{title}</h2>
          {description && <p className="ed-lead">{description}</p>}
        </header>
        <div className="ed-body">{children}</div>
      </Container>
    </section>
  );
}

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
        <div className="highlights-sequence" data-reveal-group>
          {homeHighlights.items.map((item, index) => {
            const HighlightIcon = highlightIcons[item.chip];
            const num = String(index + 1).padStart(2, "0");

            return (
              <article className="highlights-block" key={item.title}>
                <div className="highlights-anchor">
                  <span className="highlights-num" aria-hidden="true">{num}</span>
                  <span className="highlights-icon" aria-hidden="true">
                    <HighlightIcon size={20} strokeWidth={1.75} />
                  </span>
                </div>
                <div className="highlights-content">
                  <p className="highlights-chip">{item.chip}</p>
                  <h3 className="highlights-title">{item.title}</h3>
                  <p className="highlights-desc"><RichText text={item.description} /></p>
                  <CheckList items={item.bullets} />
                </div>
              </article>
            );
          })}
        </div>
        <div className="section-footer highlights-footer">
          <TextLink href={homeHighlights.link.href}>{homeHighlights.link.label}</TextLink>
          <span className="highlights-link-arrow" aria-hidden="true">→</span>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="what-it-does" eyebrow={homeSteps.eyebrow} title={homeSteps.title} description={homeSteps.description}>
        <ol className="home-steps" role="list" data-reveal-group>
          {homeSteps.steps.map((step, index) => {
            const preview = stepPreviews[index];

            return (
              <li className="home-step" key={step.title}>
                <AppPreview {...preview} />
                <div className="home-step-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="home-step-content">
                  <h3 className="item-title">
                    <span className="visually-hidden">Step {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* See It in Action */}
      <EditorialSection
        id="see-it-in-action"
        tone="soft"
        layout="stack"
        eyebrow={seeItInAction.eyebrow}
        title={seeItInAction.title}
        description={seeItInAction.description}
      >
        <div className="action-demo">
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
          <AppPreview
            className="app-preview--supporting"
            label="Braille Output"
            description="Accessible Braille and Nemeth translation"
            icon={Grid3X3}
          />
        </div>
      </EditorialSection>

      {/* Why TactileLens */}
      <Section id="why" tone="mist" eyebrow={homeWhy.eyebrow} title={homeWhy.title} description={homeWhy.description}>
        <ItemGrid items={homeWhy.items} columns={3} />
      </Section>

      {/* Before & After */}
      <Section id="before-and-after" eyebrow={homeBeforeAfter.eyebrow} title={homeBeforeAfter.title} description={homeBeforeAfter.description}>
        <ItemGrid items={homeBeforeAfter.items} layout="split" />
      </Section>

      {/* Download CTA */}
      <div className="home-cta">
        <CtaBanner />
      </div>
    </>
  );
}
