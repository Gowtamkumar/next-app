import { IsArray, IsBoolean, IsDefined, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;

  // @IsString()
  // @IsNotEmpty()
  // @IsOptional()
  // staffId: string;

  // @IsString()
  // @IsNotEmpty()
  // @IsOptional()
  // patientId: string;

  // @IsString()
  // @IsNotEmpty()
  // @IsOptional()
  // memberId: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  userType: string;

  @IsArray()
  @IsNotEmpty()
  @IsDefined()
  roles: string[];

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isActive: boolean

}