import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.characterService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.characterService.findOne(id);
  }

  @Get(':id/comics')
  findComics(@Param('id') id: number) {
    return this.characterService.findComics(id);
  }

  @Get(':id/stories')
  findStories(@Param('id') id: number) {
    return this.characterService.findStories(id);
  }
}
