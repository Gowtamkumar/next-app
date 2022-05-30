import { EntityRepository, Repository } from "typeorm";
import { ExpenseHeadEntity } from "../entities/expense-head.entity";

@EntityRepository(ExpenseHeadEntity)
export class ExpenseHeadRepository extends Repository<ExpenseHeadEntity> {}