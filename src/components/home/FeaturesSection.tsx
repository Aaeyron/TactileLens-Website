
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
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            What TactileLens offers
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Tools to help teachers prepare printed learning materials in a
            more accessible format.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}