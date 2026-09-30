import Chip from "./Chip";
import Icon, { type IconName } from "./Icon";
import IconTile from "./IconTile";

type Step = {
  title: string;
  description: string;
  icon?: IconName;
};

type StepListProps = {
  steps: readonly Step[];
  /**
   * - "flow": big icon circles in a row joined by a line (home page)
   * - "timeline": big number circles joined by a vertical line
   * - "cards": step cards with an icon and a "Step n" chip (install guide)
   */
  variant?: "flow" | "timeline" | "cards";
};

/** Numbered steps. Uses <ol> so screen readers announce the count and order. */
export default function StepList({ steps, variant = "cards" }: StepListProps) {
  return (
    <ol className={`step-list step-list--${variant}`} role="list">
      {steps.map((step, index) => {
        // Visual "Step n" chip; screen readers get "Step n:" in the heading instead.
        const chip = (
          <span aria-hidden="true">
            <Chip>Step {index + 1}</Chip>
          </span>
        );

        return (
          <li className="step" key={step.title}>
            {variant === "flow" && step.icon && <IconTile icon={step.icon} size="xl" tone="brand" round />}
            {variant === "timeline" && (
              <span className="step-number" aria-hidden="true">
                {index + 1}
              </span>
            )}

            <div className="step-content">
              {variant === "cards" && (
                <div className="card-top">
                  {step.icon && <IconTile icon={step.icon} />}
                  {chip}
                </div>
              )}
              {variant === "flow" && <div className="step-chip">{chip}</div>}
              <h3 className="card-title step-title">
                {variant === "timeline" && step.icon && <Icon name={step.icon} size={22} />}
                <span>
                  <span className="visually-hidden">Step {index + 1}: </span>
                  {step.title}
                </span>
              </h3>
              <p className="step-description">{step.description}</p>
            </div>

            {variant === "flow" && index < steps.length - 1 && (
              <span className="step-connector" aria-hidden="true">
                <Icon name="arrow-down" size={20} />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
