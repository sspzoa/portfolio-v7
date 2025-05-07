import { createQueryState } from './useQueryState';
import { getSkills } from '../api/services';
import type { SkillType } from '@/types/info/SkillType';

const skillsState = createQueryState<SkillType[]>({
  queryKey: ['skills'],
  queryFn: getSkills,
  initialValue: [],
});

export const useSkills = () => {
  const { data, isLoading, error, setData } = skillsState.useQueryState();

  return {
    skills: data,
    isLoading,
    error,
    setSkills: setData,
  };
};

export const {
  queryAtom: skillsQueryAtom,
  dataAtom: skillsAtom,
  loadingAtom: skillsLoadingAtom,
  errorAtom: skillsErrorAtom,
} = skillsState; 