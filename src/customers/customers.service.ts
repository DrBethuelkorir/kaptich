import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { customers, Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';


@Injectable()
export class CustomersService {

    constructor(private readonly databaseService: DatabaseService) {}
    
    async getAllCustomersByid(id: number) {
      const customer = await this.databaseService.customers.findUnique({
        where: { id },
      });
        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        return customer;
    }
    async getAllCustomers(){
        const customers = await this.databaseService.customers.findMany();
        if (!customers) {
            throw new NotFoundException(`No customers found`);
        }
        return customers;
    }
   async createCustomer(createCustomerDto: Prisma.customersCreateInput) {
        return this.databaseService.customers.create({
            data: createCustomerDto
        });
    }
    async updateCustomer(updateCustomerDto: Prisma.customersUpdateInput, id: number) {
        return this.databaseService.customers.update({
            where: { id },
            data: updateCustomerDto
        });
    }
    async deleteCustomer(id: number) {
        return this.databaseService.customers.delete({
            where: { id }
        });
    }
}

    