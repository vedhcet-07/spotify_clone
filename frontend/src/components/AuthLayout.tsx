import React from 'react';
import { Music2 } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-black bg-opacity-60 p-8 rounded-xl backdrop-blur-lg">
        <div className="flex flex-col items-center">
          <Music2 className="h-12 w-12 text-green-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;