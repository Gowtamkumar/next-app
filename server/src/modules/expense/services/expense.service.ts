import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateExpenseHeadExpenseDto } from "../dtos/create-expense-head-expense.dto";
import { CreateExpenseDto } from "../dtos/create-expense.dto";
import { ExpenseHeadServiceValidaterDto } from "../dtos/expense-head-service-validater.dto";
import { FilterExpenseDto } from "../dtos/filter-expense.dto";
import { UpdateExpenseHeadExpenseValidatorDto } from "../dtos/update-expense-head-expense-validator.dto";
import { UpdateExpenseDto } from "../dtos/update-expense.dto";
import { ExpenseEntity } from "../entities/expense.entity";
import { ExpenseRepository } from "../repositories/expense.repository";
import { ExpenseHeadExpenseService } from "./expense-head-expense.service";

@Injectable()
export class ExpenseService {
  constructor(@InjectRepository(ExpenseRepository)
    private readonly expenseRepo: ExpenseRepository,
    private readonly expenseHeadExpenseService: ExpenseHeadExpenseService
  ) { }

  getExpenses(filterExpenseDto: FilterExpenseDto): Promise<ExpenseEntity[]> {
    return this.expenseRepo.find({ where: filterExpenseDto, relations: ['expenseHeadExpenses', 'expenseHeadExpenses.expensesHead'] });
  }

  async getExpense(id: string): Promise<ExpenseEntity> {
    const expense = await this.expenseRepo.findOne(id, { relations: ['expenseHeadExpenses'] });

    if (!expense) {
      throw new NotFoundException(`Expense of id: ${id} not found`);
    }
    return expense;
  }


  @Transactional()
  async createExpense(createExpenseDto: CreateExpenseDto): Promise<any> {
    console.log(createExpenseDto);

    const { expenseHeadExpense } = createExpenseDto

    const expense = this.expenseRepo.create(createExpenseDto);
    expense.expenseNo = await this.expenseRepo.genrateExpenseNo();
    await this.expenseRepo.save(expense);

    const expenseHead = await expenseHeadExpense.map(async (item: ExpenseHeadServiceValidaterDto | any) => {
      const expenseHeadExpense = await this.expenseHeadExpenseService.createExpenseHeadExpense({ ...item, expenseId: expense.id } as CreateExpenseHeadExpenseDto);
      return expenseHeadExpense;
    })

    return expense;


  }

  async updateExpense(id: string, updateExpenseDto: UpdateExpenseDto): Promise<any> {
    const { expenseHeadExpense } = updateExpenseDto

    const expense = await this.getExpense(id);
    Object.assign(expense, updateExpenseDto);
    await this.expenseRepo.save(expense);

    const updateExpenseHeads = expenseHeadExpense.map(async (item: UpdateExpenseHeadExpenseValidatorDto | any) => {
      console.log("ddd", item);

      if (item.create) {
        const expenseHeadExpense = await this.expenseHeadExpenseService.createExpenseHeadExpense({ ...item, expenseId: expense.id } as CreateExpenseHeadExpenseDto);
        return expenseHeadExpense;
      }
      if (item.update) {
        const expenseHeadExpense = await this.expenseHeadExpenseService.updateExpenseHeadExpenseById({ ...item });
        return expenseHeadExpense;
      }

      if (item.remove) {
        const expenseHeadExpense = await this.expenseHeadExpenseService.deleteExpenseHeadExpense(item.id);
        return expenseHeadExpense;
      }

    })

    return updateExpenseHeads

  }

  @Transactional()
  async deleteExpense(id: string): Promise<ExpenseEntity> {
    await this.expenseHeadExpenseService.deleteExpenseHeadExpensebyid(id);
    const expense = await this.getExpense(id);
    return this.expenseRepo.remove(expense);
  }
}