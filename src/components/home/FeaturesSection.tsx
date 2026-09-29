import { features } from "@/content/site";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="features-section"
      aria-labelledby="features-title"
    >
      <div className="home-container">
        <p className="section-eyebrow">{features.eyebrow}</p>

        <h2 id="features-title" className="section-title">
          {features.title}
        </h2>

        <p className="section-description">{features.description}</p>

        <ul className="features-grid" role="list">
          {features.items.map((feature) => (
            <li className="feature-card" key={feature.title}>
              <div className="feature-accent" aria-hidden="true" />

              <h3 className="feature-title">{feature.title}</h3>

              <p className="feature-description">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
