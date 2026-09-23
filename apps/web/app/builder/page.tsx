"use client";

import { useMemo, useState } from "react";

import ComponentPicker, {
  type ComponentOption,
} from "../components/ComponentPicker";

import {
  checkCpuSocketCompatibility,
  checkGpuPowerCompatibility,
} from "../../lib/compatibility";

type MotherboardOption = {
  id: string;
  name: string;
  socket: string;
};

type BuildState = {
  cpu: ComponentOption | null;
  gpu: ComponentOption | null;
  motherboard: MotherboardOption | null;

  ram: string;
  storage: string;
  psuWatts: number;

  cooler: string;
  pcCase: string;

  resolution: string;
  useCase: string;
};

export default function BuilderPage() {
  const motherboards: MotherboardOption[] = [
    {
      id: "msi-b550m-pro-vdh",
      name: "MSI B550M PRO-VDH",
      socket: "AM4",
    },
    {
      id: "asus-tuf-b550-plus",
      name: "ASUS TUF Gaming B550-Plus",
      socket: "AM4",
    },
    {
      id: "msi-b760-gaming-plus",
      name: "MSI B760 Gaming Plus",
      socket: "LGA1700",
    },
  ];

  const [build, setBuild] = useState<BuildState>({
    cpu: null,
    gpu: null,

    motherboard: null,

    ram: "",
    storage: "",

    psuWatts: 0,

    cooler: "",
    pcCase: "",

    resolution: "1080p",
    useCase: "gaming",
  });

  const requiredParts = useMemo(
    () => [
      build.cpu,
      build.gpu,
      build.motherboard,
      build.ram,
      build.storage,
      build.psuWatts,
    ],
    [
      build.cpu,
      build.gpu,
      build.motherboard,
      build.ram,
      build.storage,
      build.psuWatts,
    ],
  );

  const selectedRequiredCount = useMemo(() => {
    return requiredParts.filter(Boolean).length;
  }, [requiredParts]);

  const isComplete = selectedRequiredCount === requiredParts.length;

  const cpuCompatibility = checkCpuSocketCompatibility(
    build.cpu,
    build.motherboard?.socket ?? "",
  );

  const gpuPowerCompatibility = checkGpuPowerCompatibility(
    build.gpu,
    build.psuWatts,
  );

  const isCompatible =
    cpuCompatibility.compatible && gpuPowerCompatibility.compatible;

  const canTestPerformance = isComplete && isCompatible;

  function updateBuild<K extends keyof BuildState>(
    field: K,
    value: BuildState[K],
  ) {
    setBuild((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleTestPerformance() {
    if (!canTestPerformance) {
      return;
    }

    console.log("Testing build:", build);

    alert("Build is compatible and ready for performance testing.");
  }

  return (
    <section className="builder-page">
      <header className="page-header">
        <h1>Build &amp; Test</h1>

        <p>Select your components and check compatibility before testing.</p>
      </header>

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
              <div className="component-field">
                <ComponentPicker
                  label="Processor"
                  endpoint="cpus"
                  value={build.cpu}
                  onSelect={(cpu) => updateBuild("cpu", cpu)}
                />
              </div>

              <div className="component-field">
                <ComponentPicker
                  label="Graphics Card"
                  endpoint="gpus"
                  value={build.gpu}
                  onSelect={(gpu) => updateBuild("gpu", gpu)}
                />
              </div>

              <label className="component-field">
                <span>Motherboard</span>

                <select
                  value={build.motherboard?.id ?? ""}
                  onChange={(event) => {
                    const motherboard =
                      motherboards.find(
                        (item) => item.id === event.target.value,
                      ) ?? null;

                    updateBuild("motherboard", motherboard);
                  }}
                >
                  <option value="">Select Motherboard</option>

                  {motherboards.map((motherboard) => (
                    <option key={motherboard.id} value={motherboard.id}>
                      {motherboard.name} ({motherboard.socket})
                    </option>
                  ))}
                </select>
              </label>

              <label className="component-field">
                <span>Memory</span>

                <select
                  value={build.ram}
                  onChange={(event) => updateBuild("ram", event.target.value)}
                >
                  <option value="">Select RAM</option>
                  <option value="16GB DDR4 3200MHz">16GB DDR4 3200MHz</option>
                  <option value="32GB DDR4 3200MHz">32GB DDR4 3200MHz</option>
                  <option value="32GB DDR5 6000MHz">32GB DDR5 6000MHz</option>
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
                  <option value="500GB NVMe SSD">500GB NVMe SSD</option>
                  <option value="1TB NVMe SSD">1TB NVMe SSD</option>
                  <option value="2TB NVMe SSD">2TB NVMe SSD</option>
                </select>
              </label>

              <label className="component-field">
                <span>Power Supply</span>

                <select
                  value={build.psuWatts || ""}
                  onChange={(event) =>
                    updateBuild("psuWatts", Number(event.target.value))
                  }
                >
                  <option value="">Select PSU</option>

                  <option value="450">450 W</option>
                  <option value="550">550 W</option>
                  <option value="650">650 W</option>
                  <option value="750">750 W</option>
                  <option value="850">850 W</option>
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

              <span className="builder-section-status optional">Optional</span>
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
                  <option value="Stock Cooler">Stock Cooler</option>
                  <option value="120mm Air Cooler">120mm Air Cooler</option>
                  <option value="240mm AIO">240mm AIO</option>
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
                  <option value="Mid Tower">Mid Tower</option>
                  <option value="Micro ATX Tower">Micro ATX Tower</option>
                  <option value="Full Tower">Full Tower</option>
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
                  <option value="1080p">1920 × 1080</option>
                  <option value="1440p">2560 × 1440</option>
                  <option value="4k">3840 × 2160</option>
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
                  <option value="gaming">Gaming</option>
                  <option value="productivity">Productivity</option>
                  <option value="mixed">Gaming + Productivity</option>
                </select>
              </label>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE SUMMARY */}

        <aside
          className="build-summary"
          aria-labelledby="build-summary-heading"
        >
          <div className="build-summary-header">
            <h2 id="build-summary-heading">Current Build</h2>

            <span className="build-count">
              {selectedRequiredCount} / {requiredParts.length} required
            </span>
          </div>

          <progress
            className="build-progress"
            value={selectedRequiredCount}
            max={requiredParts.length}
            aria-label="Required components selected"
          />

          <dl className="summary-list">
            {[
              ["Processor", build.cpu?.fullName],
              ["Graphics", build.gpu?.fullName],
              ["Motherboard", build.motherboard?.name],
              ["Memory", build.ram],
              ["Storage", build.storage],
              ["Power", build.psuWatts ? `${build.psuWatts} W` : ""],
              ["Cooler", build.cooler],
              ["Case", build.pcCase],
              ["Resolution", build.resolution],
              [
                "Primary use",
                build.useCase === "mixed"
                  ? "Gaming + Productivity"
                  : build.useCase === "gaming"
                    ? "Gaming"
                    : "Productivity",
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd className={value ? undefined : "summary-empty"}>
                  {value || "Not selected"}
                </dd>
              </div>
            ))}
          </dl>

          <div className="compatibility-panel" aria-live="polite">
            <h3>Compatibility</h3>

            <div
              className={`compatibility-item ${
                !build.cpu || !build.motherboard
                  ? "pending"
                  : cpuCompatibility.compatible
                    ? "compatible"
                    : "incompatible"
              }`}
            >
              <div className="compatibility-heading">
                <strong>CPU / Motherboard</strong>
                <span className="compatibility-state">
                  {!build.cpu || !build.motherboard
                    ? "Pending"
                    : cpuCompatibility.compatible
                      ? "Pass"
                      : "Check required"}
                </span>
              </div>
              <p>{cpuCompatibility.message}</p>
            </div>

            <div
              className={`compatibility-item ${
                !build.gpu || !build.psuWatts
                  ? "pending"
                  : gpuPowerCompatibility.compatible
                    ? "compatible"
                    : "incompatible"
              }`}
            >
              <div className="compatibility-heading">
                <strong>GPU / Power Supply</strong>
                <span className="compatibility-state">
                  {!build.gpu || !build.psuWatts
                    ? "Pending"
                    : gpuPowerCompatibility.compatible
                      ? "Pass"
                      : "Check required"}
                </span>
              </div>
              <p>{gpuPowerCompatibility.message}</p>
            </div>
          </div>

          <button
            type="button"
            className="test-performance-button"
            aria-describedby="test-performance-note"
            disabled={!canTestPerformance}
            onClick={handleTestPerformance}
          >
            Test Performance
          </button>

          <p id="test-performance-note" className="test-performance-note">
            {!isComplete
              ? `Select ${
                  requiredParts.length - selectedRequiredCount
                } more required component${
                  requiredParts.length - selectedRequiredCount === 1 ? "" : "s"
                }.`
              : !isCompatible
                ? "Resolve compatibility issues before testing performance."
                : "Your build is compatible and ready for performance testing."}
          </p>
          <div className="pc-preview-placeholder">
            <div className="pc-case-placeholder">
              <span>3D preview</span>
              <small>
                {selectedRequiredCount === 0
                  ? "Select components to begin. Preview coming soon."
                  : "Preview for your configuration is coming soon."}
              </small>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
