import {Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne,
    ManyToMany,
    JoinTable
} from "typeorm";
import { TypeMoment } from "src/enums/TypeMoment.enum";
import { Lesson } from "./Lesson.entity";
import { User } from "./User.entity";

@Entity()
export class Moments {
    @PrimaryGeneratedColumn("uuid")
    protected id : String

    @Column({
        type : "enum",
        enum : TypeMoment
    })
    protected type : TypeMoment

    @Column({
        type : "varchar",
        length : 200,
        nullable : true
    })
    protected description? :  String

    @Column({
        type : "json"
    })
    protected payload : any

    @ManyToOne(type => Lesson)
    lesson : Promise<Lesson[]>
    
    @ManyToMany(type => User)
    user : Promise<User[]>
}