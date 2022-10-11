import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private user = [
    { id: '1', name: 'Leo' },
    { id: '2', name: 'Bayola' },
  ];

  findAll() {
    return this.user;
  }

  findOne(id: string) {
    const user = this.user.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User with id '${id}' Not Found`);

    return user;
  }
}
