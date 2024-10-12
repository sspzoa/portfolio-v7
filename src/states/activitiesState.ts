import type { Activity } from '@/types/Activity';
import { atom, atomFamily, selector } from 'recoil';

export const activitiesQuery = atomFamily({
  key: 'ActivitiesQuery',
  default: async () => {
    const response = await fetch('/api/activities');
    if (!response.ok) {
      throw new Error('Failed to fetch activities');
    }
    const data = await response.json();
    return data.results;
  },
});

export const activitiesState = atom<Activity[]>({
  key: 'activitiesState',
  default: [],
});

export const activitiesLoadingState = atom<boolean>({
  key: 'activitiesLoadingState',
  default: true,
});

export const activitiesErrorState = atom<Error | null>({
  key: 'activitiesErrorState',
  default: null,
});

export const activitiesSelector = selector({
  key: 'activitiesSelector',
  get: async ({ get }) => {
    return get(activitiesQuery('default'));
  },
});
