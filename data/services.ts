
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'diseno-web',
    iconName: 'Diseño',
    title: 'Diseño Web',
    description: 'Creamos interfaces atractivas y fáciles de usar que cautivan a tus visitantes y reflejan la identidad de tu marca.',
    details: {
        mainTitle: 'Diseño Web Atractivo y Funcional',
        paragraphs: [
            'Un gran diseño web va más allá de la estética. Se trata de crear una experiencia de usuario intuitiva que guíe a los visitantes y convierta el interés en acción. Nuestro proceso se centra en comprender a tu audiencia para construir un sitio que no solo se vea increíble, sino que también funcione a la perfección en todos los dispositivos.',
            'Desde el wireframing inicial hasta el prototipo interactivo y el diseño final, colaboramos contigo en cada paso. Nos aseguramos de que el resultado final sea visualmente impactante, fácil de navegar y optimizado para el rendimiento y la accesibilidad.'
        ],
        features: ['Diseño Responsivo (Móvil-first)', 'UI/UX Centrado en el Usuario', 'Prototipos Interactivos', 'Guías de Estilo de Marca']
    }
  },
  {
    id: 'desarrollo-a-medida',
    iconName: 'Código',
    title: 'Desarrollo a Medida',
    description: 'Construimos soluciones web robustas y escalables, adaptadas específicamente a las necesidades de tu proyecto.',
    details: {
        mainTitle: 'Desarrollo Web a la Medida de tus Necesidades',
        paragraphs: [
            'Convertimos tus ideas en aplicaciones web funcionales y de alto rendimiento. Utilizamos las últimas tecnologías para construir soluciones robustas, seguras y escalables que crecen con tu negocio.',
            'Ya sea una plataforma compleja, una tienda de comercio electrónico o una API personalizada, nuestro equipo de desarrollo tiene la experiencia para entregar un producto de calidad que cumpla con tus objetivos. Priorizamos el código limpio, las pruebas rigurosas y la entrega a tiempo.'
        ],
        features: ['Desarrollo Full-Stack', 'Integración de API de Terceros', 'Bases de Datos Escalables', 'Mantenimiento y Soporte Continuo']
    }
  },
  {
    id: 'optimizacion-seo',
    iconName: 'SEO',
    title: 'Optimización SEO',
    description: 'Mejoramos la visibilidad de tu sitio en motores de búsqueda para atraer más tráfico orgánico y clientes potenciales.',
    details: {
        mainTitle: 'Posiciona tu Web en los Primeros Lugares',
        paragraphs: [
            'El SEO (Search Engine Optimization) es crucial para que tus clientes potenciales te encuentren en línea. Nuestra estrategia de optimización se enfoca en mejorar tu ranking en los motores de búsqueda como Google, atrayendo tráfico de calidad a tu sitio web.',
            'Realizamos una auditoría completa de tu sitio, investigamos las palabras clave más relevantes para tu industria y optimizamos tanto el contenido como los aspectos técnicos de tu web. Monitoreamos los resultados y ajustamos la estrategia para asegurar un crecimiento sostenible.'
        ],
        features: ['Auditoría SEO Completa', 'Investigación de Palabras Clave', 'SEO On-Page y Técnico', 'Link Building y Creación de Contenido']
    }
  },
  {
    id: 'marketing-digital',
    iconName: 'SEO',
    title: 'Marketing Digital',
    description: 'Diseñamos estrategias de marketing digital para aumentar tu alcance, generar leads y convertir clientes.',
    details: {
        mainTitle: 'Estrategias de Marketing Digital Efectivas',
        paragraphs: [
            'Llegar a tu público objetivo en el vasto mundo digital requiere una estrategia bien definida. Analizamos tu mercado, competencia y audiencia para crear campañas personalizadas que generen resultados medibles.',
            'Desde la gestión de redes sociales hasta campañas de email marketing y publicidad de pago (SEM), cubrimos todos los frentes para asegurar que tu marca tenga la visibilidad y el impacto que merece.'
        ],
        features: ['Gestión de Redes Sociales (SMM)', 'Publicidad de Pago (SEM/PPC)', 'Email Marketing', 'Análisis y Reporte de Métricas']
    }
  },
  {
    id: 'creacion-contenido',
    iconName: 'Diseño',
    title: 'Creación de Contenido',
    description: 'Producimos contenido de alta calidad, desde artículos de blog hasta videos, que conecta con tu audiencia y refuerza tu marca.',
    details: {
        mainTitle: 'Contenido que Atrae, Involucra y Convierte',
        paragraphs: [
            'El contenido es el corazón de tu estrategia digital. Creamos material original y relevante que no solo informa y entretiene a tu audiencia, sino que también establece a tu marca como una autoridad en su sector.',
            'Nuestro equipo de creativos se encarga de todo el proceso, desde la ideación y redacción hasta el diseño gráfico y la producción de video, asegurando un mensaje coherente y de alta calidad en todos tus canales.'
        ],
        features: ['Redacción de Artículos para Blog', 'Creación de Guiones para Video', 'Diseño de Infografías y Gráficos', 'Copywriting para Webs y Anuncios']
    }
  },
  {
    id: 'soluciones-ecommerce',
    iconName: 'Código',
    title: 'Soluciones E-commerce',
    description: 'Desarrollamos tiendas online robustas y optimizadas para la venta, proporcionando una experiencia de compra excepcional.',
    details: {
        mainTitle: 'Tu Tienda Online, Potente y Fácil de Gestionar',
        paragraphs: [
            'Lleva tu negocio al siguiente nivel con una plataforma de comercio electrónico profesional. Creamos tiendas online a medida, centradas en la experiencia de usuario y optimizadas para la conversión.',
            'Integramos pasarelas de pago seguras, gestionamos catálogos de productos y configuramos toda la logística necesaria para que puedas empezar a vender online sin complicaciones. Ofrecemos soluciones en plataformas como Shopify, WooCommerce y desarrollos a medida.'
        ],
        features: ['Desarrollo en Shopify y WooCommerce', 'Integración de Pasarelas de Pago', 'Optimización de la Tasa de Conversión (CRO)', 'Fotografía y Gestión de Producto']
    }
  }
];