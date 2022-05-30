import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('incomes')
export class IncomeEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "invoice_no", nullable: true })
  invoiceNo: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'numeric', scale: 2 })
  amount: number;

  @Column({ nullable: true })
  remarks: string

}