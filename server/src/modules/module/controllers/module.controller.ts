import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { BaseApiSuccessResponse } from "src/common/dtos/base-api-response.dto";
import { Serialize } from "src/common/interceptor.ts/serialize.interceptor";
import { CreateModuleDto } from "../dtos/create-module.dto";
import { FilterModuleDto } from "../dtos/filter-module.dto";
import { ModuleDto } from "../dtos/module.dto";
import { UpdateModuleDto } from "../dtos/update-module.dto";
import { ModuleService } from "../services/module.service";

Serialize(ModuleDto)
@Controller('modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) { }

  @Get()
  async getModules(@Query() filterModuleDto: FilterModuleDto): Promise<BaseApiSuccessResponse<ModuleDto[]>> {
    const module = await this.moduleService.getModules(filterModuleDto);
    return {
      success: true,
      message: "List of all Modules",
      statusCode: "200",
      data: module
    }
  }

  @Get(':id')
  async getModule(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ModuleDto>> {
    const module = await this.moduleService.getModule(id);
    return {
      success: true,
      message: "List of a Module",
      statusCode: "200",
      data: module
    }
  }

  @Post()
  async createModule(@Body() createModuleDto: CreateModuleDto): Promise<BaseApiSuccessResponse<ModuleDto>> {
    const module = await this.moduleService.createModule(createModuleDto);
    return {
      success: true,
      message: "List of created Module",
      statusCode: "201",
      data: module
    }
  }

  @Put(':id')
  async updateModule(@Param('id', ParseUUIDPipe) id: string, @Body() updateModuleDto: UpdateModuleDto): Promise<BaseApiSuccessResponse<ModuleDto>> {
    const module = await this.moduleService.updateModule(id, updateModuleDto);
    return {
      success: true,
      message: "List of updated Module",
      statusCode: "200",
      data: module
    }
  }

  @Delete(':id')
  async deleteModule(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<ModuleDto>> {
    const module = await this.moduleService.deleteModule(id);
    return {
      success: true,
      message: `Module of id: ${id} deleted successfully`,
      statusCode: "200",
      data: module
    }
  }
}