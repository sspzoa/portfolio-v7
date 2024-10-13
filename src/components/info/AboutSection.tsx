'use client';

import { aboutAtom, aboutErrorAtom, aboutLoadingAtom, aboutQueryAtom } from '@/atom/info/aboutState';
import { AboutSkeleton, DefaultSkeleton } from '@/components/Skeleton';
import type { AboutType } from '@/types/info/AboutType';
import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import Link from 'next/link';
import { useEffect } from 'react';

const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}~`;
};

const AboutItem = ({
  date,
  name,
  organization,
  url,
}: {
  date?: string;
  name?: string;
  organization?: string;
  url?: string;
}) => (
  <div className="flex flex-row items-center">
    <span className="text-label text-content-standard-tertiary w-[75px] flex-shrink-0">{formatDate(date)}</span>
    <div className="flex flex-col gap-spacing-100">
      <span className="text-label">{name || 'Untitled'}</span>
      {url ? (
        <Link
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="ease-in-out duration-300 hover:opacity-50 text-footnote text-content-standard-secondary">
          {organization || 'Unknown Organization'}
        </Link>
      ) : (
        <span className="text-footnote text-content-standard-secondary">{organization || 'Unknown Organization'}</span>
      )}
    </div>
  </div>
);

export default function AboutSection() {
  useHydrateAtoms([[aboutLoadingAtom, true]]);

  const [{ data, isLoading, error }] = useAtom(aboutQueryAtom);
  const [about, setAbout] = useAtom(aboutAtom);
  const [loading, setLoading] = useAtom(aboutLoadingAtom);
  const [, setError] = useAtom(aboutErrorAtom);

  useEffect(() => {
    if (data) {
      setAbout(data);
      setLoading(false);
      setError(null);
    }
    if (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, [data, error, setAbout, setLoading, setError]);

  const renderSkeletons = () => (
    <>
      {[...Array(2)].map((_, index) => (
        <AboutSkeleton key={index} />
      ))}
    </>
  );

  if (error) return <div>Error loading about information: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300 items-center md:items-start">
      <strong className="text-label text-content-standard-tertiary">About</strong>
      <div className="flex flex-col gap-spacing-400">
        {isLoading || loading
          ? renderSkeletons()
          : about.map((item: AboutType) => (
              <AboutItem
                key={item.id}
                date={item.properties.date?.date?.start}
                name={item.properties.name?.title[0]?.plain_text}
                organization={item.properties.organization?.rich_text[0]?.plain_text}
                url={item.properties.url?.rich_text[0]?.plain_text}
              />
            ))}
      </div>
    </div>
  );
}
