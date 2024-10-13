'use client';

import { skillsAtom, skillsErrorAtom, skillsLoadingAtom, skillsQueryAtom } from '@/atom/info/skillsState';
import { DefaultSkeleton, SkillSkeleton } from '@/components/Skeleton';
import type { SkillType } from '@/types/info/SkillType';
import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { useEffect } from 'react';

const SkillItem = ({ name, icon }: { name: string; icon: string }) => (
  <img src={icon} alt={name} title={name} className="h-[32px] w-[32px] object-contain" draggable={false} />
);

export default function SkillsSection() {
  useHydrateAtoms([[skillsLoadingAtom, true]]);

  const [{ data, isLoading, error }] = useAtom(skillsQueryAtom);
  const [skills, setSkills] = useAtom(skillsAtom);
  const [loading, setLoading] = useAtom(skillsLoadingAtom);
  const [, setError] = useAtom(skillsErrorAtom);

  useEffect(() => {
    if (data) {
      setSkills(data);
      setLoading(false);
      setError(null);
    }
    if (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, [data, error, setSkills, setLoading, setError]);

  const renderSkeletons = () => (
    <>
      {[...Array(10)].map((_, index) => (
        <SkillSkeleton key={index} />
      ))}
    </>
  );

  if (error) return <div>Error loading skills: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300 items-center md:items-start">
      <strong className="text-label text-content-standard-tertiary">Skills</strong>
      <div className="flex flex-row flex-wrap gap-spacing-500 max-w-[240px]">
        {isLoading || loading
          ? renderSkeletons()
          : skills.map((skill: SkillType) => (
              <SkillItem
                key={skill.id}
                name={skill.properties.name?.title[0]?.plain_text || 'Unknown Skill'}
                icon={skill.properties.icon?.files[0]?.file?.url || '/placeholder-icon.png'}
              />
            ))}
      </div>
    </div>
  );
}
