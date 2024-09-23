import LandingPage from '@/components/landing/landingPage';
import InfoBar from '@/components/portfolio/infoBar';
import PortfolioGrid from '@/components/portfolio/portfolioGrid';
import PortfolioPage from '@/components/portfolio/portfolioPage';
import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const hostname = headersList.get('host') || '';
  const isPortfolio = hostname === 'portfolio.sspzoa.io' || hostname === 'localhost:3000';

  return isPortfolio ? <Portfolio /> : <Landing />;
}

function Portfolio() {
  return (
    <>
      <title>sspzoa&apos; Portfolio</title>
      <PortfolioPage />
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
