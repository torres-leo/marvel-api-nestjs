import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/utils/Base.entity';
import { User } from './user.entity';

export enum Category {
  COMIC = 'COMIC',
  CHARACTER = 'CHARACTER',
}

@Entity()
export class Favorite extends BaseEntity {
  @Column()
  marvelId: number;

  @Column({ type: 'enum', enum: Category, default: Category.CHARACTER })
  category: Category;

  @Column('uuid')
  userId: string;

  @ManyToOne(() => User, (entity) => entity.favorites)
  user: User;
}
