import React, { useState } from 'react';
import { Message } from '../types';

interface ContactPageProps {
  navigateTo: (page: string) => void;
  addMessage: (formData: Omit<Message, 'id' | 'timestamp'>) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigateTo, addMessage }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage(formData);
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    navigateTo('home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-gray-300 p-6">
       <div className="w-full max-w-xl text-center">
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Hablemos de tu Proyecto</h1>
            <p className="text-gray-400 mt-4 text-lg">¿Listo para empezar? Deja tus datos y te contactaré.</p>
        </div>
        <div className="bg-slate-800 p-8 sm:p-10 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    className="w-full px-4 py-3 bg-slate-900 text-gray-200 rounded-lg border-2 border-slate-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
                </div>
                <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-slate-900 text-gray-200 rounded-lg border-2 border-slate-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Asunto</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto"
                    required
                    className="w-full px-4 py-3 bg-slate-900 text-gray-200 rounded-lg border-2 border-slate-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu mensaje..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 text-gray-200 rounded-lg border-2 border-slate-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="text-center pt-2">
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                    Enviar Mensaje
                </button>
                </div>
            </form>
        </div>
        <div className="mt-8">
            <button 
                onClick={() => navigateTo('home')} 
                className="text-gray-400 hover:text-white hover:underline transition-colors"
            >
                &larr; Volver a la página principal
            </button>
        </div>
       </div>
    </div>
  );
};

export default ContactPage;