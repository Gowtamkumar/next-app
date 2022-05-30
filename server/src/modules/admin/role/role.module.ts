import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleController } from "./controllers/role.controller";
import { RoleRepository } from "./repositories/role.repository";
import { RoleService } from "./services/role.service";

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: []
})

export class RoleModule { }