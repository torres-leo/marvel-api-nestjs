import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { User } from 'src/database/models/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async verifyUser(loginDto: LoginDto) {
    const user = await this.userService.findByUsername(loginDto.username);
    if (!user) return false;

    const match = await bcrypt.compare(loginDto.password, user.password);

    if (match) {
      return user;
    }
    throw new HttpException(
      'username or password incorrect',
      HttpStatus.BAD_REQUEST,
    );
  }

  async login(user: User) {
    const payload = {
      sub: user.id,
    };
    console.log('payload', payload);
    return { access_token: this.jwtService.sign(payload) };
  }
}
