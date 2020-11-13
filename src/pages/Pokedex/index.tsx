import React from 'react';
import pokemons from '../../pokemons';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import s from './Pokedex.module.scss';

const PokedexPage = () => (
  <div>
    <Header />
    <Layout>
      <p className={s.pokemonsDescr}>
        800 <b>Pokemons</b> for you to choose your favorite
      </p>
      <div className={s.pokemonsContainer}>
        {pokemons.map((el) => (
          <div key={el.id}>
            <PokemonCard pokemon={el} />
          </div>
        ))}
      </div>
    </Layout>
  </div>
);

export default PokedexPage;
