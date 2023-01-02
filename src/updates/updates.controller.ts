import { Controller, Get, Post, Query } from '@nestjs/common';
import { UpdatesService } from './updates.service';

@Controller('update')
export class UpdatesController {
  constructor(private readonly updatesService: UpdatesService) {}

  @Get()
  getHerosList() {
    return this.updatesService.findAll();
  }

  @Post('/heros')
  updateHeros(@Query('lang') lang: string) {
    return this.updatesService.updateHeros(lang);
  }

  @Post('/herosinfo')
  updateHerosInfo(@Query('lang') lang: string) {
    return this.updatesService.updateHerosInfo(lang);
  }
}
