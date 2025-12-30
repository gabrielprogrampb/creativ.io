import React from 'react';
import { DesignIcon, CodeIcon, SeoIcon, IconProps } from '../components/icons/ServiceIcons';
import { ServiceIconName } from '../types';

export const serviceIcons: Record<ServiceIconName, React.FC<IconProps>> = {
  'Diseño': DesignIcon,
  'Código': CodeIcon,
  'SEO': SeoIcon,
};

export const getIconComponent = (iconName?: ServiceIconName): React.FC<IconProps> => {
    if (!iconName) {
        return CodeIcon; // Return a default icon if name is not provided
    }
    return serviceIcons[iconName] || CodeIcon; // Default icon for safety
};
