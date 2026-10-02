import Link from "next/link";
import type { ReactNode } from "react";
import CheckList from "./CheckList";
import Chip from "./Chip";
import Icon from "./Icon";

type ItemProps = {
  title: string;
  children: ReactNode;
  /** Use "li" when the item is part of a list. */
  as?: "article" | "li" | "div";
  /** Large blue number above the heading, e.g. "01" (numbered lists). */
  number?: string;
  /** Small blue label above the heading, e.g. "Math" or "Offline". */
  chip?: string;
  /** Short points in a bulleted list. */
  bullets?: readonly string[];
  /** Makes the whole item a link (via the title link). */
  href?: string;
  /** Visual "Learn more →" text for linked items (the title is the link name). */
  linkLabel?: string;
};

/**
 * One open item: no box, just a thin top line, a blue number or label,
 * a heading and a short description sitting directly on the page.
 */
export default function Item({
  title,
  children,
  as: Tag = "div",
  number,
  chip,
  bullets,
  href,
  linkLabel,
}: ItemProps) {
  return (
    <Tag className={`item ${href ? "item--link" : ""}`.trim()}>
      {(number || chip) && (
        <div className="item-top">
          {/* The number is visual; numbered lists are <ol>, so screen readers count them. */}
          {number && (
            <span className="item-number" aria-hidden="true">
              {number}
            </span>
          )}
          {chip && <Chip>{chip}</Chip>}
        </div>
      )}
      <h3 className="item-title">
        {href ? (
          // The title link stretches over the whole item (see .item-link::after),
          // so the item has one link with a clear name for screen readers.
          <Link href={href} className="item-link">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <div className="item-body">
        {children}
        {bullets && bullets.length > 0 && <CheckList items={bullets} />}
      </div>
      {href && linkLabel && (
        <p className="item-more" aria-hidden="true">
          {linkLabel}
          <Icon name="arrow-right" size={18} />
        </p>
      )}
    </Tag>
  );
}
