import { IsEmail, IsString } from "class-validator"

export class FilterCustomerDto {

    @IsString()
    id: string

    @IsString()
    name: string

    @IsString()
    email: string

    @IsEmail()
    phoneNo: string

}