import { IsNumber, IsString, IsUUID } from "class-validator";

export class ExpenseHeadServiceValidaterDto {
  @IsUUID()
  expenseHeadId: string;

  @IsNumber()
  amount: number;

  @IsString()
  invoiceNo: string;

  @IsString()
  remarks: string;
}