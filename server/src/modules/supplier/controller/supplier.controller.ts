import { BaseApiSuccessResponse } from "@common/dtos/base-api-response.dto";
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { CreateSupplierDto } from "../dtos/create-supplier.dto";
import { SupplierDto } from "../dtos/supplier.dto";
import { FilterSupplierDto } from "../dtos/filter-supplier.dto";
import { UpdateSupplierDto } from "../dtos/update-supplier.dto";
import { SupplierService } from "../services/supplier.service";

@Controller('suppliers')
export class SupplierController {
    constructor(private readonly supplierService: SupplierService) { }

    @Get()
    async getSuppliers(@Query() filterSupplierDto: FilterSupplierDto): Promise<BaseApiSuccessResponse<SupplierDto[]>> {
        const supplier = await this.supplierService.getSuppliers(filterSupplierDto);

        return {
            success: true,
            message: "List of all supplier",
            statusCode: "200",
            data: supplier

        }
    }


    @Get(':id')
    async getSupplier(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<SupplierDto>> {
        const customer = await this.supplierService.getSupplier(id);

        return {
            success: true,
            message: "Get a supplier",
            statusCode: "200",
            data: customer

        }
    }



    @Post()
    async createSupplier(@Body() createSupplier: CreateSupplierDto): Promise<BaseApiSuccessResponse<SupplierDto>> {
        const newSupplier = await this.supplierService.createSupplier(createSupplier);

        return {
            success: true,
            message: "Create a new supplier",
            statusCode: "200",
            data: newSupplier

        }
    }



    @Put(':id')
    async updateSupplier(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateSupplierDto: UpdateSupplierDto
    ): Promise<BaseApiSuccessResponse<SupplierDto>> {
        const updateSupplier = await this.supplierService.updateSupplier(updateSupplierDto, id)

        return {
            success: true,
            message: "Update a supplier",
            statusCode: "200",
            data: updateSupplier

        }
    }



    @Delete(':id')
    async deleteSupplier(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<SupplierDto>> {
        const deleteSupplier = await this.supplierService.deleteSupplier(id)

        return {
            success: true,
            message: "Delete a supplier",
            statusCode: "200",
            data: deleteSupplier

        }
    }


}