import { ArrowRight, Download } from "lucide-react";

/**
 * The only icons on the site — each one does a job:
 * - arrow-right: the arrow on "Learn more" links
 * - download: the Download for Android button
 * (The mobile menu button and the FAQ open/close indicator are drawn
 * without lucide.) Names were checked against the installed lucide-react.
 */
const icons = {
  "arrow-right": ArrowRight,
  download: Download,
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

/** A decorative icon. Always hidden from screen readers; put meaning in text. */
export default function Icon({ name, size = 24, className }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      size={size}
      className={className}
      strokeWidth={1.75}
      aria-hidden="true"
      focusable="false"
    />
  );
}
