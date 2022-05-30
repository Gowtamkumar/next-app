import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('suppliers')
export class SupplierEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({ nullable: true })
    email: string

    @Column({ name: 'phone_no' })
    phoneNo: string

    @Column({ nullable: true })
    address: string

    
    // @OneToMany(_type => PaymentEntity, payments => payments.supplier, { eager: true })
    // payments: PaymentEntity[]


}