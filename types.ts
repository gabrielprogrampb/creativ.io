// =============================================================================
// types.ts - Definiciones de Tipos TypeScript
// =============================================================================
// Descripción: Define las interfaces y tipos utilizados en toda la aplicación
// Creativ.io para servicios y mensajes de contacto.
// =============================================================================

import React from 'react';

/**
 * Nombres de iconos disponibles para servicios
 * Se mapean a componentes de icono específicos
 */
export type ServiceIconName = 'Diseño' | 'Código' | 'SEO';

/**
 * Interfaz para servicios ofrecidos
 * Representa cada servicio que la agencia puede ofrecer
 */
export interface Service {
  id: string;                    // Identificador único del servicio
  iconName?: ServiceIconName;    // Nombre del icono (opcional)
  imageUrl?: string;             // URL de imagen alternativa (opcional)
  title: string;                 // Título del servicio
  description: string;           // Descripción breve para tarjetas
  details: {                     // Información detallada para página individual
    mainTitle: string;           // Título principal de la página de detalle
    paragraphs: string[];        // Párrafos descriptivos
    features: string[];          // Lista de características incluidas
  };
}

/**
 * Interfaz para mensajes de contacto
 * Representa los mensajes enviados por usuarios a través del formulario
 */
export interface Message {
  id: string;         // Identificador único del mensaje
  name: string;       // Nombre del remitente
  email: string;      // Email del remitente
  subject: string;    // Asunto del mensaje
  message: string;    // Contenido del mensaje
  timestamp: Date;    // Fecha y hora de envío
}
