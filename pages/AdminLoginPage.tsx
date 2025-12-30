import React, { useState } from 'react';

interface AdminLoginPageProps {
  onLogin: (email: string, password: string) => boolean;
}

const EyeIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const EyeOffIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
    </svg>
);


const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = onLogin(email, password);
    if (!success) {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
            <p className="text-gray-500 mt-2">Acceso al panel de control</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-100 placeholder-gray-400 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors"
                placeholder="admin@gmail.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password-input" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="mt-1 relative">
              <input
                id="password-input"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 bg-gray-100 placeholder-gray-400 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors"
                placeholder="Contraseña"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>
          
          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
            <p className="font-semibold">Datos de prueba:</p>
            <p>Email: <span className="font-mono">admin@gmail.com</span></p>
            <p>Contraseña: <span className="font-mono">admin123</span></p>
        </div>

      </div>
    </div>
  );
};

export default AdminLoginPage;