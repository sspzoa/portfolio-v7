import { createQueryState } from './useQueryState';
import { getActivities } from '../api/services';
import type { ActivityType } from '@/types/grid/ActivityType';

const activitiesState = createQueryState<ActivityType[]>({
  queryKey: ['activities'],
  queryFn: getActivities,
  initialValue: [],
});

export const useActivities = () => {
  const { data, isLoading, error, setData } = activitiesState.useQueryState();

  return {
    activities: data,
    isLoading,
    error,
    setActivities: setData,
  };
};

export const {
  queryAtom: activitiesQueryAtom,
  dataAtom: activitiesAtom,
  loadingAtom: activitiesLoadingAtom,
  errorAtom: activitiesErrorAtom,
} = activitiesState; 