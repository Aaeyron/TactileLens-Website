import type { ReactNode } from "react";
import Container from "./Container";
import type { IconName } from "./Icon";
import IconTile from "./IconTile";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro: string;
  /** Large decorative icon for the page. */
  icon?: IconName;
  /** Optional actions below the intro, e.g. buttons. */
  children?: ReactNode;
};

/** The top of every inner page. Holds the page's only <h1>. */
export default function PageHeader({ eyebrow, title, intro, icon, children }: PageHeaderProps) {
  return (
    <section className="page-header" aria-labelledby="page-title">
      <Container className="page-header-grid">
        <div className="page-header-content">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 id="page-title" className="page-title">
            {title}
          </h1>
          <p className="page-intro">{intro}</p>
          {children && <div className="page-header-actions">{children}</div>}
        </div>
        {icon && (
          <div className="page-header-visual">
            <IconTile icon={icon} size="xl" />
          </div>
        )}
      </Container>
    </section>
  );
}
