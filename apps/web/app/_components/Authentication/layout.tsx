import React from 'react';
import { Shapes } from 'lucide-react';
import { Container } from '@repo/ui/container';
import { Card } from '@repo/ui/card';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-md w-full">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-6">
            <Shapes className="h-10 w-10 text-purple-500" />
            <span className="ml-2 text-2xl font-bold text-white">DrawCanvas</span>
          </div>
          <h2 className="text-center text-3xl font-bold text-white">{title}</h2>
        </div>
        <Card className="p-8">{children}</Card>
      </Container>
    </div>
  );
}