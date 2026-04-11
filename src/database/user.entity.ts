import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity("User")  // define User table in database
export class User{
    @PrimaryGeneratedColumn()
  id!: number;

    @Column()
  name!: string;

    @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;
}