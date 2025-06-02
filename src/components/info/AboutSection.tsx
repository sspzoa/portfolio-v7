'use client';

import React from 'react';
import { AboutSkeleton } from '@/components/Skeleton';
import type { AboutType } from '@/types/info/AboutType';
import Link from 'next/link';
import { useAbout } from '@/lib/hooks/useAbout';

const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}~`;
};

const AboutItem = React.memo(
  ({
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
          <span className="text-footnote text-content-standard-secondary">
            {organization || 'Unknown Organization'}
          </span>
        )}
      </div>
    </div>
  ),
);

const AboutSkeletonContainer = React.memo(() => (
  <>
    {[...Array(2)].map((_, index) => (
      <AboutSkeleton key={index} />
    ))}
  </>
));

const AboutSection = React.memo(function AboutSection() {
  const { about, isLoading, error } = useAbout();

  if (error) return <div>Error loading about information: {(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-spacing-300 items-center md:items-start">
      <strong className="text-label text-content-standard-tertiary">About</strong>
      <div className="flex flex-col gap-spacing-400">
        {isLoading ? (
          <AboutSkeletonContainer />
        ) : (
          about.map((item: AboutType) => (
            <AboutItem
              key={item.id}
              date={item.properties.date?.date?.start}
              name={item.properties.name?.title[0]?.plain_text}
              organization={item.properties.organization?.rich_text[0]?.plain_text}
              url={item.properties.url?.rich_text[0]?.plain_text}
            />
          ))
        )}
      </div>
    </div>
  );
});

export default AboutSection;
