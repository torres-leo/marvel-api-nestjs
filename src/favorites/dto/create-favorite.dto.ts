import {
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { Category } from 'src/database/models/favorite.entity';

export class CreateFavoriteDto {
  @IsNumber()
  @IsPositive()
  marvelId: number;

  @IsString()
  @IsEnum(Category)
  category: Category;

  @IsString()
  @IsUUID()
  userId: string;
}
