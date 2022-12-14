import { Exclude } from 'class-transformer';
import { hashPassword } from '../../utils';
import { BaseEntity } from '../../utils/Base.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { Favorite } from './favorite.entity';

@Entity()
export class User extends BaseEntity {
  @Column('text', { unique: true })
  username: string;

  @Column('text')
  @Exclude()
  password: string;

  @BeforeInsert()
  checkUsername() {
    if (this.username) this.username = this.username.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  updateUsername() {
    if (this.username) this.username = this.username.toLocaleLowerCase().trim();
  }

  @BeforeInsert()
  checkPassword() {
    if (this.password) {
      this.password = hashPassword(this.password.trim());
      return this.password;
    }
  }

  @BeforeUpdate()
  updatePassword() {
    if (this.password) {
      this.password = hashPassword(this.password.trim());
      return this.password;
    }
  }

  @OneToMany(() => Favorite, (entity) => entity.user)
  favorites: Favorite[];
}
