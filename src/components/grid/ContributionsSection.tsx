import React from 'react';
import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';

const ContributionsSection = React.memo(function ContributionsSection() {
  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Contributions</strong>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/sspzoa"
        className="h-[206px] flex justify-center items-center bg-components-fill-standard-primary p-spacing-400 rounded-radius-600 ease-in-out duration-300 hover:opacity-50">
        <GitHubCalendar username="sspzoa"/>
      </Link>
    </div>
  );
});

export default ContributionsSection;
