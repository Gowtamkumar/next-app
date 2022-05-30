import { Expose } from "class-transformer";

export class IncomeDto {
  @Expose()
  id: string;

  @Expose()
  invoiceNo: number;

  @Expose()
  date: string;

  @Expose()
  amount: number;

  @Expose()
  remarks: string


}