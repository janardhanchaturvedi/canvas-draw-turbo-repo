import { Container } from "@repo/ui/container";
import { Heading2 } from "@repo/ui/typography";
import React from "react";
import FeatureCard from "../../../../../../packages/ui/src/components/FeatureCard";
import {
  Download,
  Pencil,
  Shapes,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

export default function FeaturesGrid() {
  return (
    <Container className="py-16">
      <Heading2 className="text-center mb-12">
        Powerful Features for Creative Minds
      </Heading2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={Pencil}
          title="Intuitive Drawing"
          description="Smooth, responsive drawing tools that feel natural and precise."
        />
        <FeatureCard
          icon={Share2}
          title="Real-time Collaboration"
          description="Work together with your team in real-time, anywhere in the world."
        />
        <FeatureCard
          icon={Download}
          title="Easy Export"
          description="Export your creations in multiple formats for any use case."
        />
        <FeatureCard
          icon={Shapes}
          title="Smart Shapes"
          description="Perfect geometric shapes with intelligent snapping and alignment."
        />
        <FeatureCard
          icon={Users}
          title="Team Workspace"
          description="Organize and manage your team's creations in one place."
        />
        <FeatureCard
          icon={Sparkles}
          title="AI Enhancement"
          description="Let AI help perfect your drawings and suggest improvements."
        />
      </div>
    </Container>
  );
}
