import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import type { QueryFunction, QueryKey } from '@tanstack/react-query';

const CACHE_TIME = 30 * 60 * 1000; // 30분

type QueryStateOptions<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
  initialValue: T;
};

export const createQueryState = <T,>(options: QueryStateOptions<T>) => {
  const queryAtom = atomWithQuery(() => ({
    queryKey: options.queryKey,
    queryFn: options.queryFn,
    staleTime: CACHE_TIME,
    gcTime: CACHE_TIME,
  }));

  const dataAtom = atom<T>(options.initialValue);
  const loadingAtom = atom<boolean>(true);
  const errorAtom = atom<Error | null>(null);

  const useQueryState = () => {
    const [{ data, isLoading, error }] = useAtom(queryAtom);
    const [stateData, setStateData] = useAtom(dataAtom);
    const [loading, setLoading] = useAtom(loadingAtom);
    const [stateError, setStateError] = useAtom(errorAtom);
    
    useEffect(() => {
      if (data) {
        setStateData(data);
        setLoading(false);
        setStateError(null);
      }
      if (error) {
        setStateError(error as Error);
        setLoading(false);
      }
    }, [data, error, setStateData, setLoading, setStateError]);
    
    return {
      data: stateData,
      isLoading: isLoading || loading,
      error: stateError,
      setData: setStateData,
      setLoading,
      setError: setStateError
    };
  };
  
  return {
    queryAtom,
    dataAtom,
    loadingAtom,
    errorAtom,
    useQueryState
  };
}; 