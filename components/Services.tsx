import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '../types';

interface ServicesProps {
  navigateTo: (page: string) => void;
  services: Service[];
  showAllServicesButton?: boolean;
}

const Services: React.FC<ServicesProps> = ({ navigateTo, services, showAllServicesButton = true }) => {
  return (
    <section id="servicios" className="bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lo que Ofrezco</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} navigateTo={navigateTo} />
          ))}
        </div>
        {showAllServicesButton && (
            <div className="text-center mt-16">
            <button
                onClick={() => navigateTo('services')}
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
                Ver Todos los Servicios
            </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Services;