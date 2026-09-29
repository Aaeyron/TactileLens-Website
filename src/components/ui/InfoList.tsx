import Icon, { type IconName } from "./Icon";

type InfoListProps = {
  items: readonly { label: string; value: string; icon?: IconName }[];
};

/** Label/value pairs, e.g. release info. Uses a description list. */
export default function InfoList({ items }: InfoListProps) {
  return (
    <dl className="info-list">
      {items.map((item) => (
        <div className="info-row" key={item.label}>
          <dt className="info-label">
            {item.icon && <Icon name={item.icon} size={20} className="info-icon" />}
            {item.label}
          </dt>
          <dd className="info-value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
