import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class ResetPasswordDto {

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  currentPassword: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  newPassword: string;
}