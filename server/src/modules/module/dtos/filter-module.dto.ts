import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FilterModuleDto {

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  note: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  add: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  edit: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  view: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  delete: string;
}