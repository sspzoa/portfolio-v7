'use client';

import React from 'react';
import { SkillSkeleton } from '@/components/Skeleton';
import type { SkillType } from '@/types/info/SkillType';
import { useSkills } from '@/lib/hooks/useSkills';

const SkillItem = React.memo(({ name, icon }: { name: string; icon: string }) => (
  <img src={icon} alt={name} title={name} className="h-[32px] w-[32px] object-contain" draggable={false} />
));

const SkillsSkeletonContainer = React.memo(() => (
  <>
    {[...Array(10)].map((_, index) => (
      <SkillSkeleton key={index} />
    ))}
  </>
));

const SkillsSection = React.memo(function SkillsSection() {
  const { skills, isLoading, error } = useSkills();

  if (error) return <div>Error loading skills: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300 items-center md:items-start">
      <strong className="text-label text-content-standard-tertiary">Skills</strong>
      <div className="flex flex-row flex-wrap gap-spacing-500 max-w-[240px]">
        {isLoading
          ? <SkillsSkeletonContainer />
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
});

export default SkillsSection;
