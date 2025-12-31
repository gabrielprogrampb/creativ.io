// =============================================================================
// App.tsx - Componente Principal de Creativ.io
// =============================================================================
// Descripción: Aplicación SPA para una agencia de soluciones creativas.
// Maneja el enrutamiento basado en hash, autenticación de admin, y gestión
// de servicios y mensajes.
// 
// Rutas:
// - #home (o vacío) : Página de inicio
// - #services       : Lista de servicios
// - #service/{id}   : Detalle de un servicio
// - #contact        : Formulario de contacto
// - #admin/login    : Login de administrador
// - #admin/dashboard: Panel de administración
// =============================================================================

import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { services as initialServices } from './data/services';
import { messages as initialMessages } from './data/messages';
import { Service, Message } from './types';

/**
 * Componente principal de la aplicación
 * Gestiona el estado global y el enrutamiento
 */
const App: React.FC = () => {
  // Estado de navegación
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Estado de datos
  const [services, setServices] = useState<Service[]>(initialServices);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // ==========================================================================
  // SISTEMA DE ENRUTAMIENTO
  // ==========================================================================

  useEffect(() => {
    /**
     * Extrae el identificador de página del hash de la URL
     * @returns El nombre de la página actual
     */
    const getPageFromHash = () => {
      return window.location.hash.substring(1) || 'home';
    };

    // Establecer página inicial basada en el hash actual
    setCurrentPage(getPageFromHash());

    // Escuchar cambios en el hash (botones atrás/adelante del navegador)
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange, false);

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  // ==========================================================================
  // SEO: TÍTULO DINÁMICO DE PÁGINA
  // ==========================================================================

  useEffect(() => {
    let title = 'Creativ.io | Soluciones Creativas';

    // Título para páginas de detalle de servicio
    if (currentPage.startsWith('service/')) {
      const serviceId = currentPage.split('/')[1];
      const service = services.find(s => s.id === serviceId);
      if (service) {
        title = `${service.title} | Creativ.io`;
      } else {
        title = 'Servicio no Encontrado | Creativ.io';
      }
    } else {
      // Títulos para otras páginas
      switch (currentPage) {
        case 'home':
          title = 'Creativ.io | Soluciones Creativas para tu Negocio';
          break;
        case 'services':
          title = 'Nuestros Servicios | Creativ.io';
          break;
        case 'contact':
          title = 'Contacto | Creativ.io';
          break;
        case 'admin/login':
          title = 'Admin Login | Creativ.io';
          break;
        case 'admin/dashboard':
          title = 'Admin Dashboard | Creativ.io';
          break;
      }
    }
    document.title = title;
  }, [currentPage, services]);

  /**
   * Navega a una página específica
   * @param page - Identificador de la página destino
   */
  const navigateTo = (page: string) => {
    // Actualizar el hash para disparar la navegación
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo(0, 0);
  };

  // ==========================================================================
  // MANEJADORES DE AUTENTICACIÓN
  // ==========================================================================

  /**
   * Intenta iniciar sesión con las credenciales proporcionadas
   * NOTA: En producción, esto debería ser una llamada segura a API
   */
  const handleLogin = (email: string, password: string) => {
    // Credenciales de demo (cambiar en producción)
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsAdminLoggedIn(true);
      navigateTo('admin/dashboard');
      return true;
    }
    return false;
  };

  /**
   * Cierra la sesión del administrador
   */
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    navigateTo('home');
  };

  // ==========================================================================
  // MANEJADORES DE MENSAJES
  // ==========================================================================

  /**
   * Agrega un nuevo mensaje de contacto
   */
  const addMessage = (formData: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      timestamp: new Date(),
      ...formData,
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  /**
   * Elimina un mensaje por su ID
   */
  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  };

  // ==========================================================================
  // MANEJADORES DE SERVICIOS
  // ==========================================================================

  /**
   * Agrega un nuevo servicio
   */
  const addService = (service: Omit<Service, 'id'>) => {
    const newService: Service = {
      id: `service-${Date.now()}`,
      ...service
    };
    setServices(prev => [...prev, newService]);
  };

  /**
   * Actualiza un servicio existente
   */
  const updateService = (updatedService: Service) => {
    setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
  };

  /**
   * Elimina un servicio por su ID
   */
  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  // ==========================================================================
  // RENDERIZADO DE PÁGINAS
  // ==========================================================================

  /**
   * Renderiza la página correspondiente según la ruta actual
   */
  const renderPage = () => {
    // Rutas de administración
    if (currentPage.startsWith('admin/')) {
      if (currentPage === 'admin/login') {
        return <AdminLoginPage onLogin={handleLogin} />;
      }
      if (isAdminLoggedIn) {
        return (
          <AdminDashboardPage
            services={services}
            messages={messages}
            onLogout={handleLogout}
            onAddService={addService}
            onUpdateService={updateService}
            onDeleteService={deleteService}
            onDeleteMessage={deleteMessage}
          />
        );
      }
      // Si no está logueado, redirigir al login
      navigateTo('admin/login');
      return <AdminLoginPage onLogin={handleLogin} />;
    }

    // Rutas públicas - Detalle de servicio
    if (currentPage.startsWith('service/')) {
      const serviceId = currentPage.split('/')[1];
      return <ServiceDetailPage serviceId={serviceId} services={services} navigateTo={navigateTo} />;
    }

    // Rutas públicas - Páginas principales
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} services={services} addMessage={addMessage} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} services={services} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} addMessage={addMessage} />;
      default:
        // Fallback a página de inicio para rutas desconocidas
        return <HomePage navigateTo={navigateTo} services={services} addMessage={addMessage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {renderPage()}
    </div>
  );
};

export default App;