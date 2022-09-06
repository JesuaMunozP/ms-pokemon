import { Module } from '@nestjs/common';
import { MsPokemonService } from './ms-pokemon.service';
import { MsPokemonController } from './ms-pokemon.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [MsPokemonController],
  providers: [MsPokemonService],
  exports: [MsPokemonModule],
  imports: [HttpModule]
})
export class MsPokemonModule {}
