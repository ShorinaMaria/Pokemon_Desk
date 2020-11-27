import { useEffect, useState } from 'react';
import req from '../utils/request';

interface IUseDataResponse<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

const useData = <D>(endpoint: string, query: object, deps: Array<any> = []): IUseDataResponse<D | null> => {
  const [data, setData] = useState<D | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req<D>(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
