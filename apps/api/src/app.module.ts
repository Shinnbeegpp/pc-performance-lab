import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { ComponentsModule } from "./components/components.module.js";

@Module({
  imports: [ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}