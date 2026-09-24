
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-container">
        <div className="hero-content">
          <span className="hero-badge">
            Accessible learning materials
          </span>

          <h1 className="hero-title">
            Make printed learning materials more accessible with{" "}
            <span>TactileLens.</span>
          </h1>

          <p className="hero-description">
            TactileLens helps teachers recognize printed English text and
            algebraic equations, review scanned content, and generate Braille
            output for learners who are blind or have low vision.
          </p>

          <div className="hero-actions">
            <Link href="/download" className="button-primary">
              Download for Android
            </Link>

            <Link href="/about" className="button-secondary">
              About TactileLens
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}