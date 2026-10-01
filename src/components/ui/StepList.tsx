import Chip from "./Chip";

type Step = {
  title: string;
  description: string;
};

type StepListProps = {
  steps: readonly Step[];
  /**
   * - "flow": steps in a row with a number circle (home page)
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
          {/* Visual step number; screen readers get "Step n:" in the heading instead. */}
          {variant === "flow" ? (
            <span className="step-number" aria-hidden="true">
              {index + 1}
            </span>
          ) : (
            <div className="card-top" aria-hidden="true">
              <Chip>Step {index + 1}</Chip>
            </div>
          )}

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
