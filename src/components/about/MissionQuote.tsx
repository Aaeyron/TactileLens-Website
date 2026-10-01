type MissionQuoteProps = {
  quote: string;
  attribution: string;
};

/** Highlighted mission statement. */
export default function MissionQuote({ quote, attribution }: MissionQuoteProps) {
  return (
    <figure className="mission">
      <blockquote className="mission-quote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mission-attribution">— {attribution}</figcaption>
    </figure>
  );
}
