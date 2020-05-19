import { Connection } from 'typeorm';
import { User } from 'src/entities/User.entity';

export const repositoriesProviders = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: ['DATABASE_CONNECTION'],
    },
  ];