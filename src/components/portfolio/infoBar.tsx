import { AndroidSvg, FastApiSvg, FlutterSvg, NextSvg } from '@/resources/svg';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function InfoBar() {
  return (
    <div className="flex flex-col flex-shrink-0 p-spacing-800 md:pr-spacing-900 gap-spacing-800 items-center md:items-start">
      <div className="flex flex-col gap-spacing-300 items-center md:items-start">
        <Image
          className="rounded-radius-full border border-line-outline"
          src="/images/sspzoa_logo.svg"
          draggable={false}
          alt="sspzoa_logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-spacing-100 items-center md:items-start">
          <strong className="text-title">Seungpyo Suh</strong>
          <span className="text-body text-content-standard-secondary">Mobile & Frontend Engineer</span>
        </div>
      </div>
      <div className="flex flex-col gap-spacing-300 items-center md:items-start">
        <strong className="text-label text-content-standard-tertiary">Skills</strong>
        <div className="flex flex-row gap-spacing-500">
          <FlutterSvg />
          <AndroidSvg />
          <NextSvg />
          <FastApiSvg />
        </div>
      </div>
      <div className="flex flex-col gap-spacing-300 items-center md:items-start">
        <strong className="text-label text-content-standard-tertiary">About</strong>
        <div className="flex flex-col gap-spacing-400">
          <div className="flex flex-row items-center">
            <span className="text-label text-content-standard-tertiary w-[75px] flex-shrink-0">2024.03~</span>
            <div className="flex flex-col gap-spacing-100">
              <span className="text-label">Project Manager</span>
              <Link
                href="https://github.com/dimigo-din"
                target="_blank"
                rel="noreferrer noopener"
                className="ease-in-out duration-500 hover:opacity-50 text-footnote text-content-standard-secondary">
                DIN
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-label text-content-standard-tertiary w-[75px] flex-shrink-0">2023.10~</span>
            <div className="flex flex-col gap-spacing-100">
              <span className="text-label">App Developer</span>
              <Link
                href="https://github.com/dimipay"
                target="_blank"
                rel="noreferrer noopener"
                className="ease-in-out duration-500 hover:opacity-50 text-footnote text-content-standard-secondary">
                DIMIPAY
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-label text-content-standard-tertiary w-[75px] flex-shrink-0">2023.03~</span>
            <div className="flex flex-col gap-spacing-100">
              <span className="text-label">해킹방어과</span>
              <Link
                href="https://www.dimigo.hs.kr/"
                target="_blank"
                rel="noreferrer noopener"
                className="ease-in-out duration-500 hover:opacity-50 text-footnote text-content-standard-secondary">
                한국디지털미디어고등학교
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-spacing-300 flex-grow justify-end items-center md:items-start">
        <strong className="text-label text-content-standard-tertiary">Contact</strong>
        <div className="flex flex-col gap-spacing-200">
          <Link
            href="https://discord.com/users/416804424275722240"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
            <FontAwesomeIcon icon={faDiscord} className="w-[14px] h-[14px]" />
            <span className="text-label text-content-standard-secondary">sspzoa</span>
          </Link>
          <Link
            href="mailto:me@sspzoa.io"
            className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
            <FontAwesomeIcon icon={faEnvelope} className="w-[14px] h-[14px]" />
            <span className="text-label text-content-standard-secondary">me@sspzoa.io</span>
          </Link>
          <Link
            href="https://github.com/sspzoa"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
            <FontAwesomeIcon icon={faGithub} className="w-[14px] h-[14px]" />
            <span className="text-label text-content-standard-secondary">sspzoa</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/seungpyosuh/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center gap-spacing-200 ease-in-out duration-500 hover:opacity-50">
            <FontAwesomeIcon icon={faLinkedin} className="w-[14px] h-[14px]" />
            <span className="text-label text-content-standard-secondary">seungpyosuh</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
