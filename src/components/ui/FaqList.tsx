import type { IconName } from "./Icon";
import IconTile from "./IconTile";

type FaqCategory = {
  title: string;
  icon: IconName;
  items: readonly { question: string; answer: string }[];
};

type FaqListProps = {
  categories: readonly FaqCategory[];
};

/**
 * FAQ grouped by category. Each question is a native <details>/<summary>:
 * keyboard and screen reader support come from the browser, and it works
 * without JavaScript. Open/close is animated in CSS where supported.
 */
export default function FaqList({ categories }: FaqListProps) {
  return (
    <div className="faq-groups">
      {categories.map((category) => {
        const headingId = `faq-${category.title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
        return (
          <section className="faq-group" key={category.title} aria-labelledby={headingId}>
            <h2 id={headingId} className="faq-group-title">
              <IconTile icon={category.icon} />
              {category.title}
            </h2>
            <div className="faq-card">
              {category.items.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary className="faq-question">
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
