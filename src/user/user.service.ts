import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from 'src/database/models/user.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger('UserService');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(user);

      return user;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 10, offset = 0 } = paginationDto;
      return this.userRepository.find({
        take: limit,
        skip: offset,
      });
    } catch (error) {
      return false;
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findOneOrFail({ where: { id } });
      return user;
    } catch (error) {
      throw new NotFoundException(`User with id:'${id}' Not Found`);
    }
  }

  async findByUsername(username: string) {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: { username },
      });
      return user;
    } catch (error) {
      throw new NotFoundException(`User:'${username}' Not Found`);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({ id, ...updateUserDto });

    if (!user) throw new NotFoundException(`User with id:'${id}', Not Found`);
    try {
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      const user = await this.userRepository.findOneOrFail({ where: { id } });
      await this.userRepository.remove(user);
    } catch (error) {
      throw new NotFoundException(`User with id:'${id}', Not Found`);
    }
  }

  private handleExceptions(error: any) {
    if (error.errno === 1062) throw new BadRequestException(error.sqlMessage);
    this.logger.error(error);
  }
}
