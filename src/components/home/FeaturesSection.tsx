import { features } from "@/content/site";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function FeaturesSection() {
  return (
    <Section
      id="features"
      tone="soft"
      eyebrow={features.eyebrow}
      title={features.title}
      description={features.description}
    >
      <ul className="card-grid" role="list">
        {features.items.map((feature) => (
          <Card as="li" accent key={feature.title} title={feature.title}>
            <p>{feature.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
