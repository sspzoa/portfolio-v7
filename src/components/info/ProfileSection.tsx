import type { ProfileType } from '@/types/info/ProfileType';
import Image from 'next/image';

export const ProfileSection = ({ imageUrl, name, title }: ProfileType) => (
  <div className="flex flex-col gap-spacing-300 items-center md:items-start">
    <Image
      className="rounded-radius-full border border-line-outline"
      src={imageUrl}
      draggable={false}
      alt={`${name}'s profile`}
      width={100}
      height={100}
    />
    <div className="flex flex-col gap-spacing-100 items-center md:items-start">
      <strong className="text-title">{name}</strong>
      <span className="text-body text-content-standard-secondary">{title}</span>
    </div>
  </div>
);
