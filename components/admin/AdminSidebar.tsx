
import React from 'react';

type AdminView = 'services' | 'messages';

interface AdminSidebarProps {
  activeView: AdminView;
  setActiveView: (view: AdminView) => void;
}

const NavLink: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ label, isActive, onClick, children }) => {
  const baseClasses = 'flex items-center px-4 py-3 text-gray-600 transition-colors duration-200 transform rounded-md';
  const activeClasses = 'bg-gray-200 text-gray-700';
  const hoverClasses = 'hover:bg-gray-200 hover:text-gray-700';
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`${baseClasses} ${isActive ? activeClasses : hoverClasses}`}
    >
      {children}
      <span className="mx-4 font-medium">{label}</span>
    </a>
  );
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <a href="#" className="flex items-center space-x-2.5 px-2">
            <svg className="h-8 w-auto text-blue-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2.926 9.356L12 14.053l9.074-4.697L12 4.647 2.926 9.356zM2 17l10 5 10-5-10-5-10 5z" />
            </svg>
            <span className="font-bold text-2xl text-gray-800">Creativ.io</span>
      </a>
      <div className="flex flex-col justify-between flex-1 mt-10">
        <nav>
          <NavLink label="Servicios" isActive={activeView === 'services'} onClick={() => setActiveView('services')}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </NavLink>
          <NavLink label="Mensajes" isActive={activeView === 'messages'} onClick={() => setActiveView('messages')}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
