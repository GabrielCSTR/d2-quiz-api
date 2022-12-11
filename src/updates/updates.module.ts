import { Module } from '@nestjs/common';
import { UpdatesService } from './updates.service';
import { UpdatesController } from './updates.controller';
import { HttpModule } from '@nestjs/axios';
import { IntegrationsService } from 'src/integrations/integrations.service';
import { HeroEntity } from 'src/heros/entities/hero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HeroEntity]), HttpModule],
  controllers: [UpdatesController],
  providers: [UpdatesService, IntegrationsService],
})
export class UpdatesModule {}
