import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Favorite, Category } from '../models/favorite.entity';

export class ServiceCreateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.createQueryBuilder().delete().from(Favorite).execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Favorite)
      .values([
        {
          id: '9dc64209-936e-4206-9c32-f776c17aa2cf',
          marvelId: 20,
          category: Category.CHARACTER,
          userId: '9dc64209-936e-4206-9c32-f776c17aa2cf',
        },
        {
          id: '9dc64209-936e-4206-9c32-f776c17aa2cf',
          marvelId: 21,
          category: Category.COMIC,
          userId: '3dc64209-936e-4206-9c32-f776c17aa2bc',
        },
      ])
      .execute();
  }
}
