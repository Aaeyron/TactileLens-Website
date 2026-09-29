import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
};

/**
 * A link styled as a button. Every button on this site navigates
 * (to a section or a file), so it renders an <a>, not a <button>.
 */
export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    `button--${variant}`,
    size === "sm" ? "button--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <a className={classes} {...props} />;
}
