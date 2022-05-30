import { IsBoolean, IsDefined, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class CreateUserRoleDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  roleId: string;

}
