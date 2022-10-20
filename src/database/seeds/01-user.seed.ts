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
          id: '1b7dc58e-9c63-4bc0-b493-e0366ba28603',
          username: 'leo',
          password: hashPassword('123456l'),
        },
        {
          id: 'e05aae73-42e2-4354-bf9a-13b419570a61',
          username: 'bayola',
          password: hashPassword('123456b'),
        },
      ])
      .execute();
  }
}
