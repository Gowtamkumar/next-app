import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateIncomeDto } from "../dtos/create-income.dto";
import { FilterIncomeDto } from "../dtos/filter-income.dto";
import { UpdateIncomeDto } from "../dtos/update-income.dto";
import { IncomeEntity } from "../entites/income.entity";
import { IncomeRepository } from "../repositories/income.repository";

@Injectable()
export class IncomeService {
  constructor(@InjectRepository(IncomeRepository) private readonly imcomeRepo: IncomeRepository) { }

  getIncomes(filterIncomeDto: FilterIncomeDto): Promise<IncomeEntity[]> {
    return this.imcomeRepo.find(filterIncomeDto)
  }


  async getIncome(id: string): Promise<IncomeEntity> {
    const income = await this.imcomeRepo.findOne(id)
    if (!income) {
      throw new NotFoundException(`Not found id of #${id}`)
    }
    return income

  }

  async createIncome(createIncomeDto: CreateIncomeDto): Promise<IncomeEntity> {
    const income = await this.imcomeRepo.create(createIncomeDto);
    income.invoiceNo = await this.imcomeRepo.genrateInvoiceNo();
    return this.imcomeRepo.save(income)
  }


  async updateIncome(id: string, updateIncomeDto: UpdateIncomeDto): Promise<IncomeEntity> {

    const income = await this.getIncome(id)
    Object.assign(income, updateIncomeDto)
    return this.imcomeRepo.save(income)

  }


  async deleteIncome(id: string): Promise<IncomeEntity> {
    const incomehead = await this.getIncome(id)
    return this.imcomeRepo.remove(incomehead)


  }
}