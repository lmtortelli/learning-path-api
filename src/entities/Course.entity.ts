import {Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne} from "typeorm";
import { User } from "./User.entity";
import { Component } from "./Component.entity";

@Entity()
export class Course {

    @PrimaryGeneratedColumn("uuid")
    id : String

    @Column({
        type : "varchar",
        length : 200,
        nullable : true
    })
    description? :  String

    @Column({
        type : "date"
    })
    date_begin : Date

    @Column({
        type : "date"
    })
    date_end : Date

    @ManyToMany(type => User)
    @JoinTable({name : "user_has_course"})
     user : Promise<User[]>

    @ManyToOne(type => Component)
    component : Promise<Component>

}
