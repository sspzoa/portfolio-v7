import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';

export default function Contributions() {
  return (
    <div className="flex flex-col gap-spacing-300">
      <div className="flex flex-row gap-spacing-400 items-center">
        <strong className="text-label text-content-standard-tertiary">Contributions</strong>
        <span className="text-label text-content-standard-quaternary">
          CSAT preparation period: <br className="md:hidden" />
          Jan 1 - Nov 19, 2025
        </span>
      </div>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/sspzoa"
        className="flex justify-center items-center bg-components-fill-standard-primary p-spacing-400 rounded-radius-600 ease-in-out duration-500 hover:bg-components-interactive-hover">
        <GitHubCalendar username="sspzoa" />
      </Link>
    </div>
  );
}