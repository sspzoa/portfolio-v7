import { AndroidSvg, FastApiSvg, FlutterSvg, ReactSvg } from '@/resources/svg';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function InfoBar() {
  return (
    <div className="flex flex-col flex-shrink-0 p-spacing-800 pr-spacing-900 gap-spacing-800">
      <div className="flex flex-col gap-spacing-300">
        <Image
          className="rounded-radius-full"
          src="/images/sspzoa_logo.svg"
          alt="sspzoa_logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-spacing-100">
          <strong className="text-title">Seungpyo Suh</strong>
          <span className="text-body text-content-standard-secondary">Mobile & Frontend Engineer</span>
        </div>
      </div>
      <div className="flex flex-col gap-spacing-300">
        <strong className="text-label text-content-standard-tertiary">Skills</strong>
        <div className="flex flex-row gap-spacing-500">
          <FlutterSvg />
          <AndroidSvg />
          <ReactSvg />
          <FastApiSvg />
        </div>
      </div>
      <div className="flex flex-col gap-spacing-300">
        <strong className="text-label text-content-standard-tertiary">About</strong>
        <div className="flex flex-col gap-spacing-400">
          <div className="flex flex-row items-center gap-spacing-400">
            <span className="text-label text-content-standard-tertiary">2024.03~</span>
            <div className="flex flex-col">
              <span className="text-label">Project Manager</span>
              <span className="text-footnote text-content-standard-secondary">DIN(딘)</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-spacing-400">
            <span className="text-label text-content-standard-tertiary">2024.03~</span>
            <div className="flex flex-col">
              <span className="text-label">App Developer</span>
              <span className="text-footnote text-content-standard-secondary">Dimipay(디미페이)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-spacing-300 flex-grow justify-end">
        <strong className="text-label text-content-standard-tertiary">Contact</strong>
        <div className="flex flex-col gap-spacing-200">
          <Link href="mailto:me@sspzoa.io" className="flex flex-row items-center gap-spacing-200">
            <FontAwesomeIcon icon={faEnvelope} className="w-[14px] h-[14px]" />
            <span className="text-label text-content-standard-secondary">me@sspzoa.io</span>
          </Link>
          <Link
            href="https://github.com/sspzoa"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-spacing-200">
            <FontAwesomeIcon icon={faGithub} className="w-[14px] h-[14px]" />
            <span className="text-label text-content-standard-secondary">sspzoa</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/seungpyosuh/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-spacing-200">
            <FontAwesomeIcon icon={faLinkedin} className="w-[14px] h-[14px]" />
            <span className="text-label text-content-standard-secondary">seungpyosuh</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
