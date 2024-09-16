import { useProjects } from '@/hooks/useProjects';
import type { Project } from '@/types/Project';
import Link from 'next/link';

export default function Projects() {
  const data = useProjects();

  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Projects</strong>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-spacing-400">
        {data.results.map((project: Project) => {
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
              rel="noreferrer"
              className="bg-components-fill-standard-primary border border-line-outline rounded-radius-600 ease-in-out duration-500 hover:-translate-y-[8px]">
              <img
                src={cover || '/images/og-image.png'}
                alt={`${name || 'Not Available'} cover`}
                className="w-full aspect-video rounded-t-radius-600 object-cover"
              />
              <div className="flex flex-row p-spacing-300 w-full gap-spacing-300 items-center border-t border-t-line-divider">
                <img
                  src={icon || '/images/sspzoa_logo.png'}
                  alt={`${name || 'Not Available'} icon`}
                  className="w-[44px] h-[44px] rounded-radius-200 object-contain"
                />
                <div className="flex flex-col gap-spacing-50">
                  <span className="text-label">{name || 'Not Available'}</span>
                  <span className="text-footnote text-content-standard-secondary">
                    {description || 'Not Available'}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
