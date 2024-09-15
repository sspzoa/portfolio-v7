import InfoBar from '@/components/infoBar';
import PortfolioGrid from '@/components/portfolioGrid';

export default function Home() {
  return (
    <div className="w-full flex flex-row h-screen">
      <InfoBar />
      <PortfolioGrid />
    </div>
  );
}
