import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MysqlDataSource } from './config/data-source';
// import { typeOrmConfig } from './config/typeorm.config';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CharacterModule } from './character/character.module';
import { ComicModule } from './comic/comic.module';

import { StoriesModule } from './stories/stories.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModuleModule } from './type-orm-module/type-orm-module.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
    CommonModule,
    FavoritesModule,
    CharacterModule,
    ComicModule,
    StoriesModule,
    AuthModule,
    TypeOrmModuleModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
