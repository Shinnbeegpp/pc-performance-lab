export type CpuCompatibilityInput = {
    socket?: string;
  };
  
  export type GpuCompatibilityInput = {
    recommendedPsuWatts?: number;
    powerDrawWatts?: number;
  };
  
  export type CompatibilityResult = {
    compatible: boolean;
    message: string;
  };
  
  export function checkCpuSocketCompatibility(
    cpu: CpuCompatibilityInput | null,
    motherboardSocket: string,
  ): CompatibilityResult {
    if (!cpu || !motherboardSocket) {
      return {
        compatible: false,
        message: "Select a CPU and motherboard.",
      };
    }
  
    if (!cpu.socket) {
      return {
        compatible: false,
        message: "CPU socket information is unavailable.",
      };
    }
  
    if (cpu.socket !== motherboardSocket) {
      return {
        compatible: false,
        message: `CPU uses ${cpu.socket}, but the motherboard uses ${motherboardSocket}.`,
      };
    }
  
    return {
      compatible: true,
      message: `CPU and motherboard both use ${cpu.socket}.`,
    };
  }
  
  export function checkGpuPowerCompatibility(
    gpu: GpuCompatibilityInput | null,
    psuWatts: number,
  ): CompatibilityResult {
    if (!gpu || !psuWatts) {
      return {
        compatible: false,
        message: "Select a GPU and power supply.",
      };
    }
  
    if (!gpu.recommendedPsuWatts) {
      return {
        compatible: false,
        message: "Recommended PSU information is unavailable.",
      };
    }
  
    if (psuWatts < gpu.recommendedPsuWatts) {
      return {
        compatible: false,
        message: `GPU recommends at least ${gpu.recommendedPsuWatts}W, but the selected PSU is ${psuWatts}W.`,
      };
    }
  
    return {
      compatible: true,
      message: `${psuWatts}W PSU meets the GPU's ${gpu.recommendedPsuWatts}W recommendation.`,
    };
  }