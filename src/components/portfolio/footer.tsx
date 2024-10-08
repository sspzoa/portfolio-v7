import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <span className="text-footnote text-content-standard-secondary self-center md:self-end text-center md:text-right w-full">
      &copy; 2023-{currentYear}{' '}
      <Link
        className="ease-in-out duration-300 hover:opacity-50"
        href="https://github.com/sspzoa"
        target="_blank"
        rel="noreferrer noopener">
        sspzoa
      </Link>
      . All rights reserved.
      <br />
      Powered by{' '}
      <Link
        className="ease-in-out duration-300 hover:opacity-50"
        href="https://www.figma.com/community/file/1396574400107385980"
        target="_blank"
        rel="noreferrer noopener">
        <strong>단아</strong>
      </Link>
      . / Inspired by{' '}
      <Link
        className="ease-in-out duration-300 hover:opacity-50"
        href="https://github.com/krisamin"
        target="_blank"
        rel="noreferrer noopener">
        <strong>noViceMin</strong>
      </Link>
      .
    </span>
  );
}
