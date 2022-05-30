import { EntityRepository, Repository } from "typeorm";
import { ModuleEntity } from "../entities/module.entity";

@EntityRepository(ModuleEntity)

export class ModuleRepository extends Repository<ModuleEntity> { }