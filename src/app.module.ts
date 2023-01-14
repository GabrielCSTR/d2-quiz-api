import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from './database/ormconfig';
import { HerosModule } from './heros/heros.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { UpdatesModule } from './updates/updates.module';
import { join } from 'path';
import { HeroInfosModule } from './hero-infos/hero-infos.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot(ormConfig()),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_HOST,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    HerosModule,
    UpdatesModule,
    IntegrationsModule,
    HeroInfosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
