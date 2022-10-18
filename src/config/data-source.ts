import { DataSource } from 'typeorm';
import { User } from 'src/database/models/user.entity';
import { Favorite } from 'src/database/models/favorite.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, Favorite],
  // migrations: [__dirname + '/../database/migration/*{.ts,.js}'],
  migrations: ['src/database/migration/*.{ts,js}'],
  synchronize: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
});
