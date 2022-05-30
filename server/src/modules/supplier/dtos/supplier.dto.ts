import { Expose } from "class-transformer"

export class SupplierDto {
    
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
    // storeId: string
}