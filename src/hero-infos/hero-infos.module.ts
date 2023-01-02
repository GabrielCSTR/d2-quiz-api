import { Module } from '@nestjs/common';
import { HeroInfosService } from './hero-infos.service';
import { HeroInfosController } from './hero-infos.controller';

@Module({
  controllers: [HeroInfosController],
  providers: [HeroInfosService]
})
export class HeroInfosModule {}
