import Link from "next/link";

export default function RateMyPCPage() {
  return (
    <section>
      <header className="page-header">
        <h1>Rate My PC</h1>
        <p>A specification workspace for your current system.</p>
      </header>

      <p className="notice" id="rating-availability">
        <strong>System rating is coming soon.</strong> Specification entry and
        analysis are not available yet. You can configure components in Build
        &amp; Test.
      </p>

      <div className="builder-layout">
        <fieldset
          disabled
          aria-label="PC specifications"
          aria-describedby="rating-availability"
          className="builder-sections"
        >
          <section className="builder-section">
            <div className="builder-section-header">
              <div>
                <span className="builder-section-number">01</span>
                <h2>System specifications</h2>
              </div>
              <span className="builder-section-status">Not yet available</span>
            </div>
            <div className="component-grid">
              {[
                ["Processor", "CPU model"],
                ["Graphics Card", "GPU model"],
                ["Motherboard", "Motherboard model"],
                ["Memory", "Capacity, type, and speed"],
                ["Storage", "Capacity and drive type"],
                ["Power Supply", "Rated wattage"],
              ].map(([label, placeholder]) => (
                <label key={label} className="component-field">
                  <span>{label}</span>
                  <input type="text" placeholder={placeholder} />
                </label>
              ))}
            </div>
          </section>

          <section className="builder-section">
            <div className="builder-section-header">
              <div>
                <span className="builder-section-number">02</span>
                <h2>Usage</h2>
              </div>
            </div>
            <div className="component-grid">
              <label className="component-field">
                <span>Resolution</span>
                <select defaultValue="">
                  <option value="">Display resolution</option>
                </select>
              </label>
              <label className="component-field">
                <span>Primary Use</span>
                <select defaultValue="">
                  <option value="">Primary workload</option>
                </select>
              </label>
            </div>
          </section>
        </fieldset>

        <aside className="build-summary" aria-labelledby="analysis-heading">
          <div className="build-summary-header">
            <h2 id="analysis-heading">System analysis</h2>
          </div>
          <p className="sidebar-copy">No specifications submitted.</p>
          <dl className="sidebar-details">
            <div>
              <dt>Performance rating</dt>
              <dd>
                Overall, gaming, and productivity ratings will appear here when
                analysis is available.
              </dd>
            </div>
            <div>
              <dt>Upgrade recommendations</dt>
              <dd>
                Recommendations will be based on your hardware and primary use.
              </dd>
            </div>
          </dl>
          <button
            type="button"
            className="test-performance-button"
            disabled
            aria-describedby="rating-availability"
          >
            Rate My PC
          </button>
          <div className="sidebar-footer">
            <Link href="/builder" className="text-link">
              Open Build &amp; Test &rarr;
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
