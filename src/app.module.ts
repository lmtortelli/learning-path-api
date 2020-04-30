import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseConfig } from './config/database';


@Module({
  imports: [
      TypeOrmModule.forRoot(databaseConfig as TypeOrmModuleOptions),
    ],
  controllers: [],
  providers: []
})
export class AppModule {}
