import { Container } from "@repo/ui/container";
import { Text } from "@repo/ui/typography";
import React from "react";

export default function StatsSection() {
  return (
    <div className="border-y border-gray-800 bg-gray-800/30">
      <Container className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
            <Text>Active Users</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10M+</div>
            <Text>Drawings Created</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
            <Text>Satisfaction Rate</Text>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
            <Text>Countries</Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
