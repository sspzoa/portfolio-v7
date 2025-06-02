import Footer from '@/components/Footer';
import ActivitiesSection from '@/components/grid/ActivitiesSection';
import AwardsSection from '@/components/grid/AwardsSection';
import CertificatesSection from '@/components/grid/CertificatesSection';
import ContributionsSection from '@/components/grid/ContributionsSection';
import ProjectsSection from '@/components/grid/ProjectsSection';
import React from 'react';

const Grid = React.memo(function Grid() {
  return (
    <div className="flex flex-col w-full bg-background-standard-secondary rounded-radius-600 md:m-spacing-400 py-spacing-800 px-spacing-400 md:px-spacing-800 md:overflow-auto gap-y-spacing-850">
      <ContributionsSection />
      <AwardsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
});

export default Grid;
