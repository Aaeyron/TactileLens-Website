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
   * - "cards": numbered step cards (How it works, install guide)
   */
  variant?: "flow" | "cards";
};

/** Numbered steps. Uses <ol> so screen readers announce the count and order. */
export default function StepList({ steps, variant = "cards" }: StepListProps) {
  return (
    <ol className={`step-list step-list--${variant}`} role="list">
      {steps.map((step, index) => (
        <li className="step" key={step.title}>
          {variant === "flow" && step.screen && (
            <Screenshot screen={step.screen} frame sizes="11rem" />
          )}
          {/* Visual "STEP 01"; screen readers get "Step n:" in the heading instead. */}
          <div className="card-top step-top" aria-hidden="true">
            <span className="card-number">{pad(index + 1)}</span>
            <span className="label">Step</span>
          </div>

          <div className="step-content">
            <h3 className="card-title">
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
