"use client";
import React, { useState } from "react";
import {
  Pencil,
  Share2,
  Download,
  Shapes,
  Users,
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Card } from "@repo/ui/card";
import { Container } from "@repo/ui/container";
import { Heading1, Heading2, Heading3, Text } from "@repo/ui/typography";
import FeatureCard from "../../../packages/ui/src/components/FeatureCard";
import TestimonialCard from "../../../packages/ui/src/components/TestimonialCard";
import PricingCard from "../../../packages/ui/src/components/PricingCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
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

      {/* Stats Section */}
      <div className="border-y border-gray-800 bg-gray-800/30">
        <Container className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <Text>Active Users</Text>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                10M+
              </div>
              <Text>Drawings Created</Text>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <Text>Satisfaction Rate</Text>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                150+
              </div>
              <Text>Countries</Text>
            </div>
          </div>
        </Container>
      </div>

      {/* Preview Section */}
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

      {/* Features Grid */}
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

      {/* Testimonials */}
      <div
        id="testimonials"
        className="bg-gray-800/30 border-y border-gray-800"
      >
        <Container className="py-16">
          <Heading2 className="text-center mb-12">
            Loved by Creators Worldwide
          </Heading2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="UX Designer"
              content="DrawCanvas has revolutionized how I create wireframes. The intuitive interface and collaboration features are game-changing."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
            />
            <TestimonialCard
              name="Michael Rodriguez"
              role="Product Manager"
              content="The best whiteboarding tool I've ever used. Perfect for remote team brainstorming and design discussions."
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
            />
            <TestimonialCard
              name="Emily Thompson"
              role="Creative Director"
              content="From quick sketches to detailed designs, DrawCanvas handles it all beautifully. A must-have tool for any creative team."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
            />
          </div>
        </Container>
      </div>

      {/* Pricing */}
      <Container className="py-16">
        <Heading2 className="text-center mb-12">
          Simple, Transparent Pricing
        </Heading2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Free"
            price="Free"
            features={[
              "Basic drawing tools",
              "5 projects",
              "2 team members",
              "Basic shapes library",
              "PNG export",
            ]}
          />
          <PricingCard
            title="Pro"
            price="$12"
            features={[
              "Advanced drawing tools",
              "Unlimited projects",
              "10 team members",
              "Full shapes library",
              "All export formats",
              "Real-time collaboration",
            ]}
            recommended
          />
          <PricingCard
            title="Enterprise"
            price="$49"
            features={[
              "Everything in Pro",
              "Unlimited team members",
              "Advanced security",
              "Custom integrations",
              "Priority support",
              "API access",
            ]}
          />
        </div>
      </Container>

      {/* Why Choose Us */}
      <div className="bg-gray-800/30 border-y border-gray-800">
        <Container className="py-16">
          <Heading2 className="text-center mb-12">
            Why Choose DrawCanvas
          </Heading2>
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
              <Text>
                Fast access from anywhere with our distributed network.
              </Text>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
