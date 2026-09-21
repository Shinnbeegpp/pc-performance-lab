"use client";

import { useEffect, useState } from "react";

export type ComponentOption = {
  id: string;
  fullName: string;

  // CPU fields
  cores?: number;
  threads?: number;
  socket?: string;

  // GPU fields
  vramGB?: number;
  memoryType?: string;

  // Shared field
  powerDrawWatts?: number;
  recommendedPsuWatts?: number;
};

type ComponentPickerProps = {
  label: string;
  endpoint: "cpus" | "gpus";
  value: ComponentOption | null;
  onSelect: (component: ComponentOption | null) => void;
};

export default function ComponentPicker({
  label,
  endpoint,
  value,
  onSelect,
}: ComponentPickerProps) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ComponentOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (value) return;

    const timer = setTimeout(async () => {
      const trimmedSearch = search.trim();

      if (trimmedSearch.length < 2) {
        setResults([]);
        setOpen(false);
        return;
      }

      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:3001/components/${endpoint}?search=${encodeURIComponent(
            trimmedSearch,
          )}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch components.");
        }

        const data: ComponentOption[] = await response.json();

        setResults(data);
        setOpen(true);
      } catch (error) {
        console.error(error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search, endpoint, value]);

  function handleInputChange(input: string) {
    if (value) {
      onSelect(null);
    }

    setSearch(input);
  }

  function renderDetails(component: ComponentOption) {
    if (endpoint === "cpus") {
      const cpuDetails = [
        component.cores !== undefined &&
        component.threads !== undefined
          ? `${component.cores} cores / ${component.threads} threads`
          : null,

        component.socket
          ? `Socket ${component.socket}`
          : null,

        component.powerDrawWatts !== undefined
          ? `${component.powerDrawWatts} W`
          : null,
      ];

      return cpuDetails.filter(Boolean).join(" • ");
    }

    const gpuDetails = [
      component.vramGB !== undefined
        ? `${component.vramGB} GB VRAM`
        : null,

      component.memoryType ?? null,

      component.powerDrawWatts !== undefined
        ? `${component.powerDrawWatts} W`
        : null,
    ];

    return gpuDetails.filter(Boolean).join(" • ");
  }

  return (
    <div className="component-picker">
      <label>{label}</label>

      <input
        type="text"
        value={value?.fullName ?? search}
        placeholder={`Search ${label}...`}
        onChange={(event) =>
          handleInputChange(event.target.value)
        }
        onFocus={() => {
          if (results.length > 0) {
            setOpen(true);
          }
        }}
      />

      {loading && (
        <div className="picker-status">
          Searching...
        </div>
      )}

      {open && !loading && results.length > 0 && (
        <div className="picker-dropdown">
          {results.map((component) => (
            <button
              key={component.id}
              type="button"
              className="picker-option"
              onClick={() => {
                onSelect(component);
                setSearch("");
                setOpen(false);
              }}
            >
              <span className="picker-option-name">
                {component.fullName}
              </span>

              <span className="picker-option-details">
                {renderDetails(component)}
              </span>
            </button>
          ))}
        </div>
      )}

      {open &&
        !loading &&
        search.length >= 2 &&
        results.length === 0 && (
          <div className="picker-dropdown picker-empty">
            No components found.
          </div>
        )}
    </div>
  );
}