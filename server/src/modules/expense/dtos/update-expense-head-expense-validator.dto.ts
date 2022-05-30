import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class UpdateExpenseHeadExpenseValidatorDto {

  @IsUUID()
  id: string;

  @IsUUID()
  @IsNotEmpty()
  expenseHeadId: string;

  @IsNumber()
  @IsNotEmpty()
  amaunt: number;

  @IsString()
  @IsNotEmpty()
  invoiceNo: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

  @IsBoolean()
  create: boolean;

  @IsBoolean()
  update: boolean;

  @IsBoolean()
  remove: boolean;
}