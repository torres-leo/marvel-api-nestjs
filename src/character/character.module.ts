import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService],
  imports: [
    HttpModule.register({
      baseURL: `${process.env.MARVEL_URL_API}/characters`,
      params: {
        ts: 1,
        apikey: process.env.MARVEL_API_KEY,
        hash: process.env.MARVEL_API_HASH,
      },
    }),
  ],
})
export class CharacterModule {}
