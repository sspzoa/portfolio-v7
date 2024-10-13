import { AboutSection } from '@/components/info/AboutSection';
import { ContactSection } from '@/components/info/ContactSection';
import { ProfileSection } from '@/components/info/ProfileSection';
import { SkillsSection } from '@/components/info/SkillsSection';
import { AndroidSvg, FastApiSvg, FlutterSvg, NextSvg } from '@/resources/svg';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Info() {
  const profile = {
    imageUrl: '/images/sspzoa_logo.svg',
    name: 'Seungpyo Suh',
    title: 'Mobile & Frontend Engineer',
  };

  const skills = [
    { name: 'Flutter', icon: <FlutterSvg /> },
    { name: 'Android', icon: <AndroidSvg /> },
    { name: 'Next.js', icon: <NextSvg /> },
    { name: 'FastAPI', icon: <FastApiSvg /> },
  ];

  const aboutItems = [
    {
      date: '2023.10~',
      title: 'App Developer',
      organization: 'DIMIPAY',
      link: 'https://github.com/dimipay',
    },
    {
      date: '2023.03~',
      title: '해킹방어과',
      organization: '한국디지털미디어고등학교',
      link: 'https://www.dimigo.hs.kr/',
    },
  ];

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
    <div className="flex flex-col flex-shrink-0 p-spacing-800 md:pr-spacing-900 gap-spacing-800 items-center md:items-start">
      <ProfileSection {...profile} />
      <SkillsSection skills={skills} />
      <AboutSection items={aboutItems} />
      <ContactSection items={contactItems} />
    </div>
  );
}
