import { IsArray, IsDate, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateExpenseHeadExpenseDto {

  @IsUUID()
  @IsNotEmpty()
  @IsDefined()
  expenseId: string;

  @IsUUID()
  @IsNotEmpty()
  @IsDefined()
  expenseHeadId: string;

  @IsNumber()
  @IsNotEmpty()
  @IsDefined()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  invoiceNo: string;

  @IsString()
  @IsOptional()
  remarks: string;

}