import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateModuleDto {

  @IsString()
  @IsDefined()
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