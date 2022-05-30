import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseUUIDPipe, Query } from '@nestjs/common';
import { UserRolesService } from '../services/user-roles.service';
import { CreateUserRoleDto } from '../dtos/create-user-role.dto';
import { UpdateUserRoleDto } from '../dtos/update-user-role.dto';
import { UserRoleDto } from '../dtos/user-role.dto';
import { BaseApiSuccessResponse } from 'src/common/dtos/base-api-response.dto';
import { Serialize } from 'src/common/interceptor.ts/serialize.interceptor';
import { FilterUserRoleDto } from '../dtos/filter-user-role.dto';

// @Serialize(UserRoleDto)
@Controller('user-roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) { }

  @Post()
  async createUserRole(@Body() createUserRoleDto: CreateUserRoleDto): Promise<BaseApiSuccessResponse<UserRoleDto>> {
    const userRole = await this.userRolesService.createUserRole(createUserRoleDto);

    return {
      success: true,
      message: `Create a new User Role`,
      statusCode: "201",
      data: userRole
    }
  }


  @Get()
  async getUserRoles(@Query() filterUserRoleDto: FilterUserRoleDto): Promise<BaseApiSuccessResponse<UserRoleDto[]>> {
    const userRole = await this.userRolesService.getUserRoles(filterUserRoleDto);

    return {
      success: true,
      message: `List of all user Roles`,
      statusCode: "200",
      data: userRole
    }
  }


  @Get(':id')
  async getUserRole(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<UserRoleDto>> {
    const userRole = await this.userRolesService.getUserRole(id);

    return {
      success: true,
      message: `Get a single user Role of id #${id} successfully`,
      statusCode: "200",
      data: userRole
    }
  }


  @Put(':id')
  async updateUserRole(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserRoleDto: UpdateUserRoleDto
  ): Promise<BaseApiSuccessResponse<UserRoleDto>> {
    const userRole = await this.userRolesService.updateUserRole(id, updateUserRoleDto);

    return {
      success: true,
      message: `Update a single user Role of id #${id} successfully`,
      statusCode: "200",
      data: userRole
    }
  }


  @Delete(':id')
  async deleteUserRole(@Param('id', ParseUUIDPipe) id: string) {
    const userRole = await this.userRolesService.deleteUserRole(id);

    return {
      success: true,
      message: `Delete a single user Role of id #${id} successfully`,
      statusCode: "200",
      data: userRole
    }
  }

}
