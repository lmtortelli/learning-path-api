import { Controller, Post, Put, Get, Body, Delete, Param } from '@nestjs/common';
import { CreateUserDTO } from 'src/entities/dtos/user/CreateUser.dto';
import { UserService } from 'src/services/user/user.service';
import { type } from 'os';
import { TypeUser } from 'src/enums/TypeUser.enum';
import { UpdateUserDTO } from 'src/entities/dtos/user/UpdateUser.dto';

@Controller('user')
export class UserController {

    constructor(
        private userService : UserService
    ) { }

    @Post()
    public createUser(@Body() user : CreateUserDTO) {
        user.birthday = new Date()
        user.type = TypeUser.STUDENT
        
        return this.userService.createUser(user)
    }

    @Delete("/:id")
    public disableUser(@Param("id") id: String) {
        return this.userService.disableUser(id)
    }

    @Put()
    public update(@Body() user : UpdateUserDTO) {
        return this.userService.updateUser(user.id,user)
    }

    @Put('/makeProfessor/:id')
    public makeProfessor(@Param("id") id : String) {
        return this.userService.makeProfessor(id);
    }

    @Get("/:id") 
    public getUserById(id : String) {
        return null
    }

    @Get()
    public getAllUsers() {
        return null
    }


}
