import BrailleT from "./BrailleT";

type LogoMarkProps = {
  /** "xs" in the phone mockup, "sm" navbar/footer, "lg" download card app icon. */
  size?: "xs" | "sm" | "md" | "lg";
};

/** Logo-blue rounded square with the braille "t" (⠞). Decorative. */
export default function LogoMark({ size = "sm" }: LogoMarkProps) {
  return (
    <span className={`logo-mark logo-mark--${size}`} aria-hidden="true">
      <BrailleT className="logo-mark-dots" />
    </span>
  );
}
