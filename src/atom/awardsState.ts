import type { Award } from '@/types/Award';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const awardsQueryAtom = atomWithQuery(() => ({
  queryKey: ['awards'],
  queryFn: async () => {
    const response = await fetch('/api/awards');
    if (!response.ok) {
      throw new Error('Failed to fetch awards');
    }
    const data = await response.json();
    return data.results as Award[];
  },
}));

export const awardsAtom = atom<Award[]>([]);

export const awardsLoadingAtom = atom<boolean>(true);

export const awardsErrorAtom = atom<Error | null>(null);
