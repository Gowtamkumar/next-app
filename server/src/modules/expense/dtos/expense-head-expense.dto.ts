import { Expose } from "class-transformer";
export class ExpenseHeadExpenseDto {

  @Expose()
  expenseId: string;

  @Expose()
  expenseHeadId: string;

  @Expose()
  amount: number;

  @Expose()
  invoiceNo: string;

  @Expose()
  remarks: string;

}