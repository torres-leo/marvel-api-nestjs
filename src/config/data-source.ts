import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname + '/../database/models/*.{ts,js}'],
  migrations: [__dirname + '/../database/migration/*.{ts,js}'],
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
});
