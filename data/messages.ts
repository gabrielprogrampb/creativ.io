import { Message } from '../types';

// In-memory store for contact messages.
// In a real app, this would be a database.
export const messages: Message[] = [
  {
    id: 'msg-1',
    name: 'Ana García',
    email: 'ana.garcia@example.com',
    subject: 'Interesada en Diseño Web',
    message: 'Hola,\n\nMe gustaría saber más sobre vuestros servicios de diseño web. ¿Podríamos concertar una llamada para hablar de mi proyecto?\n\nGracias,\nAna',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: 'msg-2',
    name: 'Carlos Rodríguez',
    email: 'carlos.r@example.com',
    subject: 'Cotización para Desarrollo a Medida',
    message: 'Buenos días,\n\nNecesito una cotización para desarrollar una plataforma interna para mi empresa. Los requerimientos son algo complejos. ¿Cuál es el proceso a seguir?\n\nSaludos,\nCarlos',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
  {
    id: 'msg-3',
    name: 'Laura Martinez',
    email: 'laura.m@example.com',
    subject: 'Pregunta sobre SEO',
    message: 'Hola, ¿vuestros servicios de SEO garantizan la primera posición en Google?\nGracias.',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  }
];
