import type { ContactItemType, ContactType } from '@/types/info/ContactType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ContactItem = ({ href, icon, text }: ContactItemType) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="flex flex-row items-center gap-spacing-200 ease-in-out duration-300 hover:opacity-50">
    <FontAwesomeIcon icon={icon} className="w-[14px] h-[14px]" />
    <span className="text-label text-content-standard-secondary">{text}</span>
  </Link>
);

export const ContactSection = ({ items }: ContactType) => (
  <div className="flex flex-col gap-spacing-300 flex-grow justify-end items-center md:items-start">
    <strong className="text-label text-content-standard-tertiary">Contact</strong>
    <div className="flex flex-col gap-spacing-200">
      {items.map((item, index) => (
        <ContactItem key={index} {...item} />
      ))}
    </div>
  </div>
);
