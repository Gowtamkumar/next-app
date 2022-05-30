import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExpenseHeadExpenseEntity } from "./expense-head-expense.entity";

@Entity('expenses')
export class ExpenseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'expense_no' })
  expenseNo: number;

  @Column({ type: 'date' })
  date: string;

  @OneToMany(_type => ExpenseHeadExpenseEntity, expenseHeadExpenses => expenseHeadExpenses.expenses)
  expenseHeadExpenses: ExpenseHeadExpenseEntity[]

}