import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import PokedexPage from './pages/Pokedex';
import PokemonPage, { PokemonProps } from './pages/Pokemon';

/* eslint-disable no-shadow */
export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

export const SECOND_ROUTES: Array<IGeneralMenu> = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <PokemonPage id={id} />,
  },
];

interface IAccMenu {
  [k: string]: (props: PropsWithChildren<any>) => JSX.Element;
}
const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
