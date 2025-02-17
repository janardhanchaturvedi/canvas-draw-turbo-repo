import { Button } from "@repo/ui/button";
import { Container } from "@repo/ui/container";
import { Heading1, Text } from "@repo/ui/typography";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      <Container className="pt-20 pb-16">
        <div className="text-center">
          <Heading1 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Draw, Collaborate, Create
          </Heading1>
          <Text className="text-xl mb-8 max-w-2xl mx-auto">
            The perfect blend of whiteboarding and design. Create beautiful
            diagrams, wireframes, and illustrations with our powerful canvas
            tools.
          </Text>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Start Drawing</Button>
            <Button variant="secondary" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
