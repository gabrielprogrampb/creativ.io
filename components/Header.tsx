import React, { useState } from 'react';

interface HeaderProps {
  navigateTo: (page: string) => void;
}

const MenuIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
  
const CloseIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigateTo(page);
    setIsMenuOpen(false);
  };
  
  return (
    <header id="inicio" className="bg-slate-800/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-2.5 cursor-pointer">
            <svg className="h-8 w-auto text-blue-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2.926 9.356L12 14.053l9.074-4.697L12 4.647 2.926 9.356zM2 17l10 5 10-5-10-5-10 5z" />
            </svg>
            <span className="font-bold text-2xl text-white">Creativ.io</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Inicio</a>
          <a href="#servicios" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Servicios</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Contacto</a>
          <a href="#admin/login" onClick={(e) => handleNavClick(e, 'admin/login')} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer bg-blue-600/50 px-3 py-1.5 rounded-md">Login</a>
        </nav>
        
        {/* Mobile Nav Button */}
        <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95" id="mobile-menu">
          <nav className="px-6 pt-2 pb-4 space-y-1 flex flex-col">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition-colors">Inicio</a>
            <a href="#servicios" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition-colors cursor-pointer">Servicios</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition-colors cursor-pointer">Contacto</a>
            <a href="#admin/login" onClick={(e) => handleNavClick(e, 'admin/login')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center transition-colors cursor-pointer">Login</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;