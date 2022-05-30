import { Expose } from "class-transformer";

export class ExpenseHeadDto {

  @Expose()
  name: string;

  @Expose()
  code: string;

  @Expose()
  remarks: string;
}