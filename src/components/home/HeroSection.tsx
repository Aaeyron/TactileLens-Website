import { downloadCta, hero, heroBlocks } from "@/content/site";
import Button from "@/components/ui/Button";
import Screenshot from "@/components/ui/Screenshot";
import TextLink from "@/components/ui/TextLink";

/**
 * Editorial split hero: a very large headline on white (left) and a
 * full-bleed soft blue-gray panel with two angled phones (right). Two solid
 * color blocks overlap the bottom of the panel: navy (what the app does)
 * and brand blue (the download call to action, running to the right edge).
 * The headline has no button on wide screens; the blue block is the call to
 * action there. Phones get a Download button under the headline instead,
 * because the blocks sit further down on small screens.
 */
export default function HeroSection() {
  return (
    <section className="hero" data-tone="white" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="section-eyebrow">{hero.badge}</p>
        <h1 id="hero-title" className="hero-title">
          {hero.headline}
        </h1>
        <p className="hero-lead">{hero.lead}</p>
        <div className="hero-actions">
          <Button href={downloadCta.pageHref} variant="primary">
            {downloadCta.label}
          </Button>
          <TextLink href={hero.secondaryCta.href}>{hero.secondaryCta.label}</TextLink>
        </div>
        <ul className="hero-capabilities" role="list" aria-label="Product capabilities">
          {hero.trustBadges.map((badge) => <li key={badge.label}>{badge.label}</li>)}
        </ul>
      </div>

      <div className="hero-media">
        <div className="hero-phones">
          {/* TODO: screenshots — see screens.camera and screens.scanResult in site.ts */}
          <div className="hero-phone hero-phone--back">
            <Screenshot screen={hero.backScreen} frame caption={false} sizes="(min-width: 960px) 230px, 170px" />
          </div>
          <div className="hero-phone hero-phone--front">
            <Screenshot screen={hero.screen} frame caption={false} preload sizes="(min-width: 960px) 290px, 220px" />
          </div>
        </div>
      </div>

      <div className="hero-block hero-block--navy">
        <ul className="hero-features" role="list">
          {heroBlocks.features.map((feature) => (
            <li key={feature.title}>
              <h2 className="hero-block-title">{feature.title}</h2>
              <p className="hero-block-text">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-block hero-block--blue">
        <h2 className="hero-block-heading">{heroBlocks.download.title}</h2>
        <p className="hero-block-text">{heroBlocks.download.text}</p>
        <Button href={downloadCta.pageHref} variant="inverse" className="hero-block-button">
          {heroBlocks.download.buttonLabel}
        </Button>
      </div>
    </section>
  );
}
