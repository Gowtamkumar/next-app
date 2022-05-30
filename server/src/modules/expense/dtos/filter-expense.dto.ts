import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FilterExpenseDto {

  @IsString()
  date: string;

  @IsNumber()
  expenseNo: number;

}