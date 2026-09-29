/** Three evenly spaced decorative dots (not a braille cell). */
export default function DotDivider() {
  return (
    <span className="dot-divider" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}
