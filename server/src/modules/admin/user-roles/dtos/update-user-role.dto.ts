import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserRoleDto {

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  roleId: string;

}
