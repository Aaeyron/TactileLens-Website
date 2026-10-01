type FactNumbersProps = {
  /** Accessible name for the list, e.g. "TactileLens at a glance". */
  label: string;
  /** Big value + short line. Confirmed or general facts only — never statistics. */
  items: readonly { value: string; text: string }[];
};

/** A row of large typographic facts separated by thin lines. */
export default function FactNumbers({ label, items }: FactNumbersProps) {
  return (
    <dl className="fact-numbers" aria-label={label} data-reveal-group>
      {items.map((item) => (
        <div className="fact-number" key={item.value}>
          <dt className="fact-number-value">{item.value}</dt>
          <dd className="fact-number-text">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
