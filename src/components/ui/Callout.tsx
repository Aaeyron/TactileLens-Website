import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import RichText from "./RichText";

type CalloutVariant = "tip" | "note" | "fact";

const variants: Record<CalloutVariant, { icon: IconName; label: string }> = {
  tip: { icon: "lightbulb", label: "Tip" },
  note: { icon: "info", label: "Note" },
  fact: { icon: "sparkles", label: "Did you know?" },
};

type CalloutProps = {
  variant: CalloutVariant;
  text: string;
  /** Optional extra content under the text, e.g. a link. */
  children?: ReactNode;
};

/** "Tip", "Note" or "Did you know?" box: pale navy tint, left border, icon. */
export default function Callout({ variant, text, children }: CalloutProps) {
  const { icon, label } = variants[variant];

  return (
    <div className="callout" role="note">
      <span className="callout-icon" aria-hidden="true">
        <Icon name={icon} size={20} />
      </span>
      <div>
        <p className="callout-label">{label}</p>
        <p className="callout-text">
          <RichText text={text} />
        </p>
        {children}
      </div>
    </div>
  );
}
