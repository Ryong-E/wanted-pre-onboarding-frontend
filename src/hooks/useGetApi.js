import { useEffect, useState } from 'react';

const useGetApi = (api, { onSuccess } = {}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      await api().then((get) => {
        setIsLoading(false);
        setData(get);
        if (onSuccess !== undefined) onSuccess(get);
      });
    } catch (error) {}
  };

  const refetch = async () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, refetch, isLoading };
};

export default useGetApi;
