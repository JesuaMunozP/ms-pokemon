import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { MsPokemonController } from '../ms-pokemon.controller';
import { MsPokemonService } from '../ms-pokemon.service';

describe('MsPokemonController', () => {
  let controller: MsPokemonController;
  const mockService = {
    byGet: jest.fn((id) => {
      return {
        id: '1',
        name: 'pokemon',
      };
    }),
    byPost: jest.fn((id) => ({
      id,
      name: 'pokemon',
    })),
    get: jest.fn(),
    findOne: jest.fn((id) => ({
      id,
      name: 'pokemon',
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MsPokemonController],
      providers: [
        MsPokemonService,
        {
          provide: HttpService,
          useValue: mockService,
        },
        {
          provide: MsPokemonService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<MsPokemonController>(MsPokemonController);
  });

  describe('Should return a product by parameter', () => {
    it('byGet(), should find one product', () => {
        expect(controller.byGet('1')).toEqual({
            id: '1',
            name: 'pokemon',
        });
    });
    it('byPost(), should find one product', () => {
      expect(controller.byPost('1')).toEqual({
          id: '1',
          name: 'pokemon',
      });
  });
  });
});
