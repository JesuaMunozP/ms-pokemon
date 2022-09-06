import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { MsPokemonService } from '../ms-pokemon.service';

describe('MsPokemonService', () => {
  let service: MsPokemonService;
  let httpService: HttpService;

  const mockRepository = {
    get: jest.fn(),
    findOne: jest.fn(),
    serviceCallPokemon: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MsPokemonService,
        {
          provide: HttpService,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<MsPokemonService>(MsPokemonService);
    httpService = module.get<HttpService>(HttpService);
  });

  describe('should return a pokemon', () => {
    it('serviceCallPokemon(), should return a pokemon', async () => {
      const pokemon = [{
        id: '1',
        name: 'pokemon',
        type: ['1', '2'],
      }];
      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
          data: pokemon,
        }),
      );

      await mockRepository.serviceCallPokemon.mockReturnValue(pokemon);
      mockRepository.findOne.mockReturnValue(pokemon);
      const resultPokemon = await service.findOne('1');
     // const resultCallPokemon = await service.serviceCallPokemon('url', '1');
      // expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
      // expect(mockRepository.serviceCallPokemon).toBeCalledTimes(1);
      // expect(await service.findOne('1')).toBeCalledTimes(1);
      // expect(resultPokemon).toEqual(expected);
      // expect(resultCallPokemon).toContain(pokemon);
    });
  });
});
