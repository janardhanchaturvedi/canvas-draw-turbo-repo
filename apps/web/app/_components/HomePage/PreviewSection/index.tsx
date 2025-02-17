import { Card } from "@repo/ui/card";
import { Container } from "@repo/ui/container";
import React from "react";

export default function PreviewSection() {
  return (
    <Container className="py-16">
      <Card className="relative overflow-hidden border border-gray-800">
        <img
          src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200"
          alt="Canvas Preview"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </Card>
    </Container>
  );
}
