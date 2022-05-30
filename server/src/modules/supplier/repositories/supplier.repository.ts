import { EntityRepository, Repository } from "typeorm";
import { SupplierEntity } from "../entities/supplier.entity";

@EntityRepository(SupplierEntity)
export class SupplierRepository extends Repository<SupplierEntity> { }