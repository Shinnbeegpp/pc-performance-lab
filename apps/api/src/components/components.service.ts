import { Injectable } from "@nestjs/common";
import { db } from "../prisma/db.js";

@Injectable()
export class ComponentsService {
  async getCpus() {
    return db.orm.public.Cpu.all();
  }

  async getGpus() {
    return db.orm.public.Gpu.all();
  }
}