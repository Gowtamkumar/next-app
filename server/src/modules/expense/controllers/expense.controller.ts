import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { BaseApiSuccessResponse } from "src/common/dtos/base-api-response.dto";
import { Serialize } from "src/common/interceptor.ts/serialize.interceptor";
import { CreateExpenseDto } from "../dtos/create-expense.dto";
import { ExpenseDto } from "../dtos/expense.dto";
import { FilterExpenseDto } from "../dtos/filter-expense.dto";
import { UpdateExpenseDto } from "../dtos/update-expense.dto";
import { ExpenseService } from "../services/expense.service";

// @Serialize(ExpenseDto)
@Controller('expenses')
export class ExpenseController {
  constructor(
    private readonly expenseService: ExpenseService
  ) { }

  @Get()
  async getExpenses(@Query() filterExpenseDto: FilterExpenseDto): Promise<BaseApiSuccessResponse<ExpenseDto[]>> {
    const expense = await this.expenseService.getExpenses(filterExpenseDto);

    return {
      success: true,
      message: "List of all Expenses",
      statusCode: "200",
      data: expense
    }
  }

  @Get(':id')
  async getExpense(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ExpenseDto>> {
    const expense = await this.expenseService.getExpense(id);
    return {
      success: true,
      message: "List of a Expense",
      statusCode: "200",
      data: expense
    }
  }

  @Post()
  async createExpense(@Body() createExpenseDto: CreateExpenseDto): Promise<BaseApiSuccessResponse<ExpenseDto>> {
    const expense = await this.expenseService.createExpense(createExpenseDto);

    return {
      success: true,
      message: "List of created Expense",
      statusCode: "201",
      data: expense
    }
  }

  @Put(':id')
  async updateExpense(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateExpenseDto: UpdateExpenseDto
  ): Promise<BaseApiSuccessResponse<ExpenseDto>> {
    const expense = await this.expenseService.updateExpense(id, updateExpenseDto);

    return {
      success: true,
      message: `Get a single Expense of id #${id} Deleted successfull`,
      statusCode: "200",
      data: expense
    }
  }

  @Delete(':id')
  async deleteExpense(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ExpenseDto>> {
    const expense = await this.expenseService.deleteExpense(id);

    return {
      success: true,
      message: `Get a single Expense of id #${id} Deleted successfull`,
      statusCode: "200",
      data: expense
    }
  }
}