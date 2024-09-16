import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <span className="text-footnote text-content-standard-secondary self-center md:self-end text-center md:text-right w-full">
      &copy; 2023-{currentYear}{' '}
      <Link href="https://github.com/sspzoa" target="_blank" rel="noreferrer">
        sspzoa
      </Link>
      . All rights reserved.
      <br />
      Powered by{' '}
      <Link href="https://www.figma.com/community/file/1396574400107385980" target="_blank" rel="noreferrer">
        단아
      </Link>
      . / Inspired by{' '}
      <Link href="https://github.com/krisamin" target="_blank" rel="noreferrer">
        noViceMin
      </Link>
      .
    </span>
  );
}
