import { atom } from 'jotai';
import { createQueryState } from './useQueryState';
import { getProjects } from '../api/services';
import type { ProjectType } from '@/types/grid/ProjectType';

const projectsState = createQueryState<ProjectType[]>({
  queryKey: ['projects'],
  queryFn: getProjects,
  initialValue: [],
});

export const showSideProjectsAtom = atom<boolean>(false);

export const useProjects = () => {
  const { data, isLoading, error, setData } = projectsState.useQueryState();

  const mainProjects = data.filter((project) => !project.properties.isSideProject?.checkbox);
  const sideProjects = data.filter((project) => project.properties.isSideProject?.checkbox);

  return {
    projects: data,
    mainProjects,
    sideProjects,
    isLoading,
    error,
    setProjects: setData,
  };
};

export const {
  queryAtom: projectsQueryAtom,
  dataAtom: projectsAtom,
  loadingAtom: projectsLoadingAtom,
  errorAtom: projectsErrorAtom,
} = projectsState; 