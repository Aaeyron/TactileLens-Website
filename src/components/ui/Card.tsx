import Link from "next/link";
import type { ReactNode } from "react";
import CheckList from "./CheckList";
import Chip from "./Chip";
import Icon, { type IconName } from "./Icon";
import IconTile from "./IconTile";

type CardProps = {
  title: string;
  children: ReactNode;
  /** Use "li" when the card is an item in a list of cards. */
  as?: "article" | "li" | "div";
  /** Icon in a tinted tile above the title. */
  icon?: IconName;
  /** Small label next to the icon, e.g. "Math" or "Offline". */
  chip?: string;
  /** Up to three short points with check icons. */
  bullets?: readonly string[];
  /** Makes the whole card a link (via the title link) with a hover lift. */
  href?: string;
  /** Visual "Learn more →" text for linked cards (the title is the link name). */
  linkLabel?: string;
};

export default function Card({
  title,
  children,
  as: Tag = "div",
  icon,
  chip,
  bullets,
  href,
  linkLabel,
}: CardProps) {
  return (
    <Tag className={`card ${href ? "card--link" : ""}`.trim()}>
      {(icon || chip) && (
        <div className="card-top">
          {icon && <IconTile icon={icon} />}
          {chip && <Chip>{chip}</Chip>}
        </div>
      )}
      <h3 className="card-title">
        {href ? (
          // The title link stretches over the whole card (see .card-link::after),
          // so the card has one link with a clear name for screen readers.
          <Link href={href} className="card-link">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <div className="card-body">
        {children}
        {bullets && bullets.length > 0 && <CheckList items={bullets} />}
      </div>
      {href && linkLabel && (
        <p className="card-more" aria-hidden="true">
          {linkLabel}
          <Icon name="arrow-right" size={18} />
        </p>
      )}
    </Tag>
  );
}
