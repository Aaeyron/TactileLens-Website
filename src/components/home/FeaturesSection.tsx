
const features = [
  {
    title: "Printed Text Recognition",
    description:
      "Recognize printed English text from uploaded or captured learning materials.",
  },
  {
    title: "Algebra Recognition",
    description:
      "Recognize algebraic equations and mathematical notation in printed materials.",
  },
  {
    title: "Content Preview",
    description:
      "Review recognized text and mathematical expressions in a readable document view.",
  },
  {
    title: "Braille Translation",
    description:
      "Generate Braille output from recognized content for review and accessible use.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="home-container">
        <span className="section-eyebrow">Key features</span>

        <h2 className="section-title">
          What TactileLens offers
        </h2>

        <p className="section-description">
          Tools to help teachers prepare printed learning materials in a
          more accessible format.
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-accent" aria-hidden="true" />

              <h3 className="feature-title">
                {feature.title}
              </h3>

              <p className="feature-description">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}   