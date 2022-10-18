import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv';
import { Favorite } from 'src/database/models/favorite.entity';
import { User } from 'src/database/models/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],

  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Favorite],
      // migrations: [__dirname + '/../database/migration/*{.ts,.js}'],
      migrations: [__dirname + '/../database/migration/*{.ts,.js}'],
      // seeds: ['src/seeds/**/*{.ts,.js}'],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, Favorite],
  migrations: [__dirname + '/../database/migration/*{.ts,.js}'],
  // seeds: ['src/seeds/**/*{.ts,.js}'],
  synchronize: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
};
