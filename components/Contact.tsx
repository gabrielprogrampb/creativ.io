import React, { useState } from 'react';
import { Message } from '../types';

interface ContactProps {
  addMessage: (formData: Omit<Message, 'id' | 'timestamp'>) => void;
}

const Contact: React.FC<ContactProps> = ({ addMessage }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage(formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => {
        setIsSubmitted(false);
    }, 5000); // Reset form view after 5 seconds
  };

  return (
    <section id="contact-section" className="bg-slate-900 py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">¿Hablamos?</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">¿Tienes una idea o un proyecto en mente? Rellena el formulario y me pondré en contacto contigo.</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded"></div>
        </div>
        
        <div className="max-w-xl mx-auto bg-slate-800 p-8 sm:p-10 rounded-xl shadow-2xl">
          {isSubmitted ? (
            <div className="text-center text-white py-8">
              <h3 className="text-2xl font-bold text-green-400">¡Mensaje enviado!</h3>
              <p className="mt-3 text-lg">Gracias por contactar. Te responderé lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="home-contact-name" className="sr-only">Nombre</label>
                <input
                    type="text"
                    name="name"
                    id="home-contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    aria-label="Nombre"
                    className="w-full px-4 py-3 bg-slate-900 text-gray-200 rounded-lg border-2 border-slate-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
                </div>
                <div>
                <label htmlFor="home-contact-email" className="sr-only">Email</label>
                <input
                    type="email"
                    name="email"
                    id="home-contact-email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    aria-label="Email"
                    className="w-full px-4 py-3 bg-slate-900 text-gray-200 rounded-lg border-2 border-slate-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
                </div>
                <div>
                  <label htmlFor="home-contact-subject" className="sr-only">Asunto</label>
                  <input
                    type="text"
                    name="subject"
                    id="home-contact-subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto"
                    required
                    aria-label="Asunto"
                    className="w-full px-4 py-3 bg-slate-900 text-gray-200 rounded-lg border-2 border-slate-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="home-contact-message" className="sr-only">Mensaje</label>
                  <textarea
                    name="message"
                    id="home-contact-message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu mensaje..."
                    required
                    rows={4}
                    aria-label="Tu mensaje"
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;