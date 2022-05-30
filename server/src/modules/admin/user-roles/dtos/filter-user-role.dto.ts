import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FilterUserRoleDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  roleId: string;

}