import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  password: string;
}