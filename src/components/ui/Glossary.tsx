import IconTile from "./IconTile";

type GlossaryProps = {
  items: readonly { term: string; definition: string }[];
};

/** Plain-language definitions in a card. */
export default function Glossary({ items }: GlossaryProps) {
  return (
    <div className="glossary">
      <IconTile icon="book-a" />
      <dl className="glossary-list">
        {items.map((item) => (
          <div className="glossary-row" key={item.term}>
            <dt className="glossary-term">{item.term}</dt>
            <dd className="glossary-definition">{item.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
