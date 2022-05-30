import { EntityRepository, Repository } from "typeorm";
import { IncomeEntity } from "../entites/income.entity";


@EntityRepository(IncomeEntity)
export class IncomeRepository extends Repository<IncomeEntity>{

  async genrateInvoiceNo(): Promise<number>{
    const {maxId} = await this.createQueryBuilder("income").select("Max(income.invoiceNo)", "maxId").getRawOne();
    return maxId ? Number(maxId)+1 : 1;
  }
}