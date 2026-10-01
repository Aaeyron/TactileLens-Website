import { ctaBanner, downloadCta } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LogoMark from "@/components/ui/LogoMark";

/** Full-width solid blue "Ready to try TactileLens?" band. Ends every page except /download. */
export default function CtaBanner() {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title" data-reveal>
      <Container className="cta-band-inner">
        <div className="cta-band-text">
          <div className="cta-band-heading">
            <LogoMark />
            <h2 id="cta-band-title" className="cta-band-title">
              {ctaBanner.title}
            </h2>
          </div>
          <p className="cta-band-description">{ctaBanner.text}</p>
        </div>
        <Button href={downloadCta.pageHref} variant="inverse">
          {downloadCta.label}
        </Button>
      </Container>
    </section>
  );
}
