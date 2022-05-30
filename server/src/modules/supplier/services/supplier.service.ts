import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSupplierDto } from "../dtos/create-supplier.dto";
import { FilterSupplierDto } from "../dtos/filter-supplier.dto";
import { UpdateSupplierDto } from "../dtos/update-supplier.dto";
import { SupplierEntity } from "../entities/supplier.entity";
import { SupplierRepository } from "../repositories/supplier.repository";

@Injectable()
export class SupplierService {
    constructor(@InjectRepository(SupplierRepository) private readonly supplierRepo: SupplierRepository) { }

    async getSuppliers(filterSupplierDto: FilterSupplierDto): Promise<SupplierEntity[]> {
        return await this.supplierRepo.find(filterSupplierDto)
    }


    async getSupplier(id: string): Promise<SupplierEntity> {
        const supplier = await this.supplierRepo.findOne(id)
        if (!supplier) {
            throw new NotFoundException(`Not found id of #${id}`)
        }
        return supplier
    }



    async createSupplier(createSupplier: CreateSupplierDto): Promise<SupplierEntity> {
        const newSupplier = await this.supplierRepo.create(createSupplier);
        return this.supplierRepo.save(newSupplier)
    }



    async updateSupplier(updateSupplierDto: UpdateSupplierDto, id: string): Promise<SupplierEntity> {
        const updateSupplier = await this.getSupplier(id)
        Object.assign(updateSupplier, updateSupplierDto)
        return this.supplierRepo.save(updateSupplier)
    }



    async deleteSupplier(id: string): Promise<SupplierEntity> {
        const removeSupplier = await this.getSupplier(id)
        return this.supplierRepo.remove(removeSupplier)
    }

}