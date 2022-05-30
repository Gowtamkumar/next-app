import { IsArray, IsDate, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateExpenseDto {

  // @IsString()
  // @IsNotEmpty()
  // @IsDefined()
  // expenseNo: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  date: string;

  @IsArray()
  @IsNotEmpty()
  @IsDefined()
  expenseHeadExpense: string[];

}