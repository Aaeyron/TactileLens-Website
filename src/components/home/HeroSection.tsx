
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
      <span className="mb-5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">
        Accessible learning materials
      </span>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Make printed learning materials more accessible with{" "}
        <span className="text-blue-700">TactileLens.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        TactileLens helps teachers recognize printed English text and algebraic
        equations, review scanned content, and convert it into Braille for
        learners who are blind or have low vision.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          href="/download"
          className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Download for Android
        </Link>

        <Link
          href="/about"
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          About TactileLens
        </Link>
      </div>
    </section>
  );
}