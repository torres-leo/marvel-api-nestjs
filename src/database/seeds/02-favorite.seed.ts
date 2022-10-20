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
          id: '22f6fe9f-9841-4990-a343-630d4bda4f5b',
          marvelId: 1009144,
          category: Category.CHARACTER,
          userId: '1b7dc58e-9c63-4bc0-b493-e0366ba28603',
        },
        {
          id: '7a12863a-abd5-478b-afae-55f45da37ce4',
          marvelId: 21,
          category: Category.COMIC,
          userId: 'e05aae73-42e2-4354-bf9a-13b419570a61',
        },
      ])
      .execute();
  }
}
