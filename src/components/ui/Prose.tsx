type ProseProps = {
  paragraphs: string[];
};

/** Plain paragraphs of running text, kept to a readable line length. */
export default function Prose({ paragraphs }: ProseProps) {
  return (
    <div className="prose">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
