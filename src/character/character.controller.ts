import { Controller, Get, Param } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  findAll(): any {
    return this.characterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') name: string) {
    return this.characterService.findOne(name);
  }
}
