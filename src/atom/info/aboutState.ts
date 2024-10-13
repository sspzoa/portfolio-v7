import type { AboutType } from '@/types/info/AboutType';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const aboutQueryAtom = atomWithQuery(() => ({
  queryKey: ['about'],
  queryFn: async () => {
    const response = await fetch('/api/info/about');
    if (!response.ok) {
      throw new Error('Failed to fetch certificates');
    }
    const data = await response.json();
    return data.results as AboutType[];
  },
}));

export const aboutAtom = atom<AboutType[]>([]);

export const aboutLoadingAtom = atom<boolean>(true);

export const aboutErrorAtom = atom<Error | null>(null);
