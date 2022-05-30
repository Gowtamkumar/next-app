import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateExpenseHeadExpenseDto } from "../dtos/create-expense-head-expense.dto";
import { FilterExpenseHeadExpenseDto } from "../dtos/filter-expense-head-expense.dto";
import { UpdateExpenseHeadExpenseByIdDto } from "../dtos/update-Expense-Head-Expense-ById.dto";
import { UpdateExpenseHeadExpenseDto } from "../dtos/update-expense-head-expense.dto";
import { ExpenseHeadExpenseEntity } from "../entities/expense-head-expense.entity";
import { ExpenseHeadExpenseRepository } from "../repositories/expense-head-expense.repository";

@Injectable()
export class ExpenseHeadExpenseService {
  constructor(
    @InjectRepository(ExpenseHeadExpenseRepository) private readonly expenseHeadExpenseRepo: ExpenseHeadExpenseRepository
  ) { }


  getExpenseHeadExpenses(filterExpenseHeadExpenseDto: FilterExpenseHeadExpenseDto): Promise<ExpenseHeadExpenseEntity[]> {
    return this.expenseHeadExpenseRepo.find({ where: filterExpenseHeadExpenseDto, relations: ['expensesHead'] })
  }


  async getExpenseHeadExpense(id: string): Promise<ExpenseHeadExpenseEntity> {
    const expenseHead = await this.expenseHeadExpenseRepo.findOne(id);

    if (!expenseHead) {
      throw new NotFoundException(`Expense Head of id: ${id} not found`);
    }
    return expenseHead;
  }


  createExpenseHeadExpense(createExpenseHeadExpenseDto: CreateExpenseHeadExpenseDto): Promise<ExpenseHeadExpenseEntity> {
    const expenseHeadExpense = this.expenseHeadExpenseRepo.create(createExpenseHeadExpenseDto);
    return this.expenseHeadExpenseRepo.save(expenseHeadExpense);
  }


  async updateExpenseHeadExpense(id: string, updateExpenseHeadExpenseDto: UpdateExpenseHeadExpenseDto): Promise<ExpenseHeadExpenseEntity> {
    const expenseHeadExpense = await this.getExpenseHeadExpense(id);
    Object.assign(expenseHeadExpense, updateExpenseHeadExpenseDto);
    return this.expenseHeadExpenseRepo.save(expenseHeadExpense);
  }

  async updateExpenseHeadExpenseById(updateExpenseHeadExpenseByIdDto: UpdateExpenseHeadExpenseByIdDto): Promise<ExpenseHeadExpenseEntity> {
    console.log("update", updateExpenseHeadExpenseByIdDto);

    const { id } = updateExpenseHeadExpenseByIdDto;
    const expenseHeadExpense = await this.getExpenseHeadExpense(id);
    console.log("test", expenseHeadExpense);


    Object.assign(expenseHeadExpense, updateExpenseHeadExpenseByIdDto);
    return this.expenseHeadExpenseRepo.save(expenseHeadExpense);

  }


  async deleteExpenseHeadExpense(id: string): Promise<ExpenseHeadExpenseEntity> {
    const expenseHead = await this.getExpenseHeadExpense(id);
    return this.expenseHeadExpenseRepo.remove(expenseHead);
  }


  async deleteExpenseHeadExpensebyid(id: string): Promise<ExpenseHeadExpenseEntity[]> {
    const expenseHead = await this.expenseHeadExpenseRepo.find({ expenseId: id })
    return this.expenseHeadExpenseRepo.remove(expenseHead);
  }
}
