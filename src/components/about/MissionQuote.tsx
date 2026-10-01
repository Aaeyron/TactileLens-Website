type MissionQuoteProps = {
  quote: string;
  attribution: string;
};

/** Large pull-quote for the mission statement (white text on the solid blue band). */
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
