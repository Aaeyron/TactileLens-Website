import type { ReactNode } from "react";
import RichText from "./RichText";

type CalloutVariant = "tip" | "note" | "fact";

const labels: Record<CalloutVariant, string> = {
  tip: "Tip",
  note: "Note",
  fact: "Did you know?",
};

type CalloutProps = {
  variant: CalloutVariant;
  text: string;
  /** Optional extra content under the text, e.g. a link. */
  children?: ReactNode;
};

/** "Tip", "Note" or "Did you know?" box: white with a blue left border. */
export default function Callout({ variant, text, children }: CalloutProps) {
  return (
    <div className="callout" role="note">
      <p className="callout-label">{labels[variant]}</p>
      <p className="callout-text">
        <RichText text={text} />
      </p>
      {children}
    </div>
  );
}
