import InfoBar from '@/components/portfolio/infoBar';
import PortfolioGrid from '@/components/portfolio/portfolioGrid';

export default function PortfolioPage() {
  return (
    <div className="w-full flex flex-col md:flex-row h-[100dvh]">
      <InfoBar />
      <PortfolioGrid />
    </div>
  );
}
