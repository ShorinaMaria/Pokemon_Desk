/* eslint-disable camelcase */
import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemon {
  name_clean: string;
  abilities: Array<string>;
  // [
  //   "overgrow",
  //   "chlorophyll"
  // ],
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: Array<string>;
  // [
  //   "grass",
  //   "poison"
  // ],
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

const PokemonCard: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={6} className={s.titleName}>
          {pokemon.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{pokemon.types.join(',')}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
