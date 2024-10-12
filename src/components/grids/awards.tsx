'use client';

import { DefaultSkeleton } from '@/components/skeleton';
import { awardsErrorState, awardsLoadingState, awardsSelector, awardsState } from '@/states/awardsState';
import type { Award } from '@/types/Award';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

export default function Awards() {
  const setAwards = useSetRecoilState(awardsState);
  const setLoading = useSetRecoilState(awardsLoadingState);
  const setError = useSetRecoilState(awardsErrorState);
  const awardsLoadable = useRecoilValueLoadable(awardsSelector);

  useEffect(() => {
    switch (awardsLoadable.state) {
      case 'hasValue':
        setAwards(awardsLoadable.contents);
        setLoading(false);
        setError(null);
        break;
      case 'loading':
        setLoading(true);
        break;
      case 'hasError':
        setError(awardsLoadable.contents);
        setLoading(false);
        break;
    }
  }, [awardsLoadable, setAwards, setLoading, setError]);

  const awards = useRecoilValue(awardsState);
  const loading = useRecoilValue(awardsLoadingState);
  const error = useRecoilValue(awardsErrorState);

  const renderSkeletons = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <DefaultSkeleton key={index} />
      ))}
    </>
  );

  if (error) return <div>Error loading awards: {error.message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Awards</strong>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-spacing-400">
        {loading
          ? renderSkeletons()
          : awards.map((award: Award) => {
              const name = award?.properties?.name?.title[0]?.plain_text;
              const description = award?.properties?.description?.rich_text[0]?.plain_text;
              const date = award?.properties?.date?.date?.start;
              const formattedDate = date ? new Date(date).toISOString().slice(0, 7).replace(/-/g, '.') : null;
              const public_url = award?.public_url;

              return (
                <Link
                  key={award.id}
                  href={public_url || '#'}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center bg-components-fill-standard-primary rounded-radius-600 border border-line-outline p-spacing-400 ease-in-out duration-300 hover:opacity-50">
                  <span className="text-label text-content-standard-tertiary w-[65px] flex-shrink-0">
                    {formattedDate || 'Not Available'}
                  </span>
                  <div className="flex flex-col gap-spacing-100">
                    <span className="text-label">{name || 'Not Available'}</span>
                    <span className="text-footnote text-content-standard-secondary">
                      {description || 'Not Available'}
                    </span>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
