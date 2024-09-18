import { useActivities } from '@/hooks/useActivities';
import type { Activity } from '@/types/Activity';
import Link from 'next/link';

export default function Activities() {
  const data = useActivities();

  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Activities</strong>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-spacing-400">
        {data.results.map((activity: Activity) => {
          const name = activity?.properties?.name?.title[0]?.plain_text;
          const hosts = activity?.properties?.host?.multi_select.map((item) => item.name).join(', ');
          const date = activity?.properties?.date?.date?.start;
          const formattedDate = date ? new Date(date).toISOString().slice(0, 7).replace(/-/g, '.') : null;
          const public_url = activity?.public_url;

          return (
            <Link
              key={activity.id}
              href={public_url || '#'}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center bg-components-fill-standard-primary rounded-radius-600 border border-line-outline p-spacing-400 ease-in-out duration-500 hover:bg-components-interactive-hover">
              <span className="text-label text-content-standard-tertiary w-[65px] flex-shrink-0">
                {formattedDate || 'Not Available'}
              </span>
              <div className="flex flex-col gap-spacing-100">
                <span className="text-label">{name || 'Not Available'}</span>
                <span className="text-footnote text-content-standard-secondary">{hosts || 'Not Available'}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
