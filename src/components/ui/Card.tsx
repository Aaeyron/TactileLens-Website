import Link from "next/link";
import type { ReactNode } from "react";
import CheckList from "./CheckList";
import Chip from "./Chip";
import Icon from "./Icon";

type CardProps = {
  title: string;
  children: ReactNode;
  /** Use "li" when the card is an item in a list of cards. */
  as?: "article" | "li" | "div";
  /** Large number in the card header, e.g. "01" (numbered lists). */
  number?: string;
  /** Small label in the card header, e.g. "Math" or "Offline". */
  chip?: string;
  /** Short points in a bulleted list. */
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
  number,
  chip,
  bullets,
  href,
  linkLabel,
}: CardProps) {
  return (
    <Tag className={`card ${href ? "card--link" : ""}`.trim()}>
      {(number || chip) && (
        <div className="card-top">
          {/* The number is visual; numbered card lists are <ol>, so screen readers count them. */}
          {number && (
            <span className="card-number" aria-hidden="true">
              {number}
            </span>
          )}
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
