import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { BaseApiSuccessResponse } from "src/common/dtos/base-api-response.dto";
import { Serialize } from "src/common/interceptor.ts/serialize.interceptor";
import { CreateExpenseHeadExpenseDto } from "../dtos/create-expense-head-expense.dto";
import { ExpenseHeadExpenseDto } from "../dtos/expense-head-expense.dto";
import { FilterExpenseHeadExpenseDto } from "../dtos/filter-expense-head-expense.dto";
import { UpdateExpenseHeadExpenseDto } from "../dtos/update-expense-head-expense.dto";
import { ExpenseHeadExpenseService } from "../services/expense-head-expense.service";

// @Serialize(ExpenseHeadDto)
@Controller('expense-head-expense')
export class ExpenseHeadExpenseController {
  constructor(private readonly expenseHeadExpenseService: ExpenseHeadExpenseService) { }

  @Get()
  async getExpenseHeadExpenses(@Query() filterExpenseHeadExpenseDto: FilterExpenseHeadExpenseDto)
    : Promise<BaseApiSuccessResponse<ExpenseHeadExpenseDto[]>> {
    const expenseHeadExpenses = await this.expenseHeadExpenseService.getExpenseHeadExpenses(filterExpenseHeadExpenseDto);

    return {
      success: true,
      message: "List of all Expense Head Expense",
      statusCode: "200",
      data: expenseHeadExpenses
    }
  }


  @Get(':id')
  async getExpenseHeadExpense(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ExpenseHeadExpenseDto>> {
    const expenseHeadExpense = await this.expenseHeadExpenseService.getExpenseHeadExpense(id);

    return {
      success: true,
      message: `Get a single Expense Head Expense of id #${id} successfull`,
      statusCode: "200",
      data: expenseHeadExpense
    }
  }


  @Post()
  async createExpenseHeadExpense(@Body() createExpenseHeadExpenseDto: CreateExpenseHeadExpenseDto): Promise<BaseApiSuccessResponse<ExpenseHeadExpenseDto>> {
    const expenseHeadExpense = await this.expenseHeadExpenseService.createExpenseHeadExpense(createExpenseHeadExpenseDto);

    return {
      success: true,
      message: "created Expense Head Expense",
      statusCode: "201",
      data: expenseHeadExpense
    }
  }


  @Put(':id')
  async updateExpenseHeadExpense(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateExpenseHeadExpenseDto: UpdateExpenseHeadExpenseDto
  ): Promise<BaseApiSuccessResponse<ExpenseHeadExpenseDto>> {
    const expenseHeadExpense = await this.expenseHeadExpenseService.updateExpenseHeadExpense(id, updateExpenseHeadExpenseDto);

    return {
      success: true,
      message: `Get a single Expense Head Expense of id #${id} updated successfull`,
      statusCode: "200",
      data: expenseHeadExpense
    }
  }


  @Delete(':id')
  async deleteExpenseHeadExpense(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ExpenseHeadExpenseDto>> {
    const expenseHeadExpense = await this.expenseHeadExpenseService.deleteExpenseHeadExpense(id);

    return {
      success: true,
      message: `Get a single Expense Head Expense of id #${id} Deleted successfull`,
      statusCode: "200",
      data: expenseHeadExpense
    }
  }

}