import type { BenchmarkScores } from "./benchmark";

export type GPU = {
  id: string;

  type: "gpu";

  brand: "AMD" | "NVIDIA";

  model: string;
  fullName: string;

  vramGB: number;
  memoryType?: string;

  powerDrawWatts: number;

  recommendedPsuWatts?: number;

  benchmarks: BenchmarkScores;
};