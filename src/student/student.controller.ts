import { Controller, Get, Param, Post, Body, Put, Patch, Delete} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){

    }

    @Get()
    getAll(){
        return this.studentService.getAllStudent()
}

// get studentbyId
    @Get(':id') // dynamic id
    getByid(@Param('id') id:string){
        return this.studentService.getStudentById(Number(id))
    }

//POST method
    @Post()
    create(@Body() body:{name:string, role:string}){
        return this.studentService.createStudent(body)
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() body:{name:string, role:string}){
        return this.studentService.updateStudent(Number(id), body)
    }

    @Patch(':id')
    partialUpdate(@Param('id') id:string, @Body() body: Partial <{name:string, role:string}>){
        return this.studentService.partialUpdateStudent(Number(id), body)
    }

    @Delete(':id')

    deleteStudent(@Param('id') id:string, ){
        return this.studentService.deleteStudent(Number(id))
    }
}
