import { Expose } from "class-transformer";

export class ExpenseDto {

  @Expose()
  expenseNo: number;
  
  @Expose()
  date: string;

}