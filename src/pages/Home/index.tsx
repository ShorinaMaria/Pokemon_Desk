import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import { LinkEnum } from '../../routes';
import Parallax from './components/Parallax';

import s from './Home.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <Layout className={s.contentWrapper}>
      <div className={s.contentText}>
        <Heading size={1}>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>
        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
      </div>
      <div className={s.contentParallax}>
        <Parallax />
      </div>
    </Layout>
  </div>
);

export default HomePage;
