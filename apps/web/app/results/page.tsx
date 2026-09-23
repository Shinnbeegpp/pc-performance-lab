import Link from "next/link";

export default function ResultsPage() {
  return (
    <section>
      <header className="page-header">
        <h1>Performance Results</h1>
        <p>Performance ratings, compatibility, and upgrade recommendations.</p>
      </header>

      <div className="results-toolbar">
        <p>No performance results yet. Benchmark testing is coming soon.</p>
        <Link href="/builder" className="button">
          Configure a build
        </Link>
      </div>

      <dl className="metric-grid" aria-label="Performance scores">
        {[
          ["Overall score", "Combined system performance"],
          ["Gaming score", "Performance for your target resolution"],
          [
            "Productivity score",
            "Performance for everyday and demanding tasks",
          ],
        ].map(([label, description]) => (
          <div key={label} className="metric">
            <dt>{label}</dt>
            <dd aria-label="Not available">&mdash;</dd>
            <dd>
              <p>{description}</p>
            </dd>
          </div>
        ))}
      </dl>

      <section
        className="results-section"
        aria-labelledby="configuration-review"
      >
        <div className="section-heading">
          <h2 id="configuration-review">Configuration review</h2>
          <p>
            Details will appear here when a performance report is available.
          </p>
        </div>
        <dl className="result-rows">
          <div>
            <dt>Compatibility</dt>
            <dd>
              No report available
              <p>
                Check CPU socket and GPU power requirements directly in the
                builder.
              </p>
            </dd>
          </div>
          <div>
            <dt>Recommended upgrade</dt>
            <dd>
              No recommendation available
              <p>Upgrade suggestions require a completed system analysis.</p>
            </dd>
          </div>
        </dl>
      </section>
      <p className="workspace-note">
        Reviewing an existing system?{" "}
        <Link href="/rate-my-pc" className="text-link">
          Visit Rate My PC &rarr;
        </Link>
      </p>
    </section>
  );
}
