import type { SkillType, SkillsType } from '@/types/info/SkillType';

const SkillItem = ({ name, icon }: SkillType) => <div title={name}>{icon}</div>;

export const SkillsSection = ({ skills }: SkillsType) => (
  <div className="flex flex-col gap-spacing-300 items-center md:items-start">
    <strong className="text-label text-content-standard-tertiary">Skills</strong>
    <div className="flex flex-row gap-spacing-500">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </div>
);
