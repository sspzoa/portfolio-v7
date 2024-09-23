import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';

interface BoxProps {
  children: React.ReactNode;
  blocks?: number;
  href?: string;
}

export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col gap-spacing-700 justify-center items-center">
          <div className="flex flex-row gap-spacing-700 justify-center">
            <Link className="ease-in-out duration-500 hover:opacity-50" href="https://portfolio.sspzoa.io">
              <Image
                className="rounded-[40px] shadow-[#6d87a8] shadow-2xl"
                draggable={false}
                src="/images/sspzoa_logo.svg"
                alt="sspzoa"
                width={160}
                height={160}
              />
            </Link>
          </div>
        </div>
      </div>
      <footer className="w-full text-center pb-spacing-700">
        <span className="text-footnote text-content-standard-secondary">
          &copy; 2023-{currentYear}{' '}
          <Link
            className="ease-in-out duration-500 hover:opacity-50"
            href="https://github.com/sspzoa"
            target="_blank"
            rel="noreferrer noopener">
            sspzoa
          </Link>
          . All rights reserved.
        </span>
      </footer>
    </div>
  );
}
