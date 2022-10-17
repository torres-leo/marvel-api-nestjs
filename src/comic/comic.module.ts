import { Module } from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicController } from './comic.controller';
import { HttpModule } from '@nestjs/axios';
import 'dotenv/config';

@Module({
  controllers: [ComicController],
  providers: [ComicService],
  imports: [
    HttpModule.register({
      baseURL: `${process.env.MARVEL_URL_API}/comics`,
      params: {
        ts: 1,
        apikey: process.env.MARVEL_API_KEY,
        hash: process.env.MARVEL_API_HASH,
      },
    }),
  ],
})
export class ComicModule {}
