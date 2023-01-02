import { Test, TestingModule } from '@nestjs/testing';
import { HeroInfosService } from './hero-infos.service';

describe('HeroInfosService', () => {
  let service: HeroInfosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroInfosService],
    }).compile();

    service = module.get<HeroInfosService>(HeroInfosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
