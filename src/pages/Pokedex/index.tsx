import React, { useState } from 'react';
import PokemonCard, { IPokemon } from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import s from './Pokedex.module.scss';
import useData from '../../hook/getData';

interface IPokemonsData {
  total: number;
  pokemons: Array<IPokemon>;
}

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState(``);
  const [query, setQuery] = useState<IQuery>({});
  const { data, isLoading, isError } = useData<IPokemonsData>(`getPokemons`, query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const isLoaded = () => !isLoading && !isError;

  return (
    <div>
      <Layout>
        <p className={s.pokemonsDescr}>
          {data && data.total ? data.total : `No`} <b>Pokemons</b> for you to choose your favorite
        </p>
        <p>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </p>

        <p>
          {isLoading ? 'Loading...' : null}
          {isError ? 'Error!' : null}
        </p>

        {data && isLoaded() ? (
          <div className={s.pokemonsContainer}>
            {data.pokemons.map((el) => (
              <div key={el.id}>
                <PokemonCard pokemon={el} />
              </div>
            ))}
          </div>
        ) : null}
      </Layout>
    </div>
  );
};

export default PokedexPage;
