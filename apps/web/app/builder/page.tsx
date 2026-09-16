"use client";

import { useMemo, useState } from "react";

type BuildState = {
  cpu: string;
  gpu: string;
  motherboard: string;
  ram: string;
  storage: string;
  psu: string;
  cooler: string;
  pcCase: string;
  resolution: string;
  useCase: string;
};

export default function BuilderPage() {
  const [build, setBuild] = useState<BuildState>({
    cpu: "",
    gpu: "",
    motherboard: "",
    ram: "",
    storage: "",
    psu: "",
    cooler: "",
    pcCase: "",
    resolution: "1080p",
    useCase: "gaming",
  });

  const requiredParts = [
    build.cpu,
    build.gpu,
    build.motherboard,
    build.ram,
    build.storage,
    build.psu,
  ];

  const selectedRequiredCount = useMemo(() => {
    return requiredParts.filter(Boolean).length;
  }, [requiredParts]);

  const isComplete = selectedRequiredCount === requiredParts.length;

  function updateBuild(field: keyof BuildState, value: string) {
    setBuild((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleTestPerformance() {
    if (!isComplete) return;

    console.log("Testing build:", build);

    alert("Build complete! Performance testing will be added next.");
  }

  return (
    <section className="builder-page">
      <div className="builder-header">
        <span className="home-badge">Build & Test</span>

        <h1>Build your PC</h1>

        <p>
          Select your components, review your configuration, and test its
          expected performance.
        </p>
      </div>

      <div className="builder-layout">
        <div className="builder-sections">

          {/* CORE COMPONENTS */}

          <section className="builder-section">
            <div className="builder-section-header">
              <div>
                <span className="builder-section-number">01</span>
                <h2>Core Components</h2>
              </div>

              <span className="builder-section-status">Required</span>
            </div>

            <div className="component-grid">

              <label className="component-field">
                <span>Processor</span>

                <select
                  value={build.cpu}
                  onChange={(event) =>
                    updateBuild("cpu", event.target.value)
                  }
                >
                  <option value="">Select CPU</option>
                  <option value="AMD Ryzen 5 5600">
                    AMD Ryzen 5 5600
                  </option>
                  <option value="AMD Ryzen 7 5700X">
                    AMD Ryzen 7 5700X
                  </option>
                  <option value="Intel Core i5-12400F">
                    Intel Core i5-12400F
                  </option>
                  <option value="Intel Core i7-12700K">
                    Intel Core i7-12700K
                  </option>
                </select>
              </label>

              <label className="component-field">
                <span>Graphics Card</span>

                <select
                  value={build.gpu}
                  onChange={(event) =>
                    updateBuild("gpu", event.target.value)
                  }
                >
                  <option value="">Select GPU</option>
                  <option value="NVIDIA GeForce RTX 4060">
                    NVIDIA GeForce RTX 4060
                  </option>
                  <option value="NVIDIA GeForce RTX 4070">
                    NVIDIA GeForce RTX 4070
                  </option>
                  <option value="AMD Radeon RX 7600">
                    AMD Radeon RX 7600
                  </option>
                  <option value="AMD Radeon RX 7800 XT">
                    AMD Radeon RX 7800 XT
                  </option>
                </select>
              </label>

              <label className="component-field">
                <span>Motherboard</span>

                <select
                  value={build.motherboard}
                  onChange={(event) =>
                    updateBuild("motherboard", event.target.value)
                  }
                >
                  <option value="">Select Motherboard</option>
                  <option value="MSI B550M PRO-VDH">
                    MSI B550M PRO-VDH
                  </option>
                  <option value="ASUS TUF Gaming B550-Plus">
                    ASUS TUF Gaming B550-Plus
                  </option>
                  <option value="MSI B760 Gaming Plus">
                    MSI B760 Gaming Plus
                  </option>
                </select>
              </label>

              <label className="component-field">
                <span>Memory</span>

                <select
                  value={build.ram}
                  onChange={(event) =>
                    updateBuild("ram", event.target.value)
                  }
                >
                  <option value="">Select RAM</option>
                  <option value="16GB DDR4 3200MHz">
                    16GB DDR4 3200MHz
                  </option>
                  <option value="32GB DDR4 3200MHz">
                    32GB DDR4 3200MHz
                  </option>
                  <option value="32GB DDR5 6000MHz">
                    32GB DDR5 6000MHz
                  </option>
                </select>
              </label>
            </div>
          </section>

          {/* STORAGE + POWER */}

          <section className="builder-section">
            <div className="builder-section-header">
              <div>
                <span className="builder-section-number">02</span>
                <h2>Storage & Power</h2>
              </div>

              <span className="builder-section-status">Required</span>
            </div>

            <div className="component-grid">

              <label className="component-field">
                <span>Storage</span>

                <select
                  value={build.storage}
                  onChange={(event) =>
                    updateBuild("storage", event.target.value)
                  }
                >
                  <option value="">Select Storage</option>
                  <option value="500GB NVMe SSD">
                    500GB NVMe SSD
                  </option>
                  <option value="1TB NVMe SSD">
                    1TB NVMe SSD
                  </option>
                  <option value="2TB NVMe SSD">
                    2TB NVMe SSD
                  </option>
                </select>
              </label>

              <label className="component-field">
                <span>Power Supply</span>

                <select
                  value={build.psu}
                  onChange={(event) =>
                    updateBuild("psu", event.target.value)
                  }
                >
                  <option value="">Select PSU</option>
                  <option value="550W">550W</option>
                  <option value="650W">650W</option>
                  <option value="750W">750W</option>
                  <option value="850W">850W</option>
                </select>
              </label>
            </div>
          </section>

          {/* COOLING + CASE */}

          <section className="builder-section">
            <div className="builder-section-header">
              <div>
                <span className="builder-section-number">03</span>
                <h2>Cooling & Case</h2>
              </div>

              <span className="builder-section-status optional">
                Optional
              </span>
            </div>

            <div className="component-grid">

              <label className="component-field">
                <span>CPU Cooler</span>

                <select
                  value={build.cooler}
                  onChange={(event) =>
                    updateBuild("cooler", event.target.value)
                  }
                >
                  <option value="">Select Cooler</option>
                  <option value="Stock Cooler">
                    Stock Cooler
                  </option>
                  <option value="120mm Air Cooler">
                    120mm Air Cooler
                  </option>
                  <option value="240mm AIO">
                    240mm AIO
                  </option>
                </select>
              </label>

              <label className="component-field">
                <span>Case</span>

                <select
                  value={build.pcCase}
                  onChange={(event) =>
                    updateBuild("pcCase", event.target.value)
                  }
                >
                  <option value="">Select Case</option>
                  <option value="Mid Tower">
                    Mid Tower
                  </option>
                  <option value="Micro ATX Tower">
                    Micro ATX Tower
                  </option>
                  <option value="Full Tower">
                    Full Tower
                  </option>
                </select>
              </label>
            </div>
          </section>

          {/* PERFORMANCE TARGET */}

          <section className="builder-section">
            <div className="builder-section-header">
              <div>
                <span className="builder-section-number">04</span>
                <h2>Performance Target</h2>
              </div>
            </div>

            <div className="component-grid">

              <label className="component-field">
                <span>Resolution</span>

                <select
                  value={build.resolution}
                  onChange={(event) =>
                    updateBuild("resolution", event.target.value)
                  }
                >
                  <option value="1080p">
                    1920 × 1080
                  </option>
                  <option value="1440p">
                    2560 × 1440
                  </option>
                  <option value="4k">
                    3840 × 2160
                  </option>
                </select>
              </label>

              <label className="component-field">
                <span>Primary Use</span>

                <select
                  value={build.useCase}
                  onChange={(event) =>
                    updateBuild("useCase", event.target.value)
                  }
                >
                  <option value="gaming">
                    Gaming
                  </option>
                  <option value="productivity">
                    Productivity
                  </option>
                  <option value="mixed">
                    Gaming + Productivity
                  </option>
                </select>
              </label>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE SUMMARY */}

        <aside className="build-summary">
          <div className="build-summary-header">
            <span>Current Build</span>

            <span className="build-count">
              {selectedRequiredCount} / {requiredParts.length}
            </span>
          </div>

          <div className="pc-preview-placeholder">
            <div className="pc-case-placeholder">
              <span>3D Preview</span>

              <small>
                {selectedRequiredCount === 0
                  ? "Select components to begin"
                  : "3D components will appear here later"}
              </small>
            </div>
          </div>

          <div className="summary-list">

            <div>
              <span>CPU</span>
              <strong>{build.cpu || "Not selected"}</strong>
            </div>

            <div>
              <span>GPU</span>
              <strong>{build.gpu || "Not selected"}</strong>
            </div>

            <div>
              <span>Motherboard</span>
              <strong>
                {build.motherboard || "Not selected"}
              </strong>
            </div>

            <div>
              <span>RAM</span>
              <strong>{build.ram || "Not selected"}</strong>
            </div>

            <div>
              <span>Storage</span>
              <strong>
                {build.storage || "Not selected"}
              </strong>
            </div>

            <div>
              <span>PSU</span>
              <strong>{build.psu || "Not selected"}</strong>
            </div>

            <div>
              <span>Compatibility</span>

              <strong
                className={
                  isComplete
                    ? "status-compatible"
                    : "status-neutral"
                }
              >
                {isComplete ? "Ready to check" : "Waiting"}
              </strong>
            </div>
          </div>

          <button
            className="test-performance-button"
            disabled={!isComplete}
            onClick={handleTestPerformance}
          >
            Test Performance
          </button>

          <p className="test-performance-note">
            {isComplete
              ? "Your build is ready for performance testing."
              : `Select ${
                  requiredParts.length - selectedRequiredCount
                } more required component${
                  requiredParts.length - selectedRequiredCount === 1
                    ? ""
                    : "s"
                }.`}
          </p>
        </aside>
      </div>
    </section>
  );
}