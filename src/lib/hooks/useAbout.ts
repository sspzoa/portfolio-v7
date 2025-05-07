import { createQueryState } from './useQueryState';
import { getAbout } from '../api/services';
import type { AboutType } from '@/types/info/AboutType';

const aboutState = createQueryState<AboutType[]>({
  queryKey: ['about'],
  queryFn: getAbout,
  initialValue: [],
});

export const useAbout = () => {
  const { data, isLoading, error, setData } = aboutState.useQueryState();

  return {
    about: data,
    isLoading,
    error,
    setAbout: setData,
  };
};

export const {
  queryAtom: aboutQueryAtom,
  dataAtom: aboutAtom,
  loadingAtom: aboutLoadingAtom,
  errorAtom: aboutErrorAtom,
} = aboutState; 