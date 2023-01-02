import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('hero_info')
export class HeroInfoEntity {
  @ObjectIdColumn()
  _id?: ObjectID;

  @PrimaryColumn()
  hero_id?: number;

  lang?: string;
  hero_info?: {
    id?: number;
    name?: string;
    order_id?: number;
    name_loc?: string;
    bio_loc?: string;
    hype_loc?: string;
    npe_desc_loc?: string;
    str_base?: number;
    str_gain?: number;
    agi_base?: number;
    agi_gain?: number;
    int_base?: number;
    int_gain?: number;
    primary_attr?: number;
    complexity?: number;
    attack_capability?: number;
    role_levels?: [];
    damage_min?: number;
    damage_max?: number;
    attack_rate?: number;
    attack_range?: number;
    projectile_speed?: number;
    armor?: number;
    magic_resistance?: number;
    movement_speed?: number;
    turn_rate?: number;
    sight_range_day?: number;
    sight_range_night?: number;
    max_health?: number;
    health_regen?: number;
    max_mana?: number;
    mana_regen?: number;
    abilities?: [
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [0.3];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [
              {
                name?: string;
                value?: number;
                operation?: number;
              },
            ];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
    ];
    talents?: [
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
      {
        id?: number;
        name?: string;
        name_loc?: string;
        desc_loc?: string;
        lore_loc?: string;
        notes_loc?: [];
        shard_loc?: string;
        scepter_loc?: string;
        type?: number;
        behavior?: string;
        target_team?: number;
        target_type?: number;
        flags?: number;
        damage?: number;
        immunity?: number;
        dispellable?: number;
        max_level?: number;
        cast_ranges?: [];
        cast_points?: [];
        channel_times?: [];
        cooldowns?: [];
        durations?: [];
        damages?: [];
        mana_costs?: [];
        gold_costs?: [];
        special_values?: [
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
          {
            name?: string;
            values_float?: [];
            is_percentage?: boolean;
            heading_loc?: string;
            bonuses?: [];
          },
        ];
        is_item?: boolean;
        ability_has_scepter?: boolean;
        ability_has_shard?: boolean;
        ability_is_granted_by_scepter?: boolean;
        ability_is_granted_by_shard?: boolean;
        item_cost?: number;
        item_initial_charges?: number;
        item_neutral_tier?: number;
        item_stock_max?: number;
        item_stock_time?: number;
        item_quality?: number;
      },
    ];
  };

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
