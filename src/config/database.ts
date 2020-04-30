import { createConnection } from 'typeorm';
import { User } from 'src/entities/User.entity';
import { Course } from 'src/entities/Course.entity';
require('dotenv').config()


export const databaseConfig = 
  {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ process.env.DB_ENTITIES ],
      synchronize: true,
}
