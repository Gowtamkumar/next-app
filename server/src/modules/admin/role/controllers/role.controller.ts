import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common"
import { BaseApiSuccessResponse } from "src/common/dtos/base-api-response.dto";
import { Serialize } from "src/common/interceptor.ts/serialize.interceptor";
import { CreateRoleDto } from "../dtos/create-role.dto";
import { FilterRoleDto } from "../dtos/filter-role.dto";
import { RoleDto } from "../dtos/role.dto";
import { UpdateRoleDto } from "../dtos/update-role.dto";
import { RoleService } from "../services/role.service"

// @Serialize(RoleDto)
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) { }

  @Get()
  async getRoles(filterRoleDto: FilterRoleDto): Promise<BaseApiSuccessResponse<FilterRoleDto[]>> {
    const role = await this.roleService.getRoles(filterRoleDto);

    return {
      success: true,
      message: "List of all Roles",
      statusCode: "200",
      data: role
    }
  }


  @Get(':id')
  async getRole(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<FilterRoleDto>> {
    const role = await this.roleService.getRole(id);
    return {
      success: true,
      message: "List of a Role",
      statusCode: "200",
      data: role
    }

  }


  @Post()
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<BaseApiSuccessResponse<FilterRoleDto>> {
    const role = await this.roleService.createRole(createRoleDto);
    return {
      success: true,
      message: "List of created Role",
      statusCode: "201",
      data: role
    }
  }


  @Put(':id')
  async updateRole(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRoleDto: UpdateRoleDto
  ): Promise<BaseApiSuccessResponse<FilterRoleDto>> {
    const role = await this.roleService.updateRole(id, updateRoleDto);
    return {
      success: true,
      message: `Role of id #${id} Updated successfull`,
      statusCode: "200",
      data: role
    }
  }


  @Delete(':id')
  async deleteRole(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<FilterRoleDto>> {
    const role = await this.roleService.deleteRole(id);

    return {
      success: true,
      message: `Role of id #${id} Deleted successfull`,
      statusCode: "200",
      data: role
    }
  }

}