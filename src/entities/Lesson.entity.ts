import {Entity, 
    PrimaryGeneratedColumn, 
    Column
} from "typeorm";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn("uuid")
    protected id : String

    @Column({
        type : "date"
    })
    protected date : Date
}