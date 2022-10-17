import { Controller, Get, Param, Query } from '@nestjs/common';
import { ComicService } from './comic.service';

@Controller('comics')
export class ComicController {
  constructor(private readonly comicService: ComicService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.comicService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.comicService.findOne(id);
  }

  @Get(':id/characters')
  findCharacters(@Param('id') id: number) {
    return this.comicService.findCharacters(id);
  }

  @Get(':id/stories')
  findStories(@Param('id') id: number) {
    return this.comicService.findStories(id);
  }
}
