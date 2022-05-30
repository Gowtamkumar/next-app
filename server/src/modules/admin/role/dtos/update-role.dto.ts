import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateRoleDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  note: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean
  
}