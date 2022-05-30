import { BaseApiSuccessResponse } from "@common/dtos/base-api-response.dto";
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { CreateCustomerDto } from "../dtos/create-customer.dto";
import { CustomerDto } from "../dtos/customer.dto";
import { FilterCustomerDto } from "../dtos/filter-contomer.dto";
import { UpdateCustomerDto } from "../dtos/update-customer.dto";
import { CustomerService } from "../services/customer.service";

@Controller('customers')
export class CustomerController {
	constructor(private readonly customersService: CustomerService) { }

	// @Serialize(CustomerDto)
	@Get()
	async getCustomers(@Query() filterCustomer: FilterCustomerDto): Promise<BaseApiSuccessResponse<CustomerDto[]>> {
		const customers = await this.customersService.getCustomers(filterCustomer);

		return {
			success: true,
			message: "List of all customers",
			statusCode: "200",
			data: customers

		}
	}


	@Get(':id')
	async getCustomer(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<CustomerDto>> {
		const customer = await this.customersService.getCustomer(id);

		return {
			success: true,
			message: "List of all customers",
			statusCode: "200",
			data: customer

		}
	}


	@Post()
	async createCustomer(@Body() createCustomer: CreateCustomerDto): Promise<BaseApiSuccessResponse<CustomerDto>> {
		const newCustomer = await this.customersService.createCustomer(createCustomer);

		return {
			success: true,
			message: "Create a new customers",
			statusCode: "200",
			data: newCustomer
		}
	}


	@Put(':id')
	async updateCustomer(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateCustomerDto: UpdateCustomerDto
	): Promise<BaseApiSuccessResponse<CustomerDto>> {
		const updateCustomer = await this.customersService.updateCustomer(updateCustomerDto, id)

		return {
			success: true,
			message: "Update a customer",
			statusCode: "200",
			data: updateCustomer
		}
	}


	@Delete(':id')
	async deleteCustomer(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<CustomerDto>> {
		const deletecustomer = await this.customersService.deleteCustomer(id)

		return {
			success: true,
			message: "Delete a customer",
			statusCode: "200",
			data: deletecustomer
		}
	}


}