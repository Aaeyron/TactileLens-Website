import CheckList from "@/components/ui/CheckList";
import Chip from "@/components/ui/Chip";
import Screenshot, { type ScreenConfig } from "@/components/ui/Screenshot";

type Feature = {
  title: string;
  description: string;
  screen: ScreenConfig;
  chip?: string;
  bullets?: readonly string[];
  note?: string;
};

type FeatureRowsProps = {
  items: readonly Feature[];
};

/** Zig-zag rows: an app screenshot on one side, text on the other. */
export default function FeatureRows({ items }: FeatureRowsProps) {
  return (
    <ul className="feature-rows" role="list">
      {items.map((item) => (
        <li className="feature-row" key={item.title} data-reveal>
          <div className="feature-visual">
            <Screenshot screen={item.screen} sizes="15rem" />
          </div>
          <div className="feature-text">
            {item.chip && <Chip>{item.chip}</Chip>}
            <h3 className="card-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
            {item.bullets && <CheckList items={item.bullets} />}
            {item.note && <p className="card-note">{item.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
