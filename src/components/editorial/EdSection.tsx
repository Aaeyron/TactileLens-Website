import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

export type EdTone = "white" | "soft" | "navy";

type EdSectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  /** Full-width band: white for most content, soft blue-gray or navy for key moments. */
  tone?: EdTone;
  /**
   * - "stack": big headline above the content
   * - "side": big headline on the left, content on the right (wide screens)
   */
  layout?: "stack" | "side";
  children?: ReactNode;
};

/** Editorial section: a big, bold, left-aligned headline, short text, lots of space. */
export default function EdSection({
  id,
  title,
  eyebrow,
  description,
  tone = "white",
  layout = "stack",
  children,
}: EdSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className="ed-section" data-tone={tone} aria-labelledby={titleId} data-reveal>
      <Container className={`ed-layout ed-layout--${layout}`}>
        <header className="ed-header">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 id={titleId} className="ed-title">
            {title}
          </h2>
          {description && <p className="ed-lead">{description}</p>}
        </header>
        <div className="ed-body">{children}</div>
      </Container>
    </section>
  );
}
