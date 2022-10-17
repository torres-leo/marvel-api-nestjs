import { Controller, Get, Param, Query } from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.storiesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storiesService.findOne(+id);
  }

  @Get(':id/comics')
  findComics(@Param('id') id: number) {
    return this.storiesService.findComics(id);
  }

  @Get(':id/characters')
  findCharacters(@Param('id') id: number) {
    return this.storiesService.findCharacters(id);
  }
}
