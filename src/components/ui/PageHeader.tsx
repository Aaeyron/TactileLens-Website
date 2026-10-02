import type { ReactNode } from "react";
import Container from "./Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro: string;
  /** Optional actions below the intro, e.g. buttons. */
  children?: ReactNode;
};

/** The solid blue top of every inner page. Holds the page's only <h1>. */
export default function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <section className="page-header" data-tone="white" aria-labelledby="page-title">
      <Container>
        <div className="page-header-content">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 id="page-title" className="page-title">
            {title}
          </h1>
          <p className="page-intro">{intro}</p>
          {children && <div className="page-header-actions">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
