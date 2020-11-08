import React from 'react';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: Array<IMenu> = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => (
  <header className={s.root}>
    <div className={s.wrapper}>
      <div className={s.pokemonLogo}>
        <PokemonLogoSvg />
      </div>
      <div className={s.menuWrapper}>
        {MENU.map(({ id, value, link }) => (
          <a key={id} className={s.menuLink} href={link}>
            {value}
          </a>
        ))}
      </div>
    </div>
  </header>
);

export default Header;
