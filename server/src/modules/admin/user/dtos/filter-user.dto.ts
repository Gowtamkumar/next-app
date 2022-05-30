import { IsArray, IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FilterUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password: string;


  @IsString()
  @IsNotEmpty()
  @IsOptional()
  userType: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  roles: string[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  isActive: boolean
}