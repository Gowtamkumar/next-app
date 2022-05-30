import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRoleDto } from '../dtos/create-user-role.dto';
import { FilterUserRoleDto } from '../dtos/filter-user-role.dto';
import { UpdateUserRoleDto } from '../dtos/update-user-role.dto';
import { UserRoleEntity } from '../entities/user-role.entity';
import { UserRoleRepository } from '../repositories/user-role.repository';


@Injectable()
export class UserRolesService {
  constructor(@InjectRepository(UserRoleRepository) private readonly UserRoleRepo: UserRoleRepository) { }

  async createUserRole(createUserRoleDto: CreateUserRoleDto): Promise<UserRoleEntity> {
    const userRole = await this.UserRoleRepo.create(createUserRoleDto)
    return this.UserRoleRepo.save(userRole)
  }


  getUserRoles(filterUserRoleDto: FilterUserRoleDto): Promise<UserRoleEntity[]> {
    return this.UserRoleRepo.find(filterUserRoleDto)
  }


  async getUserRole(id: string): Promise<UserRoleEntity> {
    const userRole = await this.UserRoleRepo.findOne(id)
    if (!userRole) {
      throw new NotFoundException(`User Role of id #${id} not found`)
    }
    return userRole;
  }


  async updateUserRole(id: string, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRoleEntity> {
    const userRole = await this.getUserRole(id)
    Object.assign(userRole, updateUserRoleDto)
    return this.UserRoleRepo.save(userRole)
  }


  async deleteUserRole(id: string): Promise<UserRoleEntity> {
    const userRole = await this.getUserRole(id)
    return this.UserRoleRepo.remove(userRole)
  }

}
