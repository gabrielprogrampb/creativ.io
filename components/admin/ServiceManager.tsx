import React, { useState } from 'react';
import { Service } from '../../types';
import ServiceForm from './ServiceForm';
import { getIconComponent } from '../../util/iconHelper';

interface ServiceManagerProps {
  services: Service[];
  onAdd: (service: Omit<Service, 'id'>) => void;
  onUpdate: (service: Service) => void;
  onDelete: (id: string) => void;
}

const ServiceManager: React.FC<ServiceManagerProps> = ({ services, onAdd, onUpdate, onDelete }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const handleOpenFormForCreate = () => {
    setEditingService(null);
    setIsFormOpen(true);
  };

  const handleOpenFormForEdit = (service: Service) => {
    setEditingService(service);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingService(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
      onDelete(id);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Gestionar Servicios</h2>
        <button
          onClick={handleOpenFormForCreate}
          className="px-5 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Añadir Servicio
        </button>
      </div>

      {isFormOpen && (
        <ServiceForm
          service={editingService}
          onSave={editingService ? onUpdate : onAdd}
          onClose={handleCloseForm}
        />
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visual</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Acciones</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => {
                const IconComponent = getIconComponent(service.iconName);
                return (
                  <tr key={service.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {service.imageUrl ? (
                            <img src={service.imageUrl} alt={service.title} className="w-12 h-12 object-cover rounded-md" />
                        ) : (
                            <div className="text-blue-500"><IconComponent className="h-8 w-8" /></div>
                        )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.title}</td>
                    <td className="px-6 py-4 max-w-sm">
                      <p className="text-sm text-gray-600 truncate">{service.description}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      <button onClick={() => handleOpenFormForEdit(service)} className="text-indigo-600 hover:text-indigo-900">Editar</button>
                      <button onClick={() => handleDelete(service.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceManager;
