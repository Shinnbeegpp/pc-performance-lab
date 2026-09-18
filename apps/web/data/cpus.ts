import type { CPU } from "../types/cpu";

export const cpus: CPU[] = [
  {
    id: "amd-ryzen-5-5600",
    type: "cpu",
    brand: "AMD",

    model: "Ryzen 5 5600",
    fullName: "AMD Ryzen 5 5600",

    socket: "AM4",

    cores: 6,
    threads: 12,

    baseClockGHz: 3.5,
    boostClockGHz: 4.4,

    powerDrawWatts: 65,

    benchmarks: {
      overall: 72,
      gaming: 74,
      productivity: 70,
      passmark: 21500,
      nanoreview: 72,
    },
  },

  {
    id: "amd-ryzen-7-5700x",
    type: "cpu",
    brand: "AMD",

    model: "Ryzen 7 5700X",
    fullName: "AMD Ryzen 7 5700X",

    socket: "AM4",

    cores: 8,
    threads: 16,

    baseClockGHz: 3.4,
    boostClockGHz: 4.6,

    powerDrawWatts: 65,

    benchmarks: {
      overall: 80,
      gaming: 80,
      productivity: 84,
      passmark: 26700,
      nanoreview: 79,
    },
  },

  {
    id: "intel-core-i5-12400f",
    type: "cpu",
    brand: "Intel",

    model: "Core i5-12400F",
    fullName: "Intel Core i5-12400F",

    socket: "LGA1700",

    cores: 6,
    threads: 12,

    baseClockGHz: 2.5,
    boostClockGHz: 4.4,

    powerDrawWatts: 65,

    benchmarks: {
      overall: 75,
      gaming: 78,
      productivity: 72,
      passmark: 19500,
      nanoreview: 74,
    },
  },

  {
    id: "intel-core-i7-12700k",
    type: "cpu",
    brand: "Intel",

    model: "Core i7-12700K",
    fullName: "Intel Core i7-12700K",

    socket: "LGA1700",

    cores: 12,
    threads: 20,

    baseClockGHz: 3.6,
    boostClockGHz: 5.0,

    powerDrawWatts: 125,

    benchmarks: {
      overall: 88,
      gaming: 87,
      productivity: 92,
      passmark: 34000,
      nanoreview: 86,
    },
  },
];