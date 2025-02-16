import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-gray-800/50 rounded-xl border border-gray-700
        ${hover ? 'hover:border-purple-500 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}