import { IsNumber, IsString } from "class-validator";

export class FilterExpenseHeadExpenseDto {

  @IsNumber()
  amount: number;

  @IsString()
  invoiceNo: string;

}