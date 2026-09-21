import { Controller, Get } from "@nestjs/common";
import { ComponentsService } from "./components.service.js";

@Controller("components")
export class ComponentsController {
  constructor(
    private readonly componentsService: ComponentsService,
  ) {}

  @Get("cpus")
  getCpus() {
    return this.componentsService.getCpus();
  }

  @Get("gpus")
  getGpus() {
    return this.componentsService.getGpus();
  }
}