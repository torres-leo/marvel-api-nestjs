import { BaseEntity } from 'src/utils/Base.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column('text', { unique: true })
  username: string;

  @Column('text')
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
    if (this.password) this.password = this.password.trim();
  }

  @BeforeUpdate()
  updatePassword() {
    if (this.password) this.password = this.password.trim();
  }
}
