import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CustomersService } from './customers.service';
import { createCustomerDto } from '../DTO/createcudtomer.dto';
import { updateCustomerDto } from '../DTO/update-customer.dto';
import { Throttle, SkipThrottle } from '@nestjs/throttler';
//                    
@Controller('customers')

export class CustomersController {

    constructor(private readonly customersService: CustomersService) {}

    @Throttle({default : {ttl: 3000, limit: 5}})
   @Get()
    getAllCustomers() {
        return this.customersService.getAllCustomers();
    }
    @Get(':id')
    getAllCustomersByid(@Param('id', ParseIntPipe) id: number) {
        return this.customersService.getAllCustomersByid(id);
    }

    @Post()
    createCustomer(@Body(ValidationPipe) createCustomerDto: Prisma.customersCreateInput) {
        return this.customersService.createCustomer(createCustomerDto);
    }
    @Patch(':id')
    updateCustomer(@Body(ValidationPipe) updateCustomerDto: Prisma.customersUpdateInput, @Param('id', ParseIntPipe) id: number) {
        return this.customersService.updateCustomer(updateCustomerDto, id);
    }
    @Delete(':id')
    deleteCustomer(@Param('id', ParseIntPipe) id: number) {
        return this.customersService.deleteCustomer(id);
    }
}
