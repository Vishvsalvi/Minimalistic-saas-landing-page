import React from 'react'
import PricingCard from './pricingCard'

const PricingSection = () => {
  const pricingPlans = [
    {
      plan: "Free",
      price: "$0",
      description: "Perfect for side projects and simple applications",
      features: [
        "Up to 1,000 API calls/month",
        "Basic support",
        "Community access",
        "Basic analytics",
        "Limited access to Agents",
        "Limited access to Custom Integrations",
      ]
    },
    {
      plan: "Pro",
      price: "$49",
      description: "Ideal for growing musicians, bands, and artists",
      features: [
        "Access to Agents",
        "Up to 50,000 API calls/month",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations",
      ]
    },
    {
      plan: "Enterprise",
      price: "Custom",
      description: "For large-scale applications and organizations",
      features: [
        "Unlimited API calls",
        "24/7 dedicated support",
        "Custom solutions",
        "SLA guarantees",
        "Advanced security features",
        "Dedicated account manager"
      ]
    }
  ]

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.plan}
            plan={plan.plan}
            price={plan.price}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  )
}

export default PricingSection 