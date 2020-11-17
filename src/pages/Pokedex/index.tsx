import React, { useEffect, useState } from 'react';
import PokemonCard, { IPokemon } from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import s from './Pokedex.module.scss';

interface IPokemonsData {
  total: number;
  pokemons: Array<IPokemon>;
}

const usePokemons = () => {
  const [data, setData] = useState<IPokemonsData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://zar.hosthot.ru/api/v1/pokemons?limit=100`);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return (
      <div>
        <Layout>
          <p>Loading...</p>
        </Layout>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Layout>
          <p>Error!</p>
        </Layout>
      </div>
    );
  }

  return (
    <div>
      <Layout>
        <p className={s.pokemonsDescr}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </p>
        <div className={s.pokemonsContainer}>
          {data.pokemons.map((el) => (
            <div key={el.id}>
              <PokemonCard pokemon={el} />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
