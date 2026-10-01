type InfoListProps = {
  items: readonly { label: string; value: string }[];
};

/** Label/value pairs, e.g. release info or the glossary. Uses a description list. */
export default function InfoList({ items }: InfoListProps) {
  return (
    <dl className="info-list">
      {items.map((item) => (
        <div className="info-row" key={item.label}>
          <dt className="info-label">{item.label}</dt>
          <dd className="info-value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
