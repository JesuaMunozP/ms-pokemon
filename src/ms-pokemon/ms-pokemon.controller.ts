import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MsPokemonService } from './ms-pokemon.service';

@Controller('ms-pokemon')
export class MsPokemonController {
  constructor(private readonly msPokemonService: MsPokemonService) {}

  @Get(':id')
  byGet(@Param('id') id: string) {
    return this.msPokemonService.findOne(id);
  }

  @Post(':id')
  byPost(@Param('id') id: string) {
    return this.msPokemonService.findOne(id);
  }
}