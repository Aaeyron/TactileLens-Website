type FaqListProps = {
  items: readonly { question: string; answer: string }[];
};

/** Native disclosure controls preserve keyboard and screen-reader support. */
export default function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary className="faq-question">
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <p className="faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
