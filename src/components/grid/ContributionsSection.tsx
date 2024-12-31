import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';

export default function ContributionsSection() {
  return (
    <div className="flex flex-col gap-spacing-300">
      <div className="flex flex-col md:flex-row gap-spacing-300 md:gap-spacing-400">
        <strong className="text-label text-content-standard-tertiary">Contributions</strong>
        <span className="text-label text-content-standard-quaternary">
          CSAT preparation period: Jan 1 - Nov 12, 2025
        </span>
      </div>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/sspzoa"
        className="h-[206px] flex justify-center items-center bg-components-fill-standard-primary p-spacing-400 rounded-radius-600 ease-in-out duration-300 hover:opacity-50">
        <GitHubCalendar username="sspzoa" />
      </Link>
    </div>
  );
}
