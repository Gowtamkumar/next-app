import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ExpenseHeadExpenseEntity } from "./expense-head-expense.entity";
import { ExpenseEntity } from "./expense.entity";

@Entity('expense_heads')
export class ExpenseHeadEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  remarks: string;

  @OneToMany(_type => ExpenseHeadExpenseEntity, expenseHeadExpense => expenseHeadExpense.expensesHead)
  expenseHeadExpense: ExpenseHeadExpenseEntity[]

}