import AboutSection from '@/components/info/AboutSection';
import { ContactSection } from '@/components/info/ContactSection';
import { ProfileSection } from '@/components/info/ProfileSection';
import SkillsSection from '@/components/info/SkillsSection';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Info() {
  const profile = {
    imageUrl: '/images/sspzoa_logo.svg',
    name: 'Seungpyo Suh',
    title: 'Mobile & Frontend Engineer',
  };

  const contactItems = [
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

  return (
    <div className="flex flex-col flex-shrink-0 p-spacing-800 md:w-[320px] gap-spacing-800 items-center md:items-start">
      <ProfileSection {...profile} />
      <SkillsSection />
      <AboutSection />
      <ContactSection items={contactItems} />
    </div>
  );
}
