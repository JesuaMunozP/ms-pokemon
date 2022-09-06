import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MsPokemonService {

  constructor(private readonly httpService: HttpService) {}
  
  private readonly url = 'http://localhost:3000/api/pokeapi/';

  findOne(id: string) {
    return this.serviceCallPokemon(this.url, id); 
  }

  async serviceCallPokemon(url, id) {
    const response =  await lastValueFrom(this.httpService.get(url + id));

    const pokemon = {
      id : response.data.id,
      name: response.data.name,
      type: response.data.type,
    }
    return pokemon;
  }

}
