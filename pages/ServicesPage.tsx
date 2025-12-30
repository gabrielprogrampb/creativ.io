import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { Service } from '../types';

interface ServicesPageProps {
  navigateTo: (page: string) => void;
  services: Service[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo, services }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navigateTo={navigateTo} />
      <main className="flex-grow">
        <div className="bg-white pt-24 pb-12 sm:pt-32 sm:pb-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Nuestros Servicios</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">Ofrecemos soluciones integrales y a medida para potenciar tu presencia y éxito en el mundo digital.</p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded"></div>
            </div>
        </div>
        <Services navigateTo={navigateTo} services={services} showAllServicesButton={false} />
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default ServicesPage;