import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroEntity } from 'src/heros/entities/hero.entity';
import { HeroInfoEntity } from 'src/heros/entities/heroinfo.entity';
import { IntegrationsService } from 'src/integrations/integrations.service';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UpdatesService {
  constructor(
    @InjectRepository(HeroEntity)
    readonly herosRepository: MongoRepository<HeroEntity>,
    @InjectRepository(HeroInfoEntity)
    readonly heroInfoRepository: MongoRepository<HeroInfoEntity>,
    private readonly integrationsService: IntegrationsService,
  ) {}

  async findAll() {
    return await this.herosRepository.find();
  }

  async updateHeros(lang) {
    // GET HERO INFO
    const { data } = await this.integrationsService.request(
      'GET',
      `${process.env.API_D2}/herolist?language=${
        lang ? lang : process.env.API_LANG
      }`,
    );

    const heros: any = Object.values(data);
    const newHeros: HeroEntity[] = [];
    heros[0].map((hero) => {
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

  async getHeroInfo(lang: string, heroID: number) {
    return await new Promise((resolve, reject) => {
      this.integrationsService
        .request(
          'GET',
          `${process.env.API_D2}/herodata?language=${
            lang ? lang : process.env.API_LANG
          }&hero_id=${heroID}`,
        )
        .then(function (response) {
          resolve(response.data.heroes[0]);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  }

  async updateHerosInfo(lang: string) {
    // GET HERO INFO
    const heros = await this.herosRepository.find({
      select: ['hero_id'],
      where: { lang },
    });

    if (heros) {
      const resultHeros = await Promise.all(
        heros.map(async (hero) => {
          //GET HERO SKILL INFO
          let heroinfo = {};
          let data_info = await this.getHeroInfo(lang, hero.hero_id);
          heroinfo = { ...hero, hero_info: data_info };
          // await this.herosRepository.update(
          //   { hero_id: hero.hero_id },
          //   { ...heroinfo },
          // );
          return heroinfo;
        }),
      );

      const newHerosInfo: HeroInfoEntity[] = [];
      newHerosInfo.push({
        ...resultHeros,
        lang,
      });
      return await this.heroInfoRepository.save(newHerosInfo);
      // return await this.herosRepository.findOneAndUpdate(
      //   {},
      //   { $set: { ...newHeros } },
      //   { upsert: true },
      // );
    }
  }
}
