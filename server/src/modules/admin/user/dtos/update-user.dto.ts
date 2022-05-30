import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsArray()
  roles: string[];

  @IsBoolean()
  isActive: boolean

}