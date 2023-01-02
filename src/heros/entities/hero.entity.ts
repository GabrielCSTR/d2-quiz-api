import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('heros')
export class HeroEntity {
  @ObjectIdColumn()
  _id?: ObjectID;

  @Column({
    type: 'number',
    unique: true,
  })
  hero_id?: number;

  @Column({
    type: 'string',
  })
  name?: string;

  @Column({
    type: 'string',
  })
  name_loc?: string;

  @Column({
    type: 'number',
  })
  complexity?: number;

  @Column({
    type: 'number',
  })
  primary_attr?: number;

  @Column({
    type: 'string',
  })
  hero_skill_id?: string;

  @Column({
    type: 'string',
  })
  lang: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
