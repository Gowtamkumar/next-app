import { IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateExpenseHeadDto {

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  code: string;

  @IsString()
  @IsOptional()
  remarks: string;
}