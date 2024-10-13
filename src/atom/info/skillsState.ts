import type { SkillType } from '@/types/info/SkillType';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';

export const skillsQueryAtom = atomWithQuery(() => ({
  queryKey: ['skills'],
  queryFn: async () => {
    const response = await fetch('/api/info/skills');
    if (!response.ok) {
      throw new Error('Failed to fetch certificates');
    }
    const data = await response.json();
    return data.results as SkillType[];
  },
}));

export const skillsAtom = atom<SkillType[]>([]);

export const skillsLoadingAtom = atom<boolean>(true);

export const skillsErrorAtom = atom<Error | null>(null);
