import { Container } from '@repo/ui/container'
import { Heading2 } from '@repo/ui/typography'
import React from 'react'
import PricingCard from '../../../../../../packages/ui/src/components/PricingCard'

export default function Pricing() {
  return (
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
  )
}
