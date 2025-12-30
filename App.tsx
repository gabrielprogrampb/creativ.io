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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  
  const [services, setServices] = useState<Service[]>(initialServices);
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // --- Routing ---
  useEffect(() => {
    const getPageFromHash = () => {
      // Get the page identifier from the hash, or default to 'home'
      return window.location.hash.substring(1) || 'home';
    };

    // Set the initial page based on the current hash
    setCurrentPage(getPageFromHash());

    // Listen for hash changes (e.g., browser back/forward buttons)
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange, false);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []); // Empty dependency array means this runs once on mount

  // --- SEO: Dynamic Page Title ---
  useEffect(() => {
    let title = 'Creativ.io | Soluciones Creativas';
    
    if (currentPage.startsWith('service/')) {
        const serviceId = currentPage.split('/')[1];
        const service = services.find(s => s.id === serviceId);
        if (service) {
            title = `${service.title} | Creativ.io`;
        } else {
            title = 'Servicio no Encontrado | Creativ.io';
        }
    } else {
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

  const navigateTo = (page: string) => {
    // Update the hash to trigger navigation.
    // The 'hashchange' listener will handle the state update.
    // For the 'home' page, we use an empty hash for a cleaner URL.
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo(0, 0);
  };

  // --- Auth Handlers ---
  const handleLogin = (email: string, password: string) => {
    // NOTE: In a real app, this would be a secure API call.
    // For demo purposes, use hardcoded credentials.
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsAdminLoggedIn(true);
      navigateTo('admin/dashboard');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    navigateTo('home');
  };

  // --- Message Handlers ---
  const addMessage = (formData: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      timestamp: new Date(),
      ...formData,
    };
    setMessages(prev => [newMessage, ...prev]);
  };

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  };
  
  // --- Service Handlers ---
  const addService = (service: Omit<Service, 'id'>) => {
    const newService: Service = {
        id: `service-${Date.now()}`,
        ...service
    };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (updatedService: Service) => {
    setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const renderPage = () => {
    // Admin Routes
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
        // If not logged in and trying to access admin, redirect to login
        navigateTo('admin/login');
        return <AdminLoginPage onLogin={handleLogin} />;
    }

    // Public Routes
    if (currentPage.startsWith('service/')) {
      const serviceId = currentPage.split('/')[1];
      return <ServiceDetailPage serviceId={serviceId} services={services} navigateTo={navigateTo} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} services={services} addMessage={addMessage} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} services={services} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} addMessage={addMessage} />;
      default:
        // Fallback to home page for any unknown route
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