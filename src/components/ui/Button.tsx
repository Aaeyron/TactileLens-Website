import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
};

/**
 * A link styled as a button. Every button on this site navigates
 * (to a page or a file), so it renders a link, not a <button>.
 * Internal pages use next/link; files and external URLs use a plain <a>.
 */
export default function Button({
  href,
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

  const isInternalPage = href.startsWith("/") && !href.startsWith("//") && !props.download;

  if (isInternalPage) {
    return <Link href={href} className={classes} {...props} />;
  }

  return <a href={href} className={classes} {...props} />;
}
