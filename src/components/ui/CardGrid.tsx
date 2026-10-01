import { pad } from "@/lib/format";
import Card from "./Card";
import RichText from "./RichText";

type CardGridItem = {
  title: string;
  description?: string;
  note?: string;
  chip?: string;
  bullets?: readonly string[];
  href?: string;
};

type CardGridProps = {
  items: readonly CardGridItem[];
  /** Maximum columns on wide screens. */
  columns?: 2 | 3 | 4;
  /** Number the cards "01", "02", … (renders an ordered list). */
  numbered?: boolean;
  /** "Learn more" text for linked cards. */
  linkLabel?: string;
};

/** A responsive list of cards: the one card pattern used on every page. */
export default function CardGrid({ items, columns = 2, numbered = false, linkLabel }: CardGridProps) {
  const List = numbered ? "ol" : "ul";

  return (
    <List className={`card-grid card-grid--${columns}`} role="list">
      {items.map((item, index) => (
        <Card
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
          {item.note && <p className="card-note">{item.note}</p>}
        </Card>
      ))}
    </List>
  );
}
