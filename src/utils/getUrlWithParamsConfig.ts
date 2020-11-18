import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };
}

export default getUrlWithParamsConfig;
