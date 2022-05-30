import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpenseHeadExpenseController } from "./controllers/expense-head-expense.controller";
import { ExpenseHeadController } from "./controllers/expense-head.controller";
import { ExpenseController } from "./controllers/expense.controller";
import { ExpenseHeadExpenseRepository } from "./repositories/expense-head-expense.repository";
import { ExpenseHeadRepository } from "./repositories/expense-head.repository";
import { ExpenseRepository } from "./repositories/expense.repository";
import { ExpenseHeadExpenseService } from "./services/expense-head-expense.service";
import { ExpenseHeadService } from "./services/expense-head.service";
import { ExpenseService } from "./services/expense.service";

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseRepository, ExpenseHeadRepository, ExpenseHeadExpenseRepository])],
  controllers: [ExpenseController, ExpenseHeadController, ExpenseHeadExpenseController],
  providers: [ExpenseService, ExpenseHeadService, ExpenseHeadExpenseService]
})

export class ExpenseModule { };