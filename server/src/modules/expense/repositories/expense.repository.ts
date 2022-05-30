import { EntityRepository, Repository } from "typeorm";
import { ExpenseEntity } from "../entities/expense.entity";

@EntityRepository(ExpenseEntity)
export class ExpenseRepository extends Repository<ExpenseEntity> {
  async genrateExpenseNo(): Promise<number> {
    const { maxId } = await this.createQueryBuilder("expense").select("Max(expense.expenseNo)", "maxId").getRawOne();
    return maxId ? Number(maxId) + 1 : 1;
  }
}