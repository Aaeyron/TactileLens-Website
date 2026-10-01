import BrailleT from "./BrailleT";

type LogoMarkProps = {
  /** "sm" navbar, "md" medium, "lg" download card app icon. */
  size?: "sm" | "md" | "lg";
};

/** Logo-blue rounded square with the braille "t" (⠞). Decorative. */
export default function LogoMark({ size = "sm" }: LogoMarkProps) {
  return (
    <span className={`logo-mark logo-mark--${size}`} aria-hidden="true">
      <BrailleT className="logo-mark-dots" />
    </span>
  );
}
