import React from 'react';
import pokemons from '../../pokemons';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

const PokedexPage = () => (
  <div>
    <Header />
    <ul>
      {pokemons.map((el) => (
        <li key={el.id}>
          <PokemonCard pokemon={el} />
        </li>
      ))}
    </ul>
  </div>
);

export default PokedexPage;
