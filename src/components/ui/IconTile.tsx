import Icon, { type IconName } from "./Icon";

type IconTileProps = {
  icon: IconName;
  /** Both use the pale blue tile; "accent" has a primaryDark icon, "brand" a primary icon. */
  tone?: "accent" | "brand";
  size?: "md" | "lg" | "xl";
  /** Circle instead of rounded square. */
  round?: boolean;
};

const iconSizes = { md: 24, lg: 32, xl: 48 };

/** An icon in a soft tinted tile. Decorative. */
export default function IconTile({ icon, tone = "accent", size = "md", round = false }: IconTileProps) {
  const classes = ["icon-tile", `icon-tile--${tone}`, `icon-tile--${size}`, round ? "icon-tile--round" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} aria-hidden="true">
      <Icon name={icon} size={iconSizes[size]} />
    </span>
  );
}
