import React, { ReactComponentElement } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import PokedexPage from './pages/Pokedex';

interface IGeneralMenu{
    title: string;
    link: string;
    component: () => JSX.Element;
}

export const GENERAL_MENU: Array<IGeneralMenu> = [
    {
      title: 'Home',
      link: '/',
      component: () => <HomePage/>
    },
    {
      title: 'Pokédex',
      link: '/pokedex',
      component: () => <PokedexPage/>
    },
    {
      title: 'Legendaries',
      link: '/legendaries',
      component: () => <EmptyPage title="Legendaries"/>
    },
    {
      title: 'Documentation',
      link: '/documentation',
      component: () => <EmptyPage title="Documentation"/>
    },
];

interface IAccMenu {
    [k: string]: () => JSX.Element;
}
const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
}, {});

export default routes;