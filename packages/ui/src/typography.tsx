import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className = '' }: TextProps) {
  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${className}`}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className = '' }: TextProps) {
  return (
    <h2 className={`text-2xl md:text-3xl font-bold ${className}`}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className = '' }: TextProps) {
  return (
    <h3 className={`text-xl font-semibold ${className}`}>
      {children}
    </h3>
  );
}

export function Text({ children, className = '' }: TextProps) {
  return (
    <p className={`text-gray-300 ${className}`}>
      {children}
    </p>
  );
}