import CheckList from "@/components/ui/CheckList";
import Chip from "@/components/ui/Chip";
import Icon, { type IconName } from "@/components/ui/Icon";

type Feature = {
  title: string;
  description: string;
  icon: IconName;
  secondaryIcon?: IconName;
  chip?: string;
  bullets?: readonly string[];
  note?: string;
};

type FeatureRowsProps = {
  items: readonly Feature[];
};

/** Zig-zag rows: a large icon illustration on one side, text on the other. */
export default function FeatureRows({ items }: FeatureRowsProps) {
  return (
    <ul className="feature-rows" role="list">
      {items.map((item) => (
        <li className="feature-row" key={item.title} data-reveal>
          <div className="feature-visual" aria-hidden="true">
            <span className="feature-visual-icon">
              <Icon name={item.icon} size={56} />
            </span>
            {item.secondaryIcon && (
              <span className="feature-visual-icon feature-visual-icon--secondary">
                <Icon name={item.secondaryIcon} size={40} />
              </span>
            )}
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
