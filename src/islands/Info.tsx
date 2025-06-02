import AboutSection from '@/components/info/AboutSection';
import { ContactSection } from '@/components/info/ContactSection';
import { ProfileSection } from '@/components/info/ProfileSection';
import SkillsSection from '@/components/info/SkillsSection';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const PROFILE = {
  imageUrl: '/images/sspzoa_logo.svg',
  name: 'Seungpyo Suh',
  title: 'Mobile & Frontend Engineer',
};

const CONTACT_ITEMS = [
  {
    href: 'mailto:me@sspzoa.io',
    icon: faEnvelope,
    text: 'me@sspzoa.io',
  },
  {
    href: 'https://github.com/sspzoa',
    icon: faGithub,
    text: 'sspzoa',
  },
  {
    href: 'https://www.linkedin.com/in/seungpyosuh/',
    icon: faLinkedin,
    text: 'seungpyosuh',
  },
];

const Info = React.memo(function Info() {
  return (
    <div className="flex flex-col flex-shrink-0 p-spacing-800 md:w-[320px] gap-spacing-800 items-center md:items-start">
      <ProfileSection {...PROFILE} />
      <SkillsSection />
      <AboutSection />
      <ContactSection items={CONTACT_ITEMS} />
    </div>
  );
});

export default Info;
