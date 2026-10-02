import Image from "next/image";
import { ctaBanner, downloadCta, logo } from "@/content/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/** "Ready to try TactileLens?" deep blue full-width band, centered. Ends every page except /download. */
export default function CtaBanner() {
  return (
    <section className="cta-band" data-tone="blue" aria-labelledby="cta-band-title" data-reveal>
      <Container className="cta-band-inner">
        <div className="cta-band-text">
          <div className="cta-band-heading">
            <Image
              className="cta-band-logo"
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes="2.25rem"
            />
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
