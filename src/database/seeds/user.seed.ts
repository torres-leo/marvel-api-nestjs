import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../models/user.entity';
import { hashPassword } from '../../utils';

export class ServiceCreateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.createQueryBuilder().delete().from(User).execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: '9dc64209-936e-4206-9c32-f776c17aa2cf',
          username: 'Leo',
          password: hashPassword('123456l'),
        },
        {
          id: '3dc64209-936e-4206-9c32-f776c17aa2bc',
          username: 'Bayola',
          password: hashPassword('123456b'),
        },
      ])
      .execute();
  }
}
