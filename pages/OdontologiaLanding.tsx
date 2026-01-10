import React from 'react';
import { OdontologiaHero } from '../components/odontologia/OdontologiaHero';
import { OdontologiaProblem } from '../components/odontologia/OdontologiaProblem';
import { OdontologiaSolution } from '../components/odontologia/OdontologiaSolution';
import { OdontologiaProcess } from '../components/odontologia/OdontologiaProcess';
import { OdontologiaBenefits } from '../components/odontologia/OdontologiaBenefits';
import { OdontologiaCTA } from '../components/odontologia/OdontologiaCTA';

export const OdontologiaLanding: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 min-h-screen transition-colors duration-300">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      <main>
        <OdontologiaHero />
        <OdontologiaProblem />
        <OdontologiaSolution />
        <OdontologiaProcess />
        <OdontologiaBenefits />
        <OdontologiaCTA />
      </main>
    </div>
  );
};
