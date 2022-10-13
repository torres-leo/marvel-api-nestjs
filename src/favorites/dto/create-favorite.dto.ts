import { IsNumber, IsString, IsUUID } from 'class-validator';
import { Category } from 'src/database/models/favorite.entity';

export class CreateFavoriteDto {
  @IsNumber()
  marvelId: number;

  @IsString()
  category: Category;

  @IsString()
  @IsUUID()
  userId: string;
}
