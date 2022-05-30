
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateSupplierDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    email: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    phoneNo: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    address: string
}