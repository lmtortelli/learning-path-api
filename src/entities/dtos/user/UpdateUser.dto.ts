import { Course } from "src/entities/Course.entity"
import { TypeUser } from "src/enums/TypeUser.enum"

export class UpdateUserDTO {
    id : String

    document? : String

    name? : String

    phone? : String

    email? : String

    birthday? : Date

    type? : TypeUser

    enrollments? : Number

    course? : Course[]
}