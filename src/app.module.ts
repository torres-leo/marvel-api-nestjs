import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MysqlDataSource } from './config/data-source';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule,
    CommonModule,
    FavoritesModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
