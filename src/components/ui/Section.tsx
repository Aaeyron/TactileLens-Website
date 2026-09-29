import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  /** "soft" uses the tinted surface color, for alternating sections. */
  tone?: "default" | "soft";
  children?: ReactNode;
};

export default function Section({
  id,
  title,
  eyebrow,
  description,
  tone = "default",
  children,
}: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className={`section ${tone === "soft" ? "section--soft" : ""}`.trim()}
      aria-labelledby={titleId}
    >
      <Container>
        <header className="section-header">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 id={titleId} className="section-title">
            {title}
          </h2>
          {description && <p className="section-description">{description}</p>}
        </header>

        {children}
      </Container>
    </section>
  );
}
