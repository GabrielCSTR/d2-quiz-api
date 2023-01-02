import { Test, TestingModule } from '@nestjs/testing';
import { HeroInfosController } from './hero-infos.controller';
import { HeroInfosService } from './hero-infos.service';

describe('HeroInfosController', () => {
  let controller: HeroInfosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroInfosController],
      providers: [HeroInfosService],
    }).compile();

    controller = module.get<HeroInfosController>(HeroInfosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
