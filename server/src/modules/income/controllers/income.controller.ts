import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { BaseApiSuccessResponse } from "src/common/dtos/base-api-response.dto";
import { Serialize } from "src/common/interceptor.ts/serialize.interceptor";
import { CreateIncomeDto } from "../dtos/create-income.dto";
import { FilterIncomeDto } from "../dtos/filter-income.dto";
import { IncomeDto } from "../dtos/income.dto";
import { UpdateIncomeDto } from "../dtos/update-income.dto";
import { IncomeService } from "../services/income.service";

// @Serialize(IncomeDto)
@Controller('incomes')
export class IncomeController {

  constructor(private readonly incomeService: IncomeService) { }

  @Get()
  async getIncomes(@Query() filterIncomeDto: FilterIncomeDto): Promise<BaseApiSuccessResponse<IncomeDto[]>> {
    const incomes = await this.incomeService.getIncomes(filterIncomeDto)

    return {
      success: true,
      message: "List of all Incomes",
      statusCode: "200",
      data: incomes
    }
  }

  @Get(':id')
  async getIncome(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<IncomeDto>> {
    const income = await this.incomeService.getIncome(id)

    return {
      success: true,
      message: "List of all Income",
      statusCode: "200",
      data: income
    }
  }

  @Post()
  async createIncome(@Body() createIncomeDto: CreateIncomeDto): Promise<BaseApiSuccessResponse<IncomeDto>> {
    const incomeheade = await this.incomeService.createIncome(createIncomeDto)

    return {
      success: true,
      message: "Create a new Income",
      statusCode: "200",
      data: incomeheade
    }
  }

  @Put(':id')
  async updateIncome(@Param('id') id: string, @Body() updateIncomeDto: UpdateIncomeDto): Promise<BaseApiSuccessResponse<IncomeDto>> {
    const incomeheade = await this.incomeService.updateIncome(id, updateIncomeDto);

    return {
      success: true,
      message: `Update a single Income of id #${id} successfully`,
      statusCode: "200",
      data: incomeheade
    }

  }

  @Delete(':id')
  async deleteIncome(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<IncomeDto>> {
    const incomeheade = await this.incomeService.deleteIncome(id);

    return {
      success: true,
      message: `Delete a single Income of id #${id} successfully`,
      statusCode: "200",
      data: incomeheade
    }
  }
}