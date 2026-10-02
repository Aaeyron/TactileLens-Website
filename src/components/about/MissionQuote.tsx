type MissionQuoteProps = {
  quote: string;
  attribution: string;
};

/** Large pull-quote for the mission statement, beside a thin blue line. */
export default function MissionQuote({ quote, attribution }: MissionQuoteProps) {
  return (
    <figure className="pull-quote">
      <blockquote className="pull-quote-text">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="pull-quote-attribution">— {attribution}</figcaption>
    </figure>
  );
}
