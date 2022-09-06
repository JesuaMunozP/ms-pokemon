import { Test, TestingModule } from '@nestjs/testing';
import { MsPokemonService } from '../ms-pokemon.service';

describe('MsPokemonService', () => {
  let service: MsPokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsPokemonService],
    }).compile();

    service = module.get<MsPokemonService>(MsPokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
