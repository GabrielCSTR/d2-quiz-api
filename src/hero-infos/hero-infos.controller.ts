import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeroInfosService } from './hero-infos.service';
import { CreateHeroInfoDto } from './dto/create-hero-info.dto';
import { UpdateHeroInfoDto } from './dto/update-hero-info.dto';

@Controller('hero-infos')
export class HeroInfosController {
  constructor(private readonly heroInfosService: HeroInfosService) {}

  @Post()
  create(@Body() createHeroInfoDto: CreateHeroInfoDto) {
    return this.heroInfosService.create(createHeroInfoDto);
  }

  @Get()
  findAll() {
    return this.heroInfosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroInfosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeroInfoDto: UpdateHeroInfoDto) {
    return this.heroInfosService.update(+id, updateHeroInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroInfosService.remove(+id);
  }
}
