import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroEntity } from 'src/heros/entities/hero.entity';
import { IntegrationsService } from 'src/integrations/integrations.service';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UpdatesService {
  constructor(
    @InjectRepository(HeroEntity)
    private herosRepository: MongoRepository<HeroEntity>,
    private readonly integrationsService: IntegrationsService,
  ) {}

  async findAll() {
    return await this.herosRepository.find();
  }

  async updateHeros(lang) {
    const { data } = await this.integrationsService.request(
      'GET',
      `${process.env.API_D2}/herolist?language=${lang}`,
    );
    const heros: any = Object.values(data.result?.data)[0];
    const newHeros: HeroEntity[] = [];
    heros.map((hero) => {
      newHeros.push({
        hero_id: hero.id,
        name: hero.name,
        name_loc: hero.name_loc,
        complexity: hero.complexity,
        primary_attr: hero.primary_attr,
        lang,
      });
    });

    return await this.herosRepository.save(newHeros);
  }
}
