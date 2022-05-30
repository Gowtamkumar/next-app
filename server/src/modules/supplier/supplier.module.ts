import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SupplierController } from "./controller/supplier.controller";
import { SupplierRepository } from "./repositories/supplier.repository";
import { SupplierService } from "./services/supplier.service";

@Module({
    imports: [TypeOrmModule.forFeature([SupplierRepository])],
    controllers: [SupplierController],
    providers: [SupplierService],
    exports: []
})

export class SupplierModule { }