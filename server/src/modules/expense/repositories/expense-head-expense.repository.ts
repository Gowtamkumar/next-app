import { EntityRepository, Repository } from "typeorm";
import { ExpenseHeadExpenseEntity } from "../entities/expense-head-expense.entity";

@EntityRepository(ExpenseHeadExpenseEntity)
export class ExpenseHeadExpenseRepository extends Repository<ExpenseHeadExpenseEntity> {}