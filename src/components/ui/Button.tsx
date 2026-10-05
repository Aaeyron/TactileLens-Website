import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import Icon, { type IconName } from "./Icon";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  /** "inverse" is the white button for deep blue areas. */
  variant?: "primary" | "secondary" | "inverse";
  size?: "md" | "sm";
  icon?: IconName;
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
  icon = "download",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    "button--icon",
    `button--${variant}`,
    size === "sm" ? "button--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isInternalPage = href.startsWith("/") && !href.startsWith("//") && !props.download;
  const label = props["aria-label"] ?? (typeof children === "string" ? children : undefined);
  const content = <><Icon name={icon} size={22} /><span className="visually-hidden">{children}</span></>;

  if (isInternalPage) {
    return <Link href={href} className={classes} title={label} {...props}>{content}</Link>;
  }

  return <a href={href} className={classes} title={label} {...props}>{content}</a>;
}
