"use client"
import Hero from "@/sections/Hero"
import Companies from "@/sections/Companies"
import Features from "@/sections/Features"
import Agents from "@/sections/Agents"
import Testimonials from "@/sections/Testimonials"
import Pricing from "@/sections/Pricing"
import CTA from "@/sections/CTA"

export default function Home() {


  return (
    <>
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden w-full px-8">
       

    {/* Hero Image section */}
    <Hero />
    {/* Simple linear company logos placement */}
    <Companies />

    {/* Features section */}
    <Features />
    
    {/* Agents section */}
    <Agents />
    {/* Testimonials section */}
    <Testimonials />

    {/* Pricing section */}
    <Pricing />

    {/* Call to action section */}
    <CTA />

      </main>

    </>
  );
}