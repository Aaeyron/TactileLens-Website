import { pad } from "@/lib/format";
import CheckList from "@/components/ui/CheckList";
import Chip from "@/components/ui/Chip";
import Screenshot, { type ScreenConfig } from "@/components/ui/Screenshot";

type Feature = {
  /** Anchor id, used by the "On this page" links. */
  id: string;
  title: string;
  description: string;
  screen: ScreenConfig;
  chip?: string;
  bullets?: readonly string[];
  /** One line: how this feature helps teachers. */
  helps?: string;
  note?: string;
};

type FeatureRowsProps = {
  items: readonly Feature[];
};

/** Zig-zag rows: an app screenshot on one side, numbered text on the other. */
export default function FeatureRows({ items }: FeatureRowsProps) {
  return (
    <ol className="feature-rows" role="list">
      {items.map((item, index) => (
        <li className="feature-row" id={item.id} key={item.id} data-reveal>
          <div className="feature-visual">
            <Screenshot screen={item.screen} sizes="15rem" />
          </div>
          <div className="feature-text">
            <div className="card-top" aria-hidden="true">
              <span className="card-number">{pad(index + 1)}</span>
              {item.chip && <Chip>{item.chip}</Chip>}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
            {item.bullets && <CheckList items={item.bullets} />}
            {item.helps && (
              <p className="feature-helps">
                <span className="label">How it helps teachers</span>
                {item.helps}
              </p>
            )}
            {item.note && <p className="card-note">{item.note}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
