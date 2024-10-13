import type { ProjectType } from '@/types/grid/ProjectType';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const projectsQueryAtom = atomWithQuery(() => ({
  queryKey: ['projects'],
  queryFn: async () => {
    const response = await fetch('/api/grid/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data.results as ProjectType[];
  },
}));

export const projectsAtom = atom<ProjectType[]>([]);

export const projectsLoadingAtom = atom<boolean>(true);

export const projectsErrorAtom = atom<Error | null>(null);

export const showSideProjectsAtom = atom<boolean>(false);
