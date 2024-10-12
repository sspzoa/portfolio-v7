import Footer from '@/components/portfolio/footer';
import Activities from '@/components/portfolio/grids/activities';
import Awards from '@/components/portfolio/grids/awards';
import Certificates from '@/components/portfolio/grids/certificates';
import Contributions from '@/components/portfolio/grids/contributions';
import Projects from '@/components/portfolio/grids/projects';

export default function PortfolioGrid() {
  return (
    <div className="flex flex-col w-full bg-background-standard-secondary rounded-radius-600 md:m-spacing-400 py-spacing-800 px-spacing-400 md:px-spacing-800 md:overflow-auto gap-y-spacing-850">
      <Contributions />
      <Awards />
      <Projects />
      <Certificates />
      <Activities />
      <Footer />
    </div>
  );
}
