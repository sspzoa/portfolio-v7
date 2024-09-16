import Activities from '@/components/activities';
import Awards from '@/components/awards';
import Footer from '@/components/footer';
import Projects from '@/components/projects';

export default function PortfolioGrid() {
  return (
    <div className="flex flex-col w-full bg-background-standard-secondary rounded-radius-600 md:m-spacing-400 py-spacing-800 px-spacing-400 md:px-spacing-800 md:overflow-auto gap-y-spacing-850">
      <Awards />
      <Projects />
      <Activities />
      <Footer />
    </div>
  );
}
