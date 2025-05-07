import { createQueryState } from './useQueryState';
import { getAwards } from '../api/services';
import type { AwardType } from '@/types/grid/AwardType';

const awardsState = createQueryState<AwardType[]>({
  queryKey: ['awards'],
  queryFn: getAwards,
  initialValue: [],
});

export const useAwards = () => {
  const { data, isLoading, error, setData } = awardsState.useQueryState();

  return {
    awards: data,
    isLoading,
    error,
    setAwards: setData,
  };
};

export const {
  queryAtom: awardsQueryAtom,
  dataAtom: awardsAtom,
  loadingAtom: awardsLoadingAtom,
  errorAtom: awardsErrorAtom,
} = awardsState; 