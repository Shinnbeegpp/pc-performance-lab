import type { GPU } from "../types/gpu";

export const gpus: GPU[] = [
  {
    id: "nvidia-rtx-4060",
    type: "gpu",
    brand: "NVIDIA",

    model: "GeForce RTX 4060",
    fullName: "NVIDIA GeForce RTX 4060",

    vramGB: 8,
    memoryType: "GDDR6",

    powerDrawWatts: 115,
    recommendedPsuWatts: 550,

    benchmarks: {
      overall: 82,
      gaming: 84,
      productivity: 76,
      passmark: 19500,
      nanoreview: 81,
    },
  },

  {
    id: "nvidia-rtx-4070",
    type: "gpu",
    brand: "NVIDIA",

    model: "GeForce RTX 4070",
    fullName: "NVIDIA GeForce RTX 4070",

    vramGB: 12,
    memoryType: "GDDR6X",

    powerDrawWatts: 200,
    recommendedPsuWatts: 650,

    benchmarks: {
      overall: 91,
      gaming: 93,
      productivity: 87,
      passmark: 27000,
      nanoreview: 90,
    },
  },

  {
    id: "amd-rx-7600",
    type: "gpu",
    brand: "AMD",

    model: "Radeon RX 7600",
    fullName: "AMD Radeon RX 7600",

    vramGB: 8,
    memoryType: "GDDR6",

    powerDrawWatts: 165,
    recommendedPsuWatts: 550,

    benchmarks: {
      overall: 80,
      gaming: 82,
      productivity: 70,
      passmark: 17000,
      nanoreview: 79,
    },
  },

  {
    id: "amd-rx-7800-xt",
    type: "gpu",
    brand: "AMD",

    model: "Radeon RX 7800 XT",
    fullName: "AMD Radeon RX 7800 XT",

    vramGB: 16,
    memoryType: "GDDR6",

    powerDrawWatts: 263,
    recommendedPsuWatts: 700,

    benchmarks: {
      overall: 92,
      gaming: 94,
      productivity: 82,
      passmark: 25000,
      nanoreview: 91,
    },
  },
];