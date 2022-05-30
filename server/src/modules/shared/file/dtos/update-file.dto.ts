import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min } from "class-validator";

export class UpdateFileDto {

  @IsNotEmpty()
  @IsString()
  fieldname: string;

  // @IsNotEmpty()
  // @IsString()
  // filename: string;

  // @IsNotEmpty()
  // @IsString()
  // encoding: string;

  // @IsNotEmpty()
  // @IsString()
  // mimetype: string;

  // @IsNumber()
  // @IsNotEmpty()
  // size: number;


  @IsUUID()
  @IsOptional()
  memberId: string;

  @IsUUID()
  @IsOptional()
  contactId: string;

  @IsUUID()
  @IsOptional()
  documentId: string;

  @IsUUID()
  @IsOptional()
  nomineeId: string;

  @IsUUID()
  @IsOptional()
  employeeId: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}