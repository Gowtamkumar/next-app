import { paymentMethodEnum } from "@common/enums/payment-method.enum";
import { PaymentTypeEnum } from "@common/enums/payment-type.enum";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { CreateCustomerDto } from "../dtos/create-customer.dto";
import { FilterCustomerDto } from "../dtos/filter-contomer.dto";
import { UpdateCustomerDto } from "../dtos/update-customer.dto";
import { CustomerEntity } from "../entities/customer.entity";

import { CustomerRepository } from "../repositories/customer.repository";

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerRepository)
        private readonly customerRepo: CustomerRepository,
        // private readonly paymentService: PaymentService,

    ) { }

    getCustomers(filterCustomer: FilterCustomerDto): Promise<CustomerEntity[]> {
        return this.customerRepo.find(filterCustomer)
    }

    async getCustomer(id: string): Promise<CustomerEntity> {
        const customer = await this.customerRepo.findOne({ where: { id: id }, relations: ['Sales', "Sales.saleitems"] })
        if (!customer) {
            throw new NotFoundException(`Not found id of #${id}`)
        }

        return customer
    }

    @Transactional()
    async createCustomer(createCustomer: CreateCustomerDto): Promise<CustomerEntity> {
        console.log("createCustomer", createCustomer);
        const { amount, date, preDealType, paymentType } = createCustomer

        const newCustomer = await this.customerRepo.create(createCustomer);
        await this.customerRepo.save(newCustomer)

        // if (Number(amount) > 0 && amount !== null) {
        //     const payment = { customerId: newCustomer.id, date, paymentType, preDealType, amount, paymentMethod: paymentMethodEnum.CashPayment }
        //     await this.paymentService.createPaymentCustomer(payment);
        // }

        return newCustomer
    }

    async updateCustomer(updateCustomerDto: UpdateCustomerDto, id: string): Promise<CustomerEntity> {
        const customer = await this.getCustomer(id)
        Object.assign(customer, updateCustomerDto)
        return this.customerRepo.save(customer)
    }

    async deleteCustomer(id: string): Promise<CustomerEntity> {

        const removeCustomer = await this.getCustomer(id)
        return this.customerRepo.remove(removeCustomer)
    }

}