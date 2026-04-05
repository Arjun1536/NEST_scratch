import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './DTO/create-customer.dto';
import { UppercasePipe } from '../common/pipe/uppercase/uppercase.pipe';

@Controller('customer')
export class CustomerController {
    constructor (private readonly customerService : CustomerService){}

    @Get()

    getAll(){
        return this.customerService.getAllCustomer()
    }
    
    @Post()
    addCustomer(@Body(UppercasePipe) createCustomerDTO:CreateCustomerDto){
        return this.customerService.addCustomer(createCustomerDTO)
    }


}
