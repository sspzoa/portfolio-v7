import type React from 'react';

export interface SkillType {
  name: string;
  icon: React.ReactNode;
}

export interface SkillsType {
  skills: SkillType[];
}
