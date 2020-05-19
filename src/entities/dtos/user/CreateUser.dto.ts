import { TypeUser } from "src/enums/TypeUser.enum"
import { Course } from "src/entities/Course.entity"

export class CreateUserDTO {
    document : String

    name : String

    phone? : String

    email : String

    birthday : Date

    type : TypeUser

    enrollments? : Number

    course? : Course[]


}