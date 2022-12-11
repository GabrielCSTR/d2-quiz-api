import { IsNotEmpty } from 'class-validator';

export class CreateHeroDto {
  @IsNotEmpty()
  hero_id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  name_loc: string;

  @IsNotEmpty()
  complexity: number;

  @IsNotEmpty()
  primary_attr: number;

  @IsNotEmpty()
  hero_skill: string;
}
