import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroInfoDto } from './create-hero-info.dto';

export class UpdateHeroInfoDto extends PartialType(CreateHeroInfoDto) {}
