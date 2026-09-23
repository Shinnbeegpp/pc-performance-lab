import Link from "next/link";

export default function HomePage() {
  return (
    <section className="home">
      <header className="home-intro">
        <div>
          <span className="eyebrow">Workspace</span>
          <h1>PC configuration workspace</h1>
        </div>
        <p>
          Select PC components, check how they fit together, and review your
          system in one place.
        </p>
      </header>

      <div className="workflow-grid">
        <section className="workflow" aria-labelledby="build-heading">
          <div className="workflow-heading">
            <span className="workflow-number" aria-hidden="true">
              01
            </span>
            <h2 id="build-heading">Configure a new build</h2>
          </div>
          <p>
            Choose your hardware and check CPU socket and power supply
            compatibility as you build.
          </p>
          <span className="workflow-detail">
            Component search · Compatibility checks
          </span>
          <Link href="/builder" className="button button-primary">
            Build &amp; Test
          </Link>
        </section>

        <section className="workflow" aria-labelledby="rate-heading">
          <div className="workflow-heading">
            <span className="workflow-number" aria-hidden="true">
              02
            </span>
            <h2 id="rate-heading">Review an existing PC</h2>
          </div>
          <p>
            A dedicated workspace for your current specifications, performance
            rating, and potential upgrades.
          </p>
          <span className="workflow-detail">
            Specification form · Rating coming soon
          </span>
          <Link href="/rate-my-pc" className="button">
            Rate My PC
          </Link>
        </section>
      </div>

      <section
        className="reference-section"
        aria-labelledby="reference-heading"
      >
        <h2 id="reference-heading">Before you configure</h2>
        <dl className="reference-grid">
          <div>
            <dt>Start with the essentials</dt>
            <dd>
              CPU, GPU, motherboard, memory, storage, and power supply make up
              the required build.
            </dd>
          </div>
          <div>
            <dt>Check the pairing</dt>
            <dd>
              Socket and GPU power checks update as you select components.
            </dd>
          </div>
          <div>
            <dt>Set your target</dt>
            <dd>
              Choose a display resolution and primary use for your
              configuration.
            </dd>
          </div>
        </dl>
      </section>
      <p className="workspace-note">
        Performance estimates and system ratings are still in development.
      </p>
    </section>
  );
}
