import { Container } from "@repo/ui/container";
import { Heading2, Heading3, Text } from "@repo/ui/typography";
import { Globe, Shield, Zap } from "lucide-react";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-800/30 border-y border-gray-800">
      <Container className="py-16">
        <Heading2 className="text-center mb-12">Why Choose DrawCanvas</Heading2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <Heading3 className="mb-2">Lightning Fast</Heading3>
            <Text>Experience smooth, responsive drawing with zero lag.</Text>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <Heading3 className="mb-2">Secure by Design</Heading3>
            <Text>
              Your creations are protected with enterprise-grade security.
            </Text>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <Heading3 className="mb-2">Global Infrastructure</Heading3>
            <Text>Fast access from anywhere with our distributed network.</Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
