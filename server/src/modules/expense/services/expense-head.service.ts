import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateExpenseHeadDto } from "../dtos/create-expense-head.dto";
import { FilterExpenseHeadDto } from "../dtos/filter-expense-head.dto";
import { UpdateExpenseHeadDto } from "../dtos/update-expense-head.dto";
import { ExpenseHeadEntity } from "../entities/expense-head.entity";
import { ExpenseHeadRepository } from "../repositories/expense-head.repository";

@Injectable()
export class ExpenseHeadService {
  constructor(
    @InjectRepository(ExpenseHeadRepository) private readonly expenseHeadRepo: ExpenseHeadRepository
  ) { }


  getExpenseHeads(filterExpenseHeadDto: FilterExpenseHeadDto): Promise<ExpenseHeadEntity[]> {
    return this.expenseHeadRepo.find(filterExpenseHeadDto)
  }


  async getExpenseHead(id: string): Promise<ExpenseHeadEntity> {
    const expenseHead = await this.expenseHeadRepo.findOne(id);

    if (!expenseHead) {
      throw new NotFoundException(`Expense Head of id: ${id} not found`);
    }
    return expenseHead;
  }


  createExpenseHead(createExpenseHeadDto: CreateExpenseHeadDto): Promise<ExpenseHeadEntity> {
    const expenseHead = this.expenseHeadRepo.create(createExpenseHeadDto);
    return this.expenseHeadRepo.save(expenseHead);
  }


  async updateExpenseHead(id: string, updateExpenseHeadDto: UpdateExpenseHeadDto): Promise<ExpenseHeadEntity> {
    const expenseHead = await this.getExpenseHead(id);
    Object.assign(expenseHead, updateExpenseHeadDto);
    return this.expenseHeadRepo.save(expenseHead);
  }


  async deleteExpenseHead(id: string): Promise<ExpenseHeadEntity> {
    console.log("sdfasd", id);

    const expenseHead = await this.getExpenseHead(id);
    console.log(expenseHead);
    
    return this.expenseHeadRepo.remove(expenseHead);
  }
}
