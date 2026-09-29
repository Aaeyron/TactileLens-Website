import Card from "./Card";
import type { IconName } from "./Icon";

type CardGridItem = {
  title: string;
  description: string;
  note?: string;
  icon?: IconName;
  href?: string;
};

type CardGridProps = {
  items: readonly CardGridItem[];
  /** Maximum columns on wide screens. */
  columns?: 2 | 3;
  /** "Learn more" text for linked cards. */
  linkLabel?: string;
};

/** A responsive list of cards, e.g. highlights or audiences. */
export default function CardGrid({ items, columns = 2, linkLabel }: CardGridProps) {
  return (
    <ul className={`card-grid card-grid--${columns}`} role="list">
      {items.map((item) => (
        <Card
          as="li"
          key={item.title}
          title={item.title}
          icon={item.icon}
          href={item.href}
          linkLabel={linkLabel}
        >
          <p>{item.description}</p>
          {item.note && <p className="card-note">{item.note}</p>}
        </Card>
      ))}
    </ul>
  );
}
