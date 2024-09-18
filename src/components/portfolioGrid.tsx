import Footer from '@/components/footer';
import Activities from '@/components/grids/activities';
import Awards from '@/components/grids/awards';
import Certificates from '@/components/grids/certificates';
import Contributions from '@/components/grids/contributions';
import Projects from '@/components/grids/projects';

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
