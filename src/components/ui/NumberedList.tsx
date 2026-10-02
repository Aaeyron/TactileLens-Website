import { pad } from "@/lib/format";

type NumberedItem = {
  /** Optional heading for the item. */
  title?: string;
  /** Optional body text. */
  text?: string;
  /** Optional small uppercase line above the title, e.g. a date. */
  meta?: string;
};

type NumberedListProps = {
  items: readonly NumberedItem[];
};

/**
 * A numbered list with large "01" numbers and thin dividers
 * (objectives, timeline). Uses <ol>, so screen readers count the items.
 */
export default function NumberedList({ items }: NumberedListProps) {
  return (
    <ol className="numbered-list" role="list" data-reveal-group>
      {items.map((item, index) => (
        <li className="numbered-item" key={`${item.title ?? item.text}-${index}`}>
          <span className="item-number" aria-hidden="true">
            {pad(index + 1)}
          </span>
          <div>
            {item.meta && <p className="label numbered-meta">{item.meta}</p>}
            {item.title && <h3 className="item-title">{item.title}</h3>}
            {item.text && <p className="numbered-text">{item.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
