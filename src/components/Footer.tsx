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
    </span>
  );
}
