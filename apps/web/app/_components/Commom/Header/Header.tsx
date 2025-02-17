"use client";
import { Button } from "@repo/ui/button";
import { Container } from "@repo/ui/container";
import { Menu, Shapes, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shapes className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold text-white">
              DrawCanvas
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <Button>Start Drawing</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-400" />
            ) : (
              <Menu className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <Button fullWidth>Start Drawing</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
