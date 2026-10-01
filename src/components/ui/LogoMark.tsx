import BrailleT from "./BrailleT";

/** Logo-blue rounded square with the braille "t" (⠞). Decorative. */
export default function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <BrailleT className="logo-mark-dots" />
    </span>
  );
}
