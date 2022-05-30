import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { BaseApiSuccessResponse } from "src/common/dtos/base-api-response.dto";
import { Serialize } from "src/common/interceptor.ts/serialize.interceptor";
import { CreateExpenseHeadDto } from "../dtos/create-expense-head.dto";
import { ExpenseHeadDto } from "../dtos/expense-head.dto";
import { FilterExpenseHeadDto } from "../dtos/filter-expense-head.dto";
import { UpdateExpenseHeadDto } from "../dtos/update-expense-head.dto";
import { ExpenseHeadService } from "../services/expense-head.service";

// @Serialize(ExpenseHeadDto)
@Controller('expense-heads')
export class ExpenseHeadController {
  constructor(private readonly expenseHeadService: ExpenseHeadService) { }

  @Get()
  async getExpenseHeads(@Query() filterExpenseHeadDto: FilterExpenseHeadDto): Promise<BaseApiSuccessResponse<ExpenseHeadDto[]>> {
    const expenseHead = await this.expenseHeadService.getExpenseHeads(filterExpenseHeadDto);

    return {
      success: true,
      message: "List of all Expense Heads",
      statusCode: "200",
      data: expenseHead
    }
  }


  @Get(':id')
  async getExpenseHead(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ExpenseHeadDto>> {
    const expenseHead = await this.expenseHeadService.getExpenseHead(id);

    return {
      success: true,
      message: `Get a single Expense Head of id #${id} successfull`,
      statusCode: "200",
      data: expenseHead
    }
  }


  @Post()
  async createExpenseHead(@Body() createExpenseHeadDto: CreateExpenseHeadDto): Promise<BaseApiSuccessResponse<ExpenseHeadDto>> {
    const expenseHead = await this.expenseHeadService.createExpenseHead(createExpenseHeadDto);

    return {
      success: true,
      message: "created Expense Head",
      statusCode: "201",
      data: expenseHead
    }
  }


  @Put(':id')
  async updateExpenseHead(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateExpenseHeadDto: UpdateExpenseHeadDto
  ): Promise<BaseApiSuccessResponse<ExpenseHeadDto>> {
    const expenseHead = await this.expenseHeadService.updateExpenseHead(id, updateExpenseHeadDto);

    return {
      success: true,
      message: `Get a single Expense Head of id #${id} updated successfull`,
      statusCode: "200",
      data: expenseHead
    }
  }


  @Delete(':id')
  async deleteExpenseHead(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ExpenseHeadDto>> {
    const expenseHead = await this.expenseHeadService.deleteExpenseHead(id);

    return {
      success: true,
      message: `Get a single Expense Head of id #${id} Deleted successfull`,
      statusCode: "200",
      data: expenseHead
    }
  }

}