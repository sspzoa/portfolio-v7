import type { ActivityType } from '@/types/grid/ActivityType';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const activitiesQueryAtom = atomWithQuery(() => ({
  queryKey: ['activities'],
  queryFn: async () => {
    const response = await fetch('/api/grid/activities');
    if (!response.ok) {
      throw new Error('Failed to fetch activities');
    }
    const data = await response.json();
    return data.results as ActivityType[];
  },
}));

export const activitiesAtom = atom<ActivityType[]>([]);

export const activitiesLoadingAtom = atom<boolean>(true);

export const activitiesErrorAtom = atom<Error | null>(null);
