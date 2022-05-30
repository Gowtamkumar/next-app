import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IncomeController } from "./controllers/income.controller";
import { IncomeRepository } from "./repositories/income.repository";
import { IncomeService } from "./services/income.service";

@Module({
  imports: [TypeOrmModule.forFeature([IncomeRepository])],
  controllers: [IncomeController],
  providers: [IncomeService],
  exports: []

})
export class IncomeModule { }