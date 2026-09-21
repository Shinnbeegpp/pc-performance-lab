import { Injectable } from "@nestjs/common";
import { db } from "../prisma/db.js";

@Injectable()
export class ComponentsService {
  async getCpus(search?: string) {
    const cpuQuery = db.orm.public.Cpu;

    if (!search?.trim()) {
      return cpuQuery
        .orderBy((cpu) => cpu.fullName.asc())
        .limit(50)
        .all();
    }

    const cleanSearch = search.trim();

    return cpuQuery
      .where((cpu) =>
        cpu.fullName.ilike(`%${cleanSearch}%`)
      )
      .orderBy((cpu) => cpu.fullName.asc())
      .limit(50)
      .all();
  }

  async getGpus(search?: string) {
    const gpuQuery = db.orm.public.Gpu;

    if (!search?.trim()) {
      return gpuQuery
        .orderBy((gpu) => gpu.fullName.asc())
        .limit(50)
        .all();
    }

    const cleanSearch = search.trim();

    return gpuQuery
      .where((gpu) =>
        gpu.fullName.ilike(`%${cleanSearch}%`)
      )
      .orderBy((gpu) => gpu.fullName.asc())
      .limit(50)
      .all();
  }
}