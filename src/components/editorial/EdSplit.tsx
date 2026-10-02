import type { ReactNode } from "react";

type EdSplitProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  /** The large image side, e.g. a phone. Sits on a full-bleed soft panel. */
  media: ReactNode;
  /** Which side the media panel is on (it runs to that edge of the screen). */
  mediaSide?: "left" | "right";
  children?: ReactNode;
};

/**
 * Asymmetric split: text on one side (aligned to the 1120px content width),
 * a large image on a soft blue-gray panel on the other, running to the screen
 * edge. Stacks on tablets and phones: text first, then the panel full width.
 */
export default function EdSplit({ id, title, eyebrow, description, media, mediaSide = "right", children }: EdSplitProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className={`ed-split ed-split--media-${mediaSide}`}
      data-tone="white"
      aria-labelledby={titleId}
      data-reveal
    >
      <div className="ed-split-text">
        <header className="ed-header">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 id={titleId} className="ed-title">
            {title}
          </h2>
          {description && <p className="ed-lead">{description}</p>}
        </header>
        {children}
      </div>
      <div className="ed-split-media">{media}</div>
    </section>
  );
}
