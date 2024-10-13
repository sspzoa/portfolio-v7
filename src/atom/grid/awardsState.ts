import type { AwardType } from '@/types/grid/AwardType';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const awardsQueryAtom = atomWithQuery(() => ({
  queryKey: ['awards'],
  queryFn: async () => {
    const response = await fetch('/api/grid/awards');
    if (!response.ok) {
      throw new Error('Failed to fetch awards');
    }
    const data = await response.json();
    return data.results as AwardType[];
  },
}));

export const awardsAtom = atom<AwardType[]>([]);

export const awardsLoadingAtom = atom<boolean>(true);

export const awardsErrorAtom = atom<Error | null>(null);
