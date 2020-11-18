import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((response) => response.json());
}

export default req;
