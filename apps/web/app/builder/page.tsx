export default function BuilderPage() {
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

                <select defaultValue="">
                  <option value="" disabled>
                    Select CPU
                  </option>
                  <option>AMD Ryzen 5 5600</option>
                  <option>AMD Ryzen 7 5700X</option>
                  <option>Intel Core i5-12400F</option>
                  <option>Intel Core i7-12700K</option>
                </select>
              </label>

              <label className="component-field">
                <span>Graphics Card</span>

                <select defaultValue="">
                  <option value="" disabled>
                    Select GPU
                  </option>
                  <option>NVIDIA GeForce RTX 4060</option>
                  <option>NVIDIA GeForce RTX 4070</option>
                  <option>AMD Radeon RX 7600</option>
                  <option>AMD Radeon RX 7800 XT</option>
                </select>
              </label>

              <label className="component-field">
                <span>Motherboard</span>

                <select defaultValue="">
                  <option value="" disabled>
                    Select motherboard
                  </option>
                  <option>MSI B550M PRO-VDH</option>
                  <option>ASUS TUF Gaming B550-Plus</option>
                  <option>MSI B760 Gaming Plus</option>
                </select>
              </label>

              <label className="component-field">
                <span>Memory</span>

                <select defaultValue="">
                  <option value="" disabled>
                    Select RAM
                  </option>
                  <option>16 GB DDR4 3200 MHz</option>
                  <option>32 GB DDR4 3200 MHz</option>
                  <option>32 GB DDR5 6000 MHz</option>
                </select>
              </label>
            </div>
          </section>

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

                <select defaultValue="">
                  <option value="" disabled>
                    Select storage
                  </option>
                  <option>500 GB NVMe SSD</option>
                  <option>1 TB NVMe SSD</option>
                  <option>2 TB NVMe SSD</option>
                </select>
              </label>

              <label className="component-field">
                <span>Power Supply</span>

                <select defaultValue="">
                  <option value="" disabled>
                    Select PSU
                  </option>
                  <option>550 W</option>
                  <option>650 W</option>
                  <option>750 W</option>
                  <option>850 W</option>
                </select>
              </label>
            </div>
          </section>

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

                <select defaultValue="">
                  <option value="" disabled>
                    Select cooler
                  </option>
                  <option>Stock Cooler</option>
                  <option>120 mm Air Cooler</option>
                  <option>240 mm AIO</option>
                </select>
              </label>

              <label className="component-field">
                <span>Case</span>

                <select defaultValue="">
                  <option value="" disabled>
                    Select case
                  </option>
                  <option>Mid Tower</option>
                  <option>Micro ATX Tower</option>
                  <option>Full Tower</option>
                </select>
              </label>
            </div>
          </section>

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

                <select defaultValue="1080p">
                  <option value="1080p">1920 × 1080</option>
                  <option value="1440p">2560 × 1440</option>
                  <option value="4k">3840 × 2160</option>
                </select>
              </label>

              <label className="component-field">
                <span>Primary Use</span>

                <select defaultValue="gaming">
                  <option value="gaming">Gaming</option>
                  <option value="productivity">Productivity</option>
                  <option value="mixed">Gaming + Productivity</option>
                </select>
              </label>
            </div>
          </section>
        </div>

        <aside className="build-summary">
          <div className="build-summary-header">
            <span>Current Build</span>
            <span className="build-count">0 / 6</span>
          </div>

          <div className="pc-preview-placeholder">
            <div className="pc-case-placeholder">
              <span>3D Preview</span>
              <small>Your PC will appear here</small>
            </div>
          </div>

          <div className="summary-list">
            <div>
              <span>CPU</span>
              <strong>Not selected</strong>
            </div>

            <div>
              <span>GPU</span>
              <strong>Not selected</strong>
            </div>

            <div>
              <span>RAM</span>
              <strong>Not selected</strong>
            </div>

            <div>
              <span>Storage</span>
              <strong>Not selected</strong>
            </div>

            <div>
              <span>PSU</span>
              <strong>Not selected</strong>
            </div>

            <div>
              <span>Compatibility</span>
              <strong className="status-neutral">Waiting</strong>
            </div>
          </div>

          <button className="test-performance-button">
            Test Performance
          </button>

          <p className="test-performance-note">
            Complete the required components before testing your build.
          </p>
        </aside>
      </div>
    </section>
  );
}