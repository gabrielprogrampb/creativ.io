import React from 'react';

export type ServiceIconName = 'Diseño' | 'Código' | 'SEO';

export interface Service {
  id: string;
  iconName?: ServiceIconName;
  imageUrl?: string;
  title: string;
  description: string;
  details: {
    mainTitle: string;
    paragraphs: string[];
    features: string[];
  };
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
}
