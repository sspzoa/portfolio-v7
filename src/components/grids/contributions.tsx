import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';

export default function Contributions() {
  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Contributions</strong>
      <div className="relative group">
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sspzoa"
          className="flex justify-center items-center bg-components-fill-standard-primary p-spacing-400 rounded-radius-600 transition-all duration-500 group-hover:blur-xl">
          <GitHubCalendar username="sspzoa" />
        </Link>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <strong className="text-solid-red text-body text-nowrap">No commits: Jan 1 - Nov 19, 2025.</strong>
        </div>
      </div>
    </div>
  );
}
