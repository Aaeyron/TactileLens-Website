import RichText from "./RichText";

type CheckListProps = {
  items: readonly string[];
};

/** A short bulleted list with small blue square bullets (drawn in CSS). */
export default function CheckList({ items }: CheckListProps) {
  return (
    <ul className="check-list" role="list">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}
