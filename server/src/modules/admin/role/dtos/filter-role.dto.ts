import { IsBoolean, IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FilterRoleDto {
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