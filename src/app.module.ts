import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseConfig } from './config/database';
import { UserService } from './services/user/user.service';
import { repositoriesProviders } from './providers/repositories.provider';
import { databaseProviders } from './providers/database.provider';
import { UserController } from './controllers/user/user.controller';


@Module({
  imports: [
      
    ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    ...databaseProviders,
    ...repositoriesProviders,
    ]
})
export class AppModule {}
