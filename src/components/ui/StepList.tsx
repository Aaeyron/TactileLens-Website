import { pad } from "@/lib/format";
import Screenshot, { type ScreenConfig } from "./Screenshot";

type Step = {
  title: string;
  description: string;
  /** Optional app screenshot shown above the step (flow variant). */
  screen?: ScreenConfig;
};

type StepListProps = {
  steps: readonly Step[];
  /**
   * - "flow": steps in a row, each under a framed screenshot (home page)
   * - "row": open steps in a row (How it works, install guide)
   * Both: large blue numbers joined by a thin line on wide screens, stacked
   * on mobile. No boxes.
   */
  variant?: "flow" | "row";
};

/** Numbered steps. Uses <ol> so screen readers announce the count and order. */
export default function StepList({ steps, variant = "row" }: StepListProps) {
  return (
    <ol className={`step-list step-list--${variant}`} role="list" data-reveal-group>
      {steps.map((step, index) => (
        <li className="step" key={step.title}>
          {variant === "flow" && step.screen && (
            <Screenshot screen={step.screen} frame sizes="11rem" />
          )}
          {/* Visual "01"; screen readers get "Step n:" in the heading instead. */}
          <div className="step-top" aria-hidden="true">
            <span className="item-number">{pad(index + 1)}</span>
          </div>

          <div className="step-content">
            <h3 className="item-title">
              <span className="visually-hidden">Step {index + 1}: </span>
              {step.title}
            </h3>
            <p className="step-description">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
