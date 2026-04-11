import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee{

    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    name:string

    @Column()
    role:string

    @Column()
    department:string
    
}