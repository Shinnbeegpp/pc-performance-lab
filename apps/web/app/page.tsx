import Link from "next/link";

export default function HomePage() {
  return (
    <section className="home">
      <div className="home-hero">
        <span className="home-badge">PC Performance Lab</span>

        <h1>Build, test, and understand your PC.</h1>

        <p>
          Create a PC configuration, estimate its performance, or analyze your
          current system and get upgrade recommendations.
        </p>
      </div>

      <div className="feature-grid">
        <Link href="/builder" className="feature-card">
          <div className="feature-card-content">
            <span className="feature-card-label">Build & Test</span>

            <h2>Build a virtual PC</h2>

            <p>
              Select your components, check compatibility, preview your system,
              and test its expected performance.
            </p>
          </div>

          <span className="feature-card-action">
            Start building →
          </span>
        </Link>

        <Link href="/rate-my-pc" className="feature-card">
          <div className="feature-card-content">
            <span className="feature-card-label">Rate My PC</span>

            <h2>Analyze your current setup</h2>

            <p>
              Enter your existing PC specifications, get a performance rating,
              identify weak components, and receive upgrade suggestions.
            </p>
          </div>

          <span className="feature-card-action">
            Rate your PC →
          </span>
        </Link>
      </div>
    </section>
  );
}