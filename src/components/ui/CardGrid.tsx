import Card from "./Card";

type CardGridProps = {
  items: { title: string; description: string; note?: string }[];
  /** Maximum columns on wide screens. */
  columns?: 2 | 3;
};

/** A responsive list of cards, e.g. features or audiences. */
export default function CardGrid({ items, columns = 2 }: CardGridProps) {
  return (
    <ul className={`card-grid card-grid--${columns}`} role="list">
      {items.map((item) => (
        <Card as="li" accent key={item.title} title={item.title}>
          <p>{item.description}</p>
          {item.note && <p className="card-note">{item.note}</p>}
        </Card>
      ))}
    </ul>
  );
}
