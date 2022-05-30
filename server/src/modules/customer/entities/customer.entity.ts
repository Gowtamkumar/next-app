
import { preDealTypeEnum } from "@common/enums/pre-deal-type.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class CustomerEntity {

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

    @Column({ type: "decimal", nullable: true })
    amount: number

    // @Column({ name: 'payment_method', type: 'enum', enum: paymentMethodEnum, default: paymentMethodEnum.CashPayment })
    // paymentMethod: paymentMethodEnum

    @Column({ nullable: true })
    check: boolean

    @Column({ type: 'date', nullable: true })
    date: string

    @Column({ name: 'pre_deal_type', type: 'enum', enum: preDealTypeEnum, nullable: true })
    preDealType: preDealTypeEnum

}