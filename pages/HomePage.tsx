import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Service, Message } from '../types';

interface HomePageProps {
  navigateTo: (page: string) => void;
  services: Service[];
  addMessage: (formData: Omit<Message, 'id' | 'timestamp'>) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, services, addMessage }) => {
  return (
    <>
      <Header navigateTo={navigateTo} />
      <main>
        <Hero navigateTo={navigateTo} />
        <Services navigateTo={navigateTo} services={services.slice(0, 3)} showAllServicesButton={true} />
        <Contact addMessage={addMessage} />
      </main>
      <Footer navigateTo={navigateTo} />
    </>
  );
};

export default HomePage;