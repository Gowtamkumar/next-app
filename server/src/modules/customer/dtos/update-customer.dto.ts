import { PaymentTypeEnum } from "@common/enums/payment-type.enum"
import { preDealTypeEnum } from "@common/enums/pre-deal-type.enum"
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateCustomerDto {

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

    @IsBoolean()
    @IsNotEmpty()
    @IsOptional()
    check: boolean;

    @IsEnum(preDealTypeEnum)
    @IsNotEmpty()
    @IsOptional()
    preDealType: preDealTypeEnum

    @IsEnum(PaymentTypeEnum)
    @IsNotEmpty()
    @IsOptional()
    paymentType: PaymentTypeEnum

    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    amount: number

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    date: string

}