import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
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
      await this.favoriteRepository.save({ ...createFavoriteDto, userId });
    } catch (error) {
      console.log(error);
      throw new HttpException('Failed to add favorite', HttpStatus.NOT_FOUND);
    }
  }

  async findAll(userId: string, category = '') {
    let params = {};
    if (category) params = { category };

    try {
      const favorites = await this.favoriteRepository.find({
        where: { ...params, userId },
      });
      return favorites;
    } catch (error) {
      return false;
    }
  }

  async findOne(id: string) {
    try {
      const favorite = await this.favoriteRepository.findOneOrFail({
        where: { id },
      });
      return favorite;
    } catch (error) {
      throw new NotFoundException(`Favorite with id:'${id}' Not Found`);
    }
  }

  async update(id: string, updateFavoriteDto: UpdateFavoriteDto) {
    const favorite = await this.favoriteRepository.preload({
      id,
      ...updateFavoriteDto,
    });
    if (!favorite)
      throw new NotFoundException(`Favorite with id:'${id}', Not Found`);

    try {
      await this.favoriteRepository.save(favorite);
      return favorite;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async remove(id: string) {
    try {
      const favorite = await this.favoriteRepository.findOneOrFail({
        where: { id },
      });
      await this.favoriteRepository.remove(favorite);
    } catch (error) {
      throw new NotFoundException(`Favorite with id:'${id}', Not Found`);
    }
  }
}
