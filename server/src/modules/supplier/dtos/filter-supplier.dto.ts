import { IsString } from "class-validator"

export class FilterSupplierDto {
    @IsString()
    name: string

    @IsString()
    email: string

    @IsString()
    phoneNo: string

    @IsString()
    storeId: string
}