import { Container } from '@repo/ui/container'
import { Heading2 } from '@repo/ui/typography'
import React from 'react'
import TestimonialCard from '../../../../../../packages/ui/src/components/TestimonialCard'

export default function Testimonials() {
  return (
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
  )
}
