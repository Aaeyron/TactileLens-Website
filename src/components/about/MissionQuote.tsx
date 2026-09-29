import Icon from "@/components/ui/Icon";

type MissionQuoteProps = {
  quote: string;
  attribution: string;
};

/** Highlighted mission statement. */
export default function MissionQuote({ quote, attribution }: MissionQuoteProps) {
  return (
    <figure className="mission">
      <span className="mission-icon" aria-hidden="true">
        <Icon name="quote" size={32} />
      </span>
      <blockquote className="mission-quote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mission-attribution">— {attribution}</figcaption>
    </figure>
  );
}
