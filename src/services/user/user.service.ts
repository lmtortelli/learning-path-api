import { Injectable, Inject } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { User } from 'src/entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/entities/dtos/user/CreateUser.dto';
import { UpdateUserDTO } from 'src/entities/dtos/user/UpdateUser.dto';
import { TypeUser } from 'src/enums/TypeUser.enum';

@Injectable()
export class UserService {

    constructor(
        @Inject("USER_REPOSITORY")
        private usersRepository: Repository<User>,
      ) {}
          

      public async createUser (user : CreateUserDTO) : Promise<User> {
        let userModel = this.usersRepository.create(user) as User
        
        return this.usersRepository.save(userModel)
      }


      public disableUser (userId : String) : void {
        this.usersRepository.softDelete({"id" : userId})
      }

      public async updateUser (id : String, user : UpdateUserDTO) : Promise<User> {
        this.usersRepository.update(id, user)

        return this.usersRepository.findOne(id)
      }

      public async getUserById(id : String) : Promise<User> {
          return this.usersRepository.findOne(id)
      }

      public async getUsers() : Promise<User[]> {
        return this.usersRepository.find()
      }

      public async makeProfessor(id: String): Promise<Boolean> {
        try {
          this.usersRepository.update(id, {type : TypeUser.PROFESSOR})

          return true
        } catch (e) {
          return false
        }
    }

}
