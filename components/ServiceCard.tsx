import React from 'react';
import { Service } from '../types';
import { getIconComponent } from '../util/iconHelper';

interface ServiceCardProps {
  service: Service;
  navigateTo: (page: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, navigateTo }) => {
  const { id, iconName, imageUrl, title, description } = service;
  const IconComponent = getIconComponent(iconName);

  return (
    <div
      onClick={() => navigateTo(`service/${id}`)}
      onKeyPress={(e) => e.key === 'Enter' && navigateTo(`service/${id}`)}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
      role="link"
      tabIndex={0}
    >
      <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-blue-100 text-blue-600 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-full" />
        ) : (
          <IconComponent className="h-10 w-10" />
        )}
      </div>
      <h3 className="text-xl font-bold text-center text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
