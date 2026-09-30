import type { IconName } from "./Icon";
import IconTile from "./IconTile";

type FactStripProps = {
  /** Accessible name for the list, e.g. "TactileLens at a glance". */
  label: string;
  items: readonly { icon: IconName; title: string; text: string }[];
};

/** A row of short fact cards. Confirmed facts only; never statistics. */
export default function FactStrip({ label, items }: FactStripProps) {
  return (
    <ul className="fact-strip" role="list" aria-label={label}>
      {items.map((item) => (
        <li className="fact" key={item.title}>
          <IconTile icon={item.icon} />
          <div>
            <p className="fact-title">{item.title}</p>
            <p className="fact-text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
