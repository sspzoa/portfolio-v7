import { ArrowSvg } from '@/resources/svg';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col gap-spacing-700 justify-center items-center">
          <div className="flex flex-col gap-spacing-550 md:gap-spacing-850 justify-center items-center">
            <Link className="ease-in-out duration-500 hover:opacity-50" href="https://portfolio.sspzoa.io">
              <Image
                className="w-[128px] h-[128px] md:w-[256px] md:h-[256px] rounded-[32px] md:rounded-[64px] shadow-[#6d87a8] shadow-2xl"
                draggable={false}
                src="/images/sspzoa_logo.svg"
                alt="sspzoa"
                width={256}
                height={256}
              />
            </Link>
            <strong className="text-title md:text-display">
              sspzoa <span className="text-content-standard-tertiary">Seungpyo Suh</span>
            </strong>
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
