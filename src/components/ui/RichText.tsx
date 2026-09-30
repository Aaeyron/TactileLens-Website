type RichTextProps = {
  text: string;
};

/**
 * Renders content text from site.ts, turning **key term** into a highlighted
 * <strong>. No other markup is supported, so content never injects HTML.
 */
export default function RichText({ text }: RichTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong className="term" key={index}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
