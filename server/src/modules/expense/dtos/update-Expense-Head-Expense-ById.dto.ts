import { IsArray, IsDate, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateExpenseHeadExpenseByIdDto {

  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsNotEmpty()
  expenseId: string;

  @IsUUID()
  @IsNotEmpty()
  expenseHeadId: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  invoiceNo: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

}