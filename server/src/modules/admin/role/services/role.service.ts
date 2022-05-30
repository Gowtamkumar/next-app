import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRoleDto } from "../dtos/create-role.dto";
import { FilterRoleDto } from "../dtos/filter-role.dto";
import { UpdateRoleDto } from "../dtos/update-role.dto";
import { RoleEntity } from "../entities/role.entity";
import { RoleRepository } from "../repositories/role.repository";

@Injectable()
export class RoleService {

  constructor(@InjectRepository(RoleRepository) private readonly roleRepo: RoleRepository) { }


  getRoles(filterRoleDto: FilterRoleDto): Promise<RoleEntity[]> {
    return this.roleRepo.find(filterRoleDto);
  }


  async getRole(id: string): Promise<RoleEntity> {
    const role = await this.roleRepo.findOne(id);
    if (!role) {
      throw new NotFoundException(`Role of id: ${id} not found`)
    }
    return role;
  }


  createRole(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const role = this.roleRepo.create(createRoleDto);
    return this.roleRepo.save(role);
  }


  async updateRole(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    const role = await this.getRole(id);

    Object.assign(role, updateRoleDto);
    return this.roleRepo.save(role);
  }


  async deleteRole(id: string): Promise<RoleEntity> {
    const role = await this.getRole(id);
    return this.roleRepo.remove(role);
  }
}