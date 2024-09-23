import LandingPage from '@/components/landing/landingPage';
import InfoBar from '@/components/portfolio/infoBar';
import PortfolioGrid from '@/components/portfolio/portfolioGrid';
import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const hostname = headersList.get('host') || '';
  const isPortfolio = hostname === 'portfolio.sspzoa.io';

  return isPortfolio ? <Portfolio /> : <Landing />;
}

function Portfolio() {
  return (
    <>
      <title>sspzoa&apos; Portfolio</title>
      <div className="w-full flex flex-col md:flex-row h-screen">
        <InfoBar />
        <PortfolioGrid />
      </div>
    </>
  );
}

function Landing() {
  return (
    <>
      <title>I&apos;m Seungpyo Suh</title>
      <LandingPage />
    </>
  );
}
