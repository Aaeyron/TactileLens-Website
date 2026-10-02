import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  /** Small supporting visual beside the header on wide screens. */
  aside?: ReactNode;
  children?: ReactNode;
};

export default function Section({
  id,
  title,
  eyebrow,
  description,
  aside,
  children,
}: SectionProps) {
  const titleId = `${id}-title`;

  const header = (
    <header className="section-header">
      <div className="section-heading-copy">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2 id={titleId} className="section-title">
          {title}
        </h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </header>
  );

  return (
    <section
      id={id}
      className="section"
      aria-labelledby={titleId}
      data-reveal
    >
      <Container>
        {aside ? (
          <div className="section-header-row">
            {header}
            <div className="section-aside">{aside}</div>
          </div>
        ) : (
          header
        )}

        {children}
      </Container>
    </section>
  );
}
