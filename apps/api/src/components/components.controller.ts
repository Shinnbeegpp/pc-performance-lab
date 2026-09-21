import { Controller, Get, Query } from "@nestjs/common";
import { ComponentsService } from "./components.service.js";

@Controller("components")
export class ComponentsController {
  constructor(
    private readonly componentsService: ComponentsService,
  ) {}

  @Get("cpus")
  getCpus(@Query("search") search?: string) {
    return this.componentsService.getCpus(search);
  }

  @Get("gpus")
  getGpus(@Query("search") search?: string) {
    return this.componentsService.getGpus(search);
  }
}