
require('dotenv').config()


export const databaseConfig = 
  {
      "production" : {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [ process.env.DB_ENTITIES ],
        synchronize: false,
        dropSchema : false
      },

      "development" : {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [ process.env.DB_ENTITIES ],
        dropSchema : true,
        synchronize: true,
        
      }

}
