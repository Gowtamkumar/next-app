import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModuleController } from "./controllers/module.controller";
import { ModuleRepository } from "./repositories/module.repository";
import { ModuleService } from "./services/module.service";

@Module({
  imports: [TypeOrmModule.forFeature([ModuleRepository])],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports: []
})

export class ModuleModule { }