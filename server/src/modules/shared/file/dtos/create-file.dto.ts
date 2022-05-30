import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min } from "class-validator";

export class CreateFileDto {

  // @IsNotEmpty()
  // @IsString()
  // @IsDefined()
  // fieldname: string;

  // @IsNotEmpty()
  // @IsString()
  // @IsDefined()
  // filename: string;

  // @Column()
  // encoding: number;

  // @IsNotEmpty()
  // @IsString()
  // @IsDefined()  
  // mimetype: string;

  // @IsNumber()
  // @IsDefined()
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