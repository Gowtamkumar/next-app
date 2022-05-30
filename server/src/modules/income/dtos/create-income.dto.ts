import { IsBoolean, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateIncomeDto {

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  date: string;

  @IsNumber()
  @IsDefined()
  amount: number;

  @IsString()
  @IsOptional()
  remarks: string




}