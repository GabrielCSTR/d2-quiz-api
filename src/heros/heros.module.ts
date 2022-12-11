import { Module } from '@nestjs/common';
import { HerosService } from './heros.service';
import { HerosController } from './heros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroEntity } from './entities/hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeroEntity])],
  controllers: [HerosController],
  providers: [HerosService],
})
export class HerosModule {}
