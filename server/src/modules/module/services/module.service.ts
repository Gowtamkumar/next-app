import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateModuleDto } from "../dtos/create-module.dto";
import { FilterModuleDto } from "../dtos/filter-module.dto";
import { UpdateModuleDto } from "../dtos/update-module.dto";
import { ModuleEntity } from "../entities/module.entity";
import { ModuleRepository } from "../repositories/module.repository";

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleRepository) private readonly moduleRepo: ModuleRepository
  ) { }

  getModules(filterModuleDto: FilterModuleDto): Promise<ModuleEntity[]> {
    return this.moduleRepo.find(filterModuleDto);
  }

  async getModule(id: string): Promise<ModuleEntity> {
    const module = await this.moduleRepo.findOne(id);
    if (!module) {
      throw new NotFoundException(`Module of id: ${id} not found`);
    }
    return module;
  }

  createModule(createModuleDto: CreateModuleDto): Promise<ModuleEntity> {
    const module = this.moduleRepo.create(createModuleDto);
    return this.moduleRepo.save(module);
  }

  async updateModule(id: string, updateModuleDto: UpdateModuleDto): Promise<ModuleEntity> {
    const module = await this.getModule(id);
    Object.assign(module, updateModuleDto);
    return this.moduleRepo.save(module);
  }

  async deleteModule(id: string): Promise<ModuleEntity> {
    const module = await this.getModule(id);
    return this.moduleRepo.remove(module);
  }
}