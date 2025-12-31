# 🎨 Creativ.io - Landing Page

Landing page profesional para una agencia de soluciones creativas y digitales.

## 📋 Descripción

Creativ.io es una aplicación web SPA (Single Page Application) para una agencia creativa. Incluye presentación de servicios, formulario de contacto y un panel de administración completo para gestionar contenido y mensajes.

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de build rápida
- **Tailwind CSS** - Framework de estilos utilitarios

## 📁 Estructura del Proyecto

```
creativ.io-landing-page/
├── components/
│   ├── admin/            # Componentes del panel admin
│   ├── icons/            # Iconos SVG
│   ├── Contact.tsx       # Sección de contacto
│   ├── Footer.tsx        # Pie de página
│   ├── Header.tsx        # Navegación
│   ├── Hero.tsx          # Sección hero
│   ├── ServiceCard.tsx   # Tarjeta de servicio
│   └── Services.tsx      # Sección de servicios
├── data/
│   ├── messages.ts       # Datos mock de mensajes
│   └── services.ts       # Datos de servicios
├── pages/
│   ├── AdminDashboardPage.tsx # Panel de administración
│   ├── AdminLoginPage.tsx     # Login de admin
│   ├── ContactPage.tsx        # Página de contacto
│   ├── HomePage.tsx           # Página principal
│   ├── ServiceDetailPage.tsx  # Detalle de servicio
│   └── ServicesPage.tsx       # Lista de servicios
├── App.tsx               # Componente principal con rutas
├── index.tsx             # Punto de entrada
└── types.ts              # Definiciones de tipos
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd creativ.io-landing-page
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Visitar `http://localhost:5173`

## ✨ Funcionalidades

- **Navegación SPA** - Sistema de rutas basado en hash
- **SEO dinámico** - Títulos de página que cambian según la ruta
- **Panel de administración** - Gestión completa de servicios y mensajes
- **Formulario de contacto** - Con validación de campos
- **Diseño responsive** - Adaptable a todos los dispositivos

## 🔐 Acceso de Administrador

Para acceder al panel de administración (demo):
- **URL**: `#admin/login`
- **Email**: `admin@gmail.com`
- **Contraseña**: `admin123`

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza el build |

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
