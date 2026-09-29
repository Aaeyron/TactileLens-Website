type Step = {
  title: string;
  description: string;
};

type StepListProps = {
  steps: Step[];
  /** "grid" for short steps side by side, "stack" for longer instructions. */
  layout?: "grid" | "stack";
};

/** Numbered steps. Uses <ol> so screen readers announce the count and order. */
export default function StepList({ steps, layout = "grid" }: StepListProps) {
  return (
    <ol className={`step-list ${layout === "stack" ? "step-list--stack" : ""}`.trim()} role="list">
      {steps.map((step, index) => (
        <li className="step" key={step.title}>
          <span className="step-number" aria-hidden="true">
            {index + 1}
          </span>
          <div>
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
