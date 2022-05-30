import { IsDefined, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateSupplierDto {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    email: string

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    phoneNo: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    address: string

    @IsUUID()
    @IsNotEmpty()
    @IsOptional()
    storeId: string
}