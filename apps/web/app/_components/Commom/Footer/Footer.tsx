import { Container } from "@repo/ui/container";
import { Heading3, Text } from "@repo/ui/typography";
import { Shapes } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Shapes className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">
                DrawCanvas
              </span>
            </div>
            <Text>
              Create, collaborate, and bring your ideas to life with our
              powerful drawing tools.
            </Text>
          </div>
          <div>
            <Heading3 className="mb-4">Product</Heading3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Heading3 className="mb-4">Resources</Heading3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Heading3 className="mb-4">Company</Heading3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text className="mb-4 md:mb-0">
              © 2024 DrawCanvas. All rights reserved.
            </Text>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
