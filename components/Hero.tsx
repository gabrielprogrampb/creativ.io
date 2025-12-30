
import React from 'react';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Soluciones Creativas para tu Negocio
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Transformamos tus ideas en experiencias digitales impactantes y funcionales.
        </p>
        <div className="mt-10">
          <button
            onClick={() => navigateTo('contact')}
            className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Contáctame Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
