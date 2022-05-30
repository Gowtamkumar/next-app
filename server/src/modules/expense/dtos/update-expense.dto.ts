import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class UpdateExpenseDto {

  // @IsString()
  // @IsNotEmpty()
  // expenseNo: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsArray()
  @IsNotEmpty()
  expenseHeadExpense: string[];
}