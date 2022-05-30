import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateExpenseHeadDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  remarks: string;
}