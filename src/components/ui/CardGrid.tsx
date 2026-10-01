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
  /** "Learn more" text for linked cards. */
  linkLabel?: string;
};

/** A responsive list of cards: the one card pattern used on every page. */
export default function CardGrid({ items, columns = 2, linkLabel }: CardGridProps) {
  return (
    <ul className={`card-grid card-grid--${columns}`} role="list">
      {items.map((item) => (
        <Card
          as="li"
          key={item.title}
          title={item.title}
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
    </ul>
  );
}
