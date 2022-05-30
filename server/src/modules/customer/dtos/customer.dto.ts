import { Expose } from "class-transformer"

export class CustomerDto {

    @Expose()
    id: string

    @Expose()
    name: string

    @Expose()
    email: string

    @Expose()
    phoneNo: string

    @Expose()
    address: string

    // @Expose()
    // check: boolean;

    // @Expose()
    // preDealType: string

    // @Expose()
    // amount: number

    // @Expose()
    // date: string

}