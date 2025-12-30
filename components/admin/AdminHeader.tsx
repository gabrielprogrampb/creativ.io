
import React from 'react';

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onLogout }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <h1 className="text-2xl font-semibold text-gray-800">Panel de Administración</h1>
      <button
        onClick={onLogout}
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Cerrar Sesión
      </button>
    </header>
  );
};

export default AdminHeader;
