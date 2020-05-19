import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn,
    ManyToMany,
    JoinTable
} from "typeorm";
import {TypeUser} from "src/enums/TypeUser.enum";
import { Course } from "./Course.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    protected id : String

    @Column({
        type : "varchar",
        length : 11,
    })
    protected document : String

    @Column({
        type : "varchar",
        length : 45,
    })
    protected name : String

    @Column({
        type : "varchar",
        length : 15,
        nullable : true
    })
    protected phone? : String

    @Column({
        type : "varchar",
        length : 85,
        nullable : true
    })
    protected email : String

    @Column({
        type : "date"
    })
    protected birthday : Date

    @Column({
        type : "enum",
        enum : TypeUser
    })
    protected type : TypeUser

    @Column({
        type : "bigint",
        nullable : true
    })
    protected enrollments : Number

    @ManyToMany(type => Course)
    protected course : Promise<Course[]>

    @CreateDateColumn()
    protected created_at : Date

    @UpdateDateColumn()
    protected updated_at : Date

    @DeleteDateColumn()
    protected deleted_at : Date
}
