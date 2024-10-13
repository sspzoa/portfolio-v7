import type { AboutItemType, AboutType } from '@/types/info/AboutType';
import Link from 'next/link';

const AboutItem = ({ date, title, organization, link }: AboutItemType) => (
  <div className="flex flex-row items-center">
    <span className="text-label text-content-standard-tertiary w-[75px] flex-shrink-0">{date}</span>
    <div className="flex flex-col gap-spacing-100">
      <span className="text-label">{title}</span>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="ease-in-out duration-300 hover:opacity-50 text-footnote text-content-standard-secondary">
        {organization}
      </Link>
    </div>
  </div>
);

export const AboutSection = ({ items }: AboutType) => (
  <div className="flex flex-col gap-spacing-300 items-center md:items-start">
    <strong className="text-label text-content-standard-tertiary">About</strong>
    <div className="flex flex-col gap-spacing-400">
      {items.map((item, index) => (
        <AboutItem key={index} {...item} />
      ))}
    </div>
  </div>
);
