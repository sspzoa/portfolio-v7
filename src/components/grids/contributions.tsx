import GitHubCalendar from 'react-github-calendar';

export default function Contributions() {
  return (
    <div className="flex flex-col gap-spacing-300">
      <strong className="text-label text-content-standard-tertiary">Contributions</strong>
      <div className="flex justify-center items-center bg-components-fill-standard-primary p-spacing-400 rounded-radius-600">
        <GitHubCalendar username="sspzoa" />
      </div>
    </div>
  );
}
