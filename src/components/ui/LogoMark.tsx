import BrailleT from "./BrailleT";

type LogoMarkProps = {
  /** "lg" is the download card app icon. TODO: replace with the real logo. */
  size?: "sm" | "lg";
};

/** Logo-blue rounded square with the braille "t" (⠞). Decorative. */
export default function LogoMark({ size = "sm" }: LogoMarkProps) {
  return (
    <span className={`logo-mark logo-mark--${size}`} aria-hidden="true">
      <BrailleT className="logo-mark-dots" />
    </span>
  );
}
