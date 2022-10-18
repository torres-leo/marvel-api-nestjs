import { Global, Module } from '@nestjs/common';
import { MysqlDataSource } from 'src/config/data-source';
import { DataSource } from 'typeorm';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      useFactory: async () => {
        await MysqlDataSource.initialize();
        return MysqlDataSource;
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModuleModule {}
