'use client';

import {
  activitiesAtom,
  activitiesErrorAtom,
  activitiesLoadingAtom,
  activitiesQueryAtom,
} from '@/atom/grid/activitiesState';
import { DefaultSkeleton } from '@/components/Skeleton';
import type { ActivityType } from '@/types/grid/ActivityType';
import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ActivitiesSection() {
  useHydrateAtoms([[activitiesLoadingAtom, true]]);

  const [{ data, isLoading, error }] = useAtom(activitiesQueryAtom);
  const [activities, setActivities] = useAtom(activitiesAtom);
  const [loading, setLoading] = useAtom(activitiesLoadingAtom);
  const [, setError] = useAtom(activitiesErrorAtom);

  useEffect(() => {
    if (data) {
      setActivities(data);
      setLoading(false);
      setError(null);
    }
    if (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, [data, error, setActivities, setLoading, setError]);

  const renderSkeletons = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <DefaultSkeleton key={index} />
      ))}
    </>
  );

  if (error) return <div>Error loading activities: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Activities</strong>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-spacing-400">
        {isLoading || loading
          ? renderSkeletons()
          : activities.map((activity: ActivityType) => {
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
                  rel="noreferrer noopener"
                  className="flex flex-row items-center bg-components-fill-standard-primary rounded-radius-600 border border-line-outline p-spacing-400 ease-in-out duration-300 hover:opacity-50">
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
