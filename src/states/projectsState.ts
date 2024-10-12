import type { Project } from '@/types/Project';
import { atom, atomFamily, selector } from 'recoil';

export const projectsQuery = atomFamily({
  key: 'ProjectsQuery',
  default: async () => {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data.results;
  },
});

export const projectsState = atom<Project[]>({
  key: 'projectsState',
  default: [],
});

export const projectsLoadingState = atom<boolean>({
  key: 'projectsLoadingState',
  default: true,
});

export const projectsErrorState = atom<Error | null>({
  key: 'projectsErrorState',
  default: null,
});

export const projectsSelector = selector({
  key: 'projectsSelector',
  get: async ({ get }) => {
    return get(projectsQuery('default'));
  },
});

export const showSideProjectsState = atom<boolean>({
  key: 'showSideProjectsState',
  default: false,
});
