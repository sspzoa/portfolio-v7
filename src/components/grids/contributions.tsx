import Link from 'next/link';
import GitHubCalendar from 'react-github-calendar';

export default function Contributions() {
  return (
    <div className="flex flex-col gap-spacing-300">
      <div className="flex flex-row gap-spacing-400">
        <strong className="text-label text-content-standard-tertiary">Contributions</strong>
        <strong className="text-label text-solid-red">No commits: Jan 1 - Nov 19, 2025</strong>
      </div>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://github.com/sspzoa"
        className="flex justify-center items-center bg-components-fill-standard-primary p-spacing-400 rounded-radius-600 ease-in-out duration-500 hover:bg-components-interactive-hover">
        <GitHubCalendar username="sspzoa" />
      </Link>
    </div>
  );
}
