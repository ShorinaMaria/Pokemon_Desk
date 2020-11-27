import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('function receives endpointConfig string and empty query {} and returns protocol, host, pathname and query: {}', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: `http`,
      host: `zar.hosthot.ru`,
      pathname: `/api/v1/pokemons`,
      query: {},
    });
  });

  test('function receives endpointConfig string and query and returns protocol, host, pathname and received query', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: `http`,
      host: `zar.hosthot.ru`,
      pathname: `/api/v1/pokemons`,
      query: { name: 'Pikachu' },
    });
  });

  test('function receives endpointConfig string and query={id: <id_value>} and returns protocol, host, pathname and empty query', () => {
    const id = 25;
    const url = getUrlWithParamsConfig('getPokemon', { id });

    expect(url).toEqual({
      protocol: `http`,
      host: `zar.hosthot.ru`,
      pathname: `/api/v1/pokemon/${id}`,
      query: {},
    });
  });
});
