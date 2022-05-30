import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ExpenseHeadEntity } from "./expense-head.entity";
import { ExpenseEntity } from "./expense.entity";

@Entity('expense_head_expense')
export class ExpenseHeadExpenseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'expense_id', type: 'uuid' })
  expenseId: string;

  @Column({ name: 'expense_head_id', type: 'uuid' })
  expenseHeadId: string;

  @Column({ type: 'numeric', scale: 2 })
  amount: number;

  @Column({ name: 'invoice_no' })
  invoiceNo: string;

  @Column({ nullable: true })
  remarks: string;

  @ManyToOne(_type => ExpenseEntity, expenses => expenses.expenseHeadExpenses)
  @JoinColumn({ name: 'expense_id' })
  expenses: ExpenseEntity

  @ManyToOne(_type => ExpenseHeadEntity, expensesHead => expensesHead.expenseHeadExpense, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'expense_head_id' })
  expensesHead: ExpenseHeadEntity

}