import { pad } from "@/lib/format";
import Item from "./Item";
import RichText from "./RichText";

type ItemGridItem = {
  title: string;
  description?: string;
  note?: string;
  chip?: string;
  bullets?: readonly string[];
  href?: string;
};

type ItemGridProps = {
  items: readonly ItemGridItem[];
  /** Maximum columns on wide screens. */
  columns?: 2 | 3 | 4;
  /** Number the items "01", "02", … (renders an ordered list). */
  numbered?: boolean;
  /** "Learn more" text for linked items. */
  linkLabel?: string;
  /**
   * - "columns": open columns, each item under a thin top line
   * - "split": two columns divided by one thin vertical line (comparisons)
   */
  layout?: "columns" | "split";
};

/** Open items in columns: the one list pattern used on every page (no boxes). */
export default function ItemGrid({
  items,
  columns = 2,
  numbered = false,
  linkLabel,
  layout = "columns",
}: ItemGridProps) {
  const List = numbered ? "ol" : "ul";
  const classes = layout === "split" ? "item-grid item-grid--split" : `item-grid item-grid--${columns}`;

  return (
    <List className={classes} role="list" data-reveal-group>
      {items.map((item, index) => (
        <Item
          as="li"
          key={item.title}
          title={item.title}
          number={numbered ? pad(index + 1) : undefined}
          chip={item.chip}
          bullets={item.bullets}
          href={item.href}
          linkLabel={linkLabel}
        >
          {item.description && (
            <p>
              <RichText text={item.description} />
            </p>
          )}
          {item.note && <p className="item-note">{item.note}</p>}
        </Item>
      ))}
    </List>
  );
}
