import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

import { Favorite } from 'src/database/models/favorite.entity';

@Injectable()
export class FavoritesService {
  private readonly logger = new Logger('FavoritesService');
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
  ) {}

  async create(createFavoriteDto: CreateFavoriteDto, userId: string) {
    try {
      const favorite = this.favoriteRepository.create({
        ...createFavoriteDto,
        userId,
      });
      await this.favoriteRepository.save(favorite);

      return favorite;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return `This action returns all favorites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favorite`;
  }

  private handleExceptions(error: any) {
    if (error.errno === 1062) throw new BadRequestException(error.sqlMessage);
    this.logger.error(error);
  }
}
