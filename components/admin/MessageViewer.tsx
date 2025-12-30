
import React from 'react';
import { Message } from '../../types';

interface MessageViewerProps {
  messages: Message[];
  onDelete: (id: string) => void;
}

const MessageViewer: React.FC<MessageViewerProps> = ({ messages, onDelete }) => {

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este mensaje? Esta acción no se puede deshacer.')) {
      onDelete(id);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Bandeja de Entrada</h2>
        <span className="text-gray-600">{messages.length} mensaje(s)</span>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No hay mensajes nuevos.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-lg text-gray-800">{message.subject}</div>
                  <div className="text-sm text-gray-600">
                    De: <a href={`mailto:${message.email}`} className="text-blue-600 hover:underline">{message.name}</a>
                  </div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-gray-500">
                        {new Date(message.timestamp).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })}
                    </div>
                    <button 
                        onClick={() => handleDelete(message.id)} 
                        className="text-red-500 hover:text-red-700 text-xs font-semibold mt-2"
                    >
                        ELIMINAR
                    </button>
                </div>
              </div>
              <p className="mt-4 text-gray-700 whitespace-pre-wrap">{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageViewer;
