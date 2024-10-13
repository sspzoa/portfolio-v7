import type { Activity } from '@/types/Activity';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const activitiesQueryAtom = atomWithQuery(() => ({
  queryKey: ['activities'],
  queryFn: async () => {
    const response = await fetch('/api/activities');
    if (!response.ok) {
      throw new Error('Failed to fetch activities');
    }
    const data = await response.json();
    return data.results as Activity[];
  },
}));

export const activitiesAtom = atom<Activity[]>([]);

export const activitiesLoadingAtom = atom<boolean>(true);

export const activitiesErrorAtom = atom<Error | null>(null);
