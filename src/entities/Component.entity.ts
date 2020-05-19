import {Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToMany, 
    JoinTable, 
    OneToMany
} from "typeorm";
import { Course } from "./Course.entity";

@Entity()
export class Component {
    @PrimaryGeneratedColumn("uuid")
    protected id : String
    
    @Column({
        type : "varchar",
        length : 45
    })
    protected name : String

    @Column({
        type : "int"
    })
    protected hours : Number

    @Column({
        type : "json"
    })
    protected metrics : any

    @OneToMany(type => Course, course => course.component)
    protected course : Promise<Course[]>;
}
