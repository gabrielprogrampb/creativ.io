import React from 'react';
import { TelegramIcon, LinkedInIcon, TwitterIcon } from './icons/SocialIcons';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <TelegramIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <TwitterIcon />
          </a>
        </div>
        <p className="text-gray-400 mt-6 text-sm">&copy; {new Date().getFullYear()} Creativ.io. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;