import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee)
    private employeeRepo: Repository<Employee>

)  {} // means we can apply crud operation here using injectRepo

async create(employeeData:Partial<Employee>):Promise<Employee>{
    const employee = this.employeeRepo.create(employeeData)
    return this.employeeRepo.save(employee)
}

async findall():Promise<Employee[]>{
return this.employeeRepo.find()
}

async findOneById(id:number):Promise<Employee>{
const employ = await this.employeeRepo.findOneBy({id})
    if(!employ){
    throw new NotFoundException("Not find id")
        }
return employ
}


async updateVal(id:number , updateddata:Partial<Employee>):Promise<Employee>{

    const employ = await this.employeeRepo.findOneBy({id})
    if(!employ){
        throw new NotFoundException("not found id")
    }
    const updated = Object.assign(employ, updateddata)
    return this.employeeRepo.save(updated)

}

async deleteval(id:number):Promise<{Message:string}>{
const res = await this.employeeRepo.delete(id)

if(res.affected===0){
    throw new NotFoundException(`Employee id ${id} not found`)
}
return {Message : `EmployeID ${id} has been deleted successfully`}
}

//! search query 

async search(filters:{name?:string; role?:string}):Promise<Employee[]>{

    const query = this.employeeRepo.createQueryBuilder('employee')
    if(filters.name){
        query.andWhere('employee.name ILIKE :name', {name :`%{filters.name}%`})
    }
      if (filters.role) {
    query.andWhere(
      'employee.role = :role',
      { role: filters.role }
    );
}
    return query.getMany()
}

}
