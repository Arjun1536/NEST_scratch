import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {
            id:1, name:"Arjun", role:"developer"
        },{
            id:2, name:"heeral", role:"SAP"
        },{
            id:3, name:"Sidharth", role:"SAP dev"
        }
    ]

    // get all students method
    getAllStudent(){
        return this.students
    }

    getStudentById(id:number){
        const student = this.students.find((data)=>data.id===id)
        if(!student) throw new NotFoundException('student id not found')
        return student
    }

    //! POST method
    createStudent(data:{name:string, role:string}){
        const newStudent = {
            id:Date.now(),
            ...data
        };
        //^ Push data in students
        this.students.push(newStudent)
        return newStudent;

    }

    //! PUT method
    updateStudent(id:number, data:{name:string, role:string}){
            const index = this.students.findIndex((index)=> index.id === id);
            if(!index) throw new NotFoundException("Index not found to update");
            this.students[index] = {id, ...data}
            return this.students[index]
    }
    
    // PATCH
    partialUpdateStudent(id:number, data: Partial<{name:string, role:string}>){
        const studentId = this.getStudentById(id)
        Object.assign(studentId, data)
        return studentId;
    }

    deleteStudent(id:number){
        const index = this.students.findIndex((data)=>data.id===id);
        const deleted = this.students.splice(index,1)
        return {message: "Student deleted", student:deleted[0]}

    }

}
