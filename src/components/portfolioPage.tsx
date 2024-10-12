import InfoBar from '@/components/infoBar';
import PortfolioGrid from '@/components/portfolioGrid';

export default function PortfolioPage() {
  return (
    <div className="w-full flex flex-col md:flex-row h-[100dvh]">
      <InfoBar />
      <PortfolioGrid />
    </div>
  );
}
