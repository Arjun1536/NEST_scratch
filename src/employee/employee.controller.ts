import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { retry } from 'rxjs';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService
    ){}

    @Get()
    getEmployee(){
        return "employee details feched"
    }

    @Post()
    async createEmployee(@Body() body: Partial<Employee>):Promise<Employee>{

        return this.employeeService.create(body)
    }

    @Get("/all")
    getData():Promise<Employee[]>{
        return this.employeeService.findall()
    }
    //^ search route
    @Get("/search")
    async searchdata(@Query('name')name?:string, @Query('role')role?:string):Promise<Employee[]>{
            return this.employeeService.search({name,role})
    }


    @Get(':id')
    getById(@Param('id')id:number):Promise<Employee>{
        return this.employeeService.findOneById(id)
    }

    @Put(':id')
    updateData(@Param('id')id:number,  @Body() body :Partial<Employee>){
        return this.employeeService.updateVal(id,body)
    }

    @Delete(':id')
    deletedVal(@Param('id')id:number ):Promise<{Message:string}>{
        return this.employeeService.deleteval(id)
    }
}
