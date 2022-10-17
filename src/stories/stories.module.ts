import { Module } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { StoriesController } from './stories.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [StoriesController],
  providers: [StoriesService],
  imports: [
    HttpModule.register({
      baseURL: `${process.env.MARVEL_URL_API}/stories`,
      params: {
        ts: 1,
        apikey: process.env.MARVEL_API_KEY,
        hash: process.env.MARVEL_API_HASH,
      },
    }),
  ],
})
export class StoriesModule {}
