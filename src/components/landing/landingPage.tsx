import { GithubSvg } from '@/resources/svg';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col gap-spacing-700 justify-center items-center">
          <div className="flex flex-col gap-spacing-550 md:gap-spacing-850 justify-center items-center">
            <div className="flex flex-row gap-spacing-300 md:gap-spacing-550 justify-center items-center">
              <Link className="ease-in-out duration-500 hover:opacity-50" href="/portfolio">
                <Image
                  className="w-[64px] h-[64px] md:w-[128px] md:h-[128px] rounded-[25%] shadow-[#6d87a8] shadow-2xl"
                  draggable={false}
                  src="/images/sspzoa_logo.svg"
                  alt="sspzoa"
                  width={128}
                  height={128}
                />
              </Link>
              <Link
                className="ease-in-out duration-500 hover:opacity-50 rounded-[25%] shadow-content-standard-primary shadow-2xl"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/sspzoa">
                <GithubSvg />
              </Link>
              <Link
                className="ease-in-out duration-500 hover:opacity-50"
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/seungpyosuh/">
                <Image
                  className="w-[64px] h-[64px] md:w-[128px] md:h-[128px] rounded-[25%] shadow-[#007EBB] shadow-2xl"
                  draggable={false}
                  src="/images/linkedin-icon.svg"
                  alt="sspzoa"
                  width={128}
                  height={128}
                />
              </Link>
            </div>
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
