
import React, { useState } from 'react';
import { Service, Message } from '../types';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import ServiceManager from '../components/admin/ServiceManager';
import MessageViewer from '../components/admin/MessageViewer';

type AdminView = 'services' | 'messages';

interface AdminDashboardPageProps {
  services: Service[];
  messages: Message[];
  onLogout: () => void;
  onAddService: (service: Omit<Service, 'id'>) => void;
  onUpdateService: (service: Service) => void;
  onDeleteService: (id: string) => void;
  onDeleteMessage: (id: string) => void;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = (props) => {
  const [activeView, setActiveView] = useState<AdminView>('services');

  const renderContent = () => {
    switch (activeView) {
      case 'services':
        return <ServiceManager 
                    services={props.services}
                    onAdd={props.onAddService}
                    onUpdate={props.onUpdateService}
                    onDelete={props.onDeleteService}
                />;
      case 'messages':
        return <MessageViewer 
                    messages={props.messages}
                    onDelete={props.onDeleteMessage}
                />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader onLogout={props.onLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 md:p-8">
            {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
