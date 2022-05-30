import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "./controller/customer.controller";
import { CustomerRepository } from "./repositories/customer.repository";
import { CustomerService } from "./services/customer.service";

@Module({
    imports: [TypeOrmModule.forFeature([CustomerRepository])],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports: []
})

export class CustomerModule { }