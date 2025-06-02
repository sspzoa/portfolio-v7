'use client';

import React, { useCallback } from 'react';
import { useProjects, showSideProjectsAtom } from '@/lib/hooks/useProjects';
import { ProjectSkeleton } from '@/components/Skeleton';
import type { ProjectType } from '@/types/grid/ProjectType';
import { useAtom } from 'jotai';
import Link from 'next/link';

const ProjectCard = React.memo(({ project }: { project: ProjectType }) => {
  const icon = project?.icon?.file?.url;
  const cover = project?.cover?.file?.url;
  const name = project?.properties?.name?.title[0]?.plain_text;
  const description = project?.properties?.description?.rich_text[0]?.plain_text;
  const public_url = project?.public_url;

  return (
    <Link
      key={project.id}
      href={public_url || '#'}
      target="_blank"
      rel="noreferrer noopener"
      className="bg-components-fill-standard-primary border border-line-outline rounded-radius-600 ease-in-out duration-300 hover:opacity-50">
      <div className="relative">
        <img
          draggable={false}
          src={cover || '/images/og-image.png'}
          alt={`${name || 'Not Available'} cover`}
          width={500}
          height={300}
          className="w-full aspect-video rounded-t-radius-600 object-cover transition-opacity"
        />
      </div>
      <div className="flex flex-row p-spacing-300 w-full gap-spacing-300 items-center border-t border-t-line-divider">
        <img
          draggable={false}
          src={icon || '/images/sspzoa_logo.png'}
          alt={`${name || 'Not Available'} icon`}
          width={44}
          height={44}
          className="w-[44px] h-[44px] rounded-radius-200 object-contain"
        />
        <div className="flex flex-col gap-spacing-50">
          <span className="text-label">{name || 'Not Available'}</span>
          <span className="text-footnote text-content-standard-secondary">{description || 'Not Available'}</span>
        </div>
      </div>
    </Link>
  );
});

const ProjectGrid = React.memo(({ projects }: { projects: ProjectType[] }) => (
  <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-spacing-400">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
));

const ProjectsLoadingSkeleton = React.memo(() => (
  <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-spacing-400">
    {[...Array(6)].map((_, index) => (
      <ProjectSkeleton key={index} />
    ))}
  </div>
));

const ProjectsSection = React.memo(function ProjectsSection() {
  const { mainProjects, sideProjects, isLoading, error } = useProjects();
  const [showSideProjects, setShowSideProjects] = useAtom(showSideProjectsAtom);

  const toggleSideProjects = useCallback(() => {
    setShowSideProjects((prev) => !prev);
  }, [setShowSideProjects]);

  if (error) return <div>Error loading projects: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Projects</strong>
      {isLoading ? (
        <ProjectsLoadingSkeleton />
      ) : (
        <>
          <ProjectGrid projects={mainProjects} />
          {showSideProjects && (
            <>
              <strong className="text-label text-content-standard-tertiary mt-spacing-300">Side Projects</strong>
              <ProjectGrid projects={sideProjects} />
            </>
          )}
        </>
      )}
      <button type="button" onClick={toggleSideProjects} className="ease-in-out duration-300 hover:opacity-50">
        <strong className="text-label text-content-standard-tertiary">
          {showSideProjects ? '사이드 프로젝트 숨기기' : '사이드 프로젝트 보기'}
        </strong>
      </button>
    </div>
  );
});

export default ProjectsSection;
