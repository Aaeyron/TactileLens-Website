import Icon from "./Icon";
import RichText from "./RichText";

type CheckListProps = {
  items: readonly string[];
};

/** A list with brand-blue check icons instead of plain bullets. */
export default function CheckList({ items }: CheckListProps) {
  return (
    <ul className="check-list" role="list">
      {items.map((item) => (
        <li key={item}>
          <span className="check-list-icon" aria-hidden="true">
            <Icon name="check" size={14} />
          </span>
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}
