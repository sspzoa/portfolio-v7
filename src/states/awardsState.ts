import type { Award } from '@/types/Award';
import { atom, atomFamily, selector } from 'recoil';

export const awardsQuery = atomFamily({
  key: 'AwardsQuery',
  default: async () => {
    const response = await fetch('/api/awards');
    if (!response.ok) {
      throw new Error('Failed to fetch awards');
    }
    const data = await response.json();
    return data.results;
  },
});

export const awardsState = atom<Award[]>({
  key: 'awardsState',
  default: [],
});

export const awardsLoadingState = atom<boolean>({
  key: 'awardsLoadingState',
  default: true,
});

export const awardsErrorState = atom<Error | null>({
  key: 'awardsErrorState',
  default: null,
});

export const awardsSelector = selector({
  key: 'awardsSelector',
  get: async ({ get }) => {
    return get(awardsQuery('default'));
  },
});
