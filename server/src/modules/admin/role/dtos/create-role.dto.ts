import { IsBoolean, IsDefined, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRoleDto {

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  note: string;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  isActive: boolean
}