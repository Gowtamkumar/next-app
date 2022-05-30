import { IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateModuleDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  note: string;

  @IsString()
  @IsNotEmpty()
  add: string;

  @IsString()
  @IsNotEmpty()
  edit: string;

  @IsString()
  @IsNotEmpty()
  view: string;

  @IsString()
  @IsNotEmpty()
  delete: string;
}