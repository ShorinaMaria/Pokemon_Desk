import React from 'react';
import Layout from '../../components/Layout';
import PokemonCard, { IPokemon } from '../../components/PokemonCard';
import useData from '../../hook/getData';

export interface PokemonProps {
  id: number | string;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  return (
    <div>
      <Layout>
        <p>{isLoading ? 'Loading...' : null}</p>
        {data ? <PokemonCard pokemon={data} /> : null}
      </Layout>
    </div>
  );
};

export default PokemonPage;
