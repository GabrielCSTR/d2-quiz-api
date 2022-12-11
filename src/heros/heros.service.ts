import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroEntity } from './entities/hero.entity';

@Injectable()
export class HerosService {
  constructor(
    @InjectRepository(HeroEntity)
    private herosRepository: Repository<HeroEntity>,
  ) {}

  async create(createHeroDto: CreateHeroDto): Promise<HeroEntity> {
    return await this.herosRepository.save(createHeroDto);
  }

  findAll() {
    return this.herosRepository.find();
  }

  async findOne(id: number): Promise<HeroEntity> {
    return await this.herosRepository.findOne({ where: { hero_id: id } });
  }

  async update(id: number, updateHeroDto: UpdateHeroDto) {
    const raw: HeroEntity = await this.herosRepository.findOneOrFail({
      where: { hero_id: id },
    });
    return await this.herosRepository.save({ ...raw, ...updateHeroDto });
  }

  async remove(id: number) {
    return await this.herosRepository.delete(id);
  }
}
