import { Controller, Get, Post, Query } from '@nestjs/common';
import { UpdatesService } from './updates.service';

@Controller('updatesHeros')
export class UpdatesController {
  constructor(private readonly updatesService: UpdatesService) {}

  @Get()
  getHerosList() {
    return this.updatesService.findAll();
  }

  @Post()
  updateHeros(@Query('lang') lang: string) {
    return this.updatesService.updateHeros(lang);
  }
}
