type FaqCategory = {
  /** Anchor id for the category heading (used by "On this page"). */
  id: string;
  title: string;
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
        return (
          <section className="faq-group" key={category.id} aria-labelledby={category.id}>
            <h2 id={category.id} className="block-title">
              {category.title}
            </h2>
            <div className="faq-list">
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
