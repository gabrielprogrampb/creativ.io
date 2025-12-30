import React, { useState, useEffect } from 'react';
import { Service, ServiceIconName } from '../../types';
import { serviceIcons } from '../../util/iconHelper';

interface ServiceFormProps {
  service: Service | null;
  onSave: (data: any) => void;
  onClose: () => void;
}

const CloseIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ServiceForm: React.FC<ServiceFormProps> = ({ service, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    iconName: 'Código' as ServiceIconName,
    imageUrl: '',
    title: '',
    description: '',
    mainTitle: '',
    paragraphs: '',
    features: '',
  });
  const [visualType, setVisualType] = useState<'icon' | 'image' | 'upload'>('icon');

  useEffect(() => {
    if (service) {
      setFormData({
        iconName: service.iconName || 'Código',
        imageUrl: service.imageUrl || '',
        title: service.title,
        description: service.description,
        mainTitle: service.details.mainTitle,
        paragraphs: service.details.paragraphs.join('\n'),
        features: service.details.features.join('\n'),
      });
      if (service.imageUrl) {
        if (service.imageUrl.startsWith('data:image')) {
            setVisualType('upload');
        } else {
            setVisualType('image');
        }
      } else {
        setVisualType('icon');
      }
    } else {
      // Reset for new service form
      setFormData({
        iconName: 'Código' as ServiceIconName,
        imageUrl: '',
        title: '',
        description: '',
        mainTitle: '',
        paragraphs: '',
        features: '',
      });
      setVisualType('icon');
    }
  }, [service]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
        };
        reader.readAsDataURL(file);
    } else {
        setFormData(prev => ({...prev, imageUrl: service?.imageUrl || ''}));
        e.target.value = ''; 
    }
  };

  const handleVisualTypeChange = (newType: 'icon' | 'image' | 'upload') => {
      setVisualType(newType);
      if (newType === 'icon') {
          setFormData(prev => ({ ...prev, imageUrl: '' }));
      } else {
          setFormData(prev => ({ ...prev, iconName: 'Código' }));
      }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceData = {
      title: formData.title,
      description: formData.description,
      details: {
        mainTitle: formData.mainTitle,
        paragraphs: formData.paragraphs.split('\n').filter(p => p.trim() !== ''),
        features: formData.features.split('\n').filter(f => f.trim() !== ''),
      },
      iconName: visualType === 'icon' ? formData.iconName : undefined,
      imageUrl: (visualType === 'image' || visualType === 'upload') ? formData.imageUrl : undefined,
    };
    
    if (service) {
        onSave({ ...serviceData, id: service.id });
    } else {
        onSave(serviceData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">{service ? 'Editar Servicio' : 'Crear Servicio'}</h3>
            <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none rounded-full p-1"
                aria-label="Cerrar modal"
            >
                <CloseIcon />
            </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
              <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 text-gray-900 focus:bg-white transition-colors" />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Tipo de Visual</label>
                <div className="mt-2 flex items-center gap-x-4">
                    <label className="flex items-center cursor-pointer">
                        <input type="radio" name="visualType" value="icon" checked={visualType === 'icon'} onChange={() => handleVisualTypeChange('icon')} className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <span className="ml-2 text-gray-700">Icono</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                        <input type="radio" name="visualType" value="image" checked={visualType === 'image'} onChange={() => handleVisualTypeChange('image')} className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <span className="ml-2 text-gray-700">URL</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                        <input type="radio" name="visualType" value="upload" checked={visualType === 'upload'} onChange={() => handleVisualTypeChange('upload')} className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <span className="ml-2 text-gray-700">Subir</span>
                    </label>
                </div>
            </div>
          </div>
          
          {visualType === 'icon' && (
             <div>
                <label htmlFor="iconName" className="block text-sm font-medium text-gray-700">Icono</label>
                <select name="iconName" id="iconName" value={formData.iconName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 text-gray-900 focus:bg-white transition-colors">
                  {Object.keys(serviceIcons).map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>
          )}
          
          {visualType === 'image' && (
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
              <input type="url" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://ejemplo.com/imagen.png" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 text-gray-900 focus:bg-white transition-colors" />
            </div>
          )}

          {visualType === 'upload' && (
            <div>
                <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Subir Imagen</label>
                <input type="file" name="imageUpload" id="imageUpload" accept="image/png, image/jpeg, image/gif, image/webp" onChange={handleFileChange} required={!formData.imageUrl} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"/>
                {formData.imageUrl && visualType === 'upload' && (
                   <div className="mt-4">
                     <span className="block text-sm font-medium text-gray-700">Previsualización:</span>
                     <img src={formData.imageUrl} alt="Previsualización" className="mt-2 h-24 w-24 object-cover rounded-lg shadow-sm" />
                   </div>
                )}
            </div>
          )}


          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción Corta (para la tarjeta)</label>
            <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows={3} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 text-gray-900 focus:bg-white transition-colors"></textarea>
          </div>
          <hr className="my-6"/>
          <h4 className="text-lg font-semibold text-gray-800">Detalles del Servicio</h4>
           <div>
              <label htmlFor="mainTitle" className="block text-sm font-medium text-gray-700">Título Principal (en la página de detalle)</label>
              <input type="text" name="mainTitle" id="mainTitle" value={formData.mainTitle} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 text-gray-900 focus:bg-white transition-colors" />
            </div>
          <div>
            <label htmlFor="paragraphs" className="block text-sm font-medium text-gray-700">Párrafos (uno por línea)</label>
            <textarea name="paragraphs" id="paragraphs" value={formData.paragraphs} onChange={handleChange} rows={5} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 text-gray-900 focus:bg-white transition-colors"></textarea>
          </div>
          <div>
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">Características Clave (una por línea)</label>
            <textarea name="features" id="features" value={formData.features} onChange={handleChange} rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 text-gray-900 focus:bg-white transition-colors"></textarea>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancelar</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;