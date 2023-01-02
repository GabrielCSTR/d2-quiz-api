import { Injectable } from '@nestjs/common';
import { CreateHeroInfoDto } from './dto/create-hero-info.dto';
import { UpdateHeroInfoDto } from './dto/update-hero-info.dto';

@Injectable()
export class HeroInfosService {
  create(createHeroInfoDto: CreateHeroInfoDto) {
    return 'This action adds a new heroInfo';
  }

  findAll() {
    return `This action returns all heroInfos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heroInfo`;
  }

  update(id: number, updateHeroInfoDto: UpdateHeroInfoDto) {
    return `This action updates a #${id} heroInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} heroInfo`;
  }
}
