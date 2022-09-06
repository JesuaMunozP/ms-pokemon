import { Module } from '@nestjs/common';
import { MsPokemonModule } from './ms-pokemon/ms-pokemon.module';

@Module({
  imports: [MsPokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
