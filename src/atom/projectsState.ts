import type { Project } from '@/types/Project';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const projectsQueryAtom = atomWithQuery(() => ({
  queryKey: ['projects'],
  queryFn: async () => {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data.results as Project[];
  },
}));

export const projectsAtom = atom<Project[]>([]);

export const projectsLoadingAtom = atom<boolean>(true);

export const projectsErrorAtom = atom<Error | null>(null);

export const showSideProjectsAtom = atom<boolean>(false);
