import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', ...props }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} {...props} />
);

export const ProjectSkeleton: React.FC = () => (
  <div className="bg-components-fill-standard-secondary border border-line-outline rounded-radius-600 animate-pulse">
    <Image
      src="/images/og-image.png"
      alt="skelton"
      width={500}
      height={300}
      className="w-full aspect-video rounded-t-radius-600 object-cover opacity-0"
    />
    <div className="flex flex-row p-spacing-300 w-full gap-spacing-300 items-center border-t border-t-line-divider">
      <Skeleton className="w-[44px] h-[44px] rounded-radius-200" />
      <div className="flex flex-col gap-spacing-50 flex-grow">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  </div>
);

export const SkillSkeleton: React.FC = () => (
  <div className="flex flex-col bg-components-fill-standard-secondary rounded-radius-full animate-pulse">
    <Skeleton className="w-[32px] h-[32px] flex-shrink-0" />
  </div>
);

export const AboutSkeleton: React.FC = () => (
  <div className="flex flex-row items-center">
    <div className="w-[75px]">
      <Skeleton className="w-[60px] h-[22px] bg-components-fill-standard-secondary rounded-radius-100 animate-pulse" />
    </div>
    <div className="flex flex-col gap-spacing-100">
      <Skeleton className="w-[80px] h-[22px] bg-components-fill-standard-secondary rounded-radius-100 animate-pulse" />
      <Skeleton className="w-[120px] h-[20px] bg-components-fill-standard-secondary rounded-radius-100 animate-pulse" />
    </div>
  </div>
);

export const DefaultSkeleton: React.FC = () => (
  <div className="flex flex-row items-center bg-components-fill-standard-secondary rounded-radius-600 border border-line-outline p-spacing-400 animate-pulse">
    <Skeleton className="w-[65px] h-4 flex-shrink-0" />
    <div className="flex flex-col gap-spacing-100 flex-grow">
      <Skeleton className="h-[22px] w-3/4" />
      <Skeleton className="h-[20px] w-1/2" />
    </div>
  </div>
);

export default Skeleton;
