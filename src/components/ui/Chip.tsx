import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

type ChipProps = {
  children: ReactNode;
  icon?: IconName;
};

/** A small pill label, e.g. "Math", "Offline", "Step 2". */
export default function Chip({ children, icon }: ChipProps) {
  return (
    <span className="chip">
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}
