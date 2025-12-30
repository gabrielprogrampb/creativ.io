import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Service } from '../types';
import { getIconComponent } from '../util/iconHelper';

interface ServiceDetailPageProps {
  serviceId: string;
  navigateTo: (page: string) => void;
  services: Service[];
}

const CheckIcon: React.FC = () => (
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const NotFoundPage: React.FC<{ navigateTo: (page: string) => void }> = ({ navigateTo }) => (
    <div className="flex flex-col min-h-screen">
        <Header navigateTo={navigateTo} />
        <main className="flex-grow flex items-center justify-center text-center px-6">
            <div>
                <h1 className="text-6xl font-bold text-blue-600">404</h1>
                <h2 className="text-3xl font-bold text-gray-800 mt-4">Servicio no encontrado</h2>
                <p className="text-gray-600 mt-2">Lo sentimos, el servicio que buscas no existe.</p>
                <button
                    onClick={() => navigateTo('home')}
                    className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    Volver al Inicio
                </button>
            </div>
        </main>
        <Footer navigateTo={navigateTo} />
    </div>
);

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, navigateTo, services }) => {
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <NotFoundPage navigateTo={navigateTo} />;
  }

  const { iconName, imageUrl, details } = service;
  const IconComponent = getIconComponent(iconName);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header navigateTo={navigateTo} />
      <main className="flex-grow py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center mb-8 w-24 h-24 rounded-full bg-blue-100 text-blue-600">
                    {imageUrl ? (
                        <img src={imageUrl} alt={details.mainTitle} className="w-full h-full object-cover rounded-full" />
                    ) : (
                        <IconComponent className="h-12 w-12" />
                    )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{details.mainTitle}</h1>
            </div>

            <div className="mt-10 space-y-5 text-lg text-gray-700 leading-relaxed">
                {details.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                
                <h3 className="text-2xl font-bold text-gray-800 !mt-10 !mb-4 pt-4 border-t border-gray-200">Características Clave</h3>
                <ul className="space-y-3 !mt-4">
                    {details.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                           <div className="flex-shrink-0 mr-3 mt-1"><CheckIcon /></div>
                           <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={() => navigateTo('contact')}
                    className="bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg"
                >
                    ¿Interesado? Contáctanos
                </button>
            </div>
          </div>
        </div>
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default ServiceDetailPage;
