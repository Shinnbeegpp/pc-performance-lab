import type { BenchmarkScores } from "./benchmark";

export type CPU = {
  id: string;

  type: "cpu";

  brand: "AMD" | "Intel";

  model: string;
  fullName: string;

  socket: string;

  cores: number;
  threads: number;

  baseClockGHz?: number;
  boostClockGHz?: number;

  powerDrawWatts: number;

  benchmarks: BenchmarkScores;
};