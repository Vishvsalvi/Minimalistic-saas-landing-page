"use client"
import {Image, Chip, Button} from "@heroui/react"
import Democard from "@/components/democard"
import Testimonial from "@/components/testimonial"
import PricingSection from "@/components/pricingSection"
import CallToAction from "@/components/callToAction"
import Footer from "@/components/footer"
import { cn } from "@heroui/react"
import {Brain, FileVideo, Copyright, Activity, Users, HandCoins, CreditCard, Heart} from "lucide-react"
import { FEATURES } from "@/constants/constant"
import Hero from "@/sections/Hero"
import Companies from "@/sections/Companies"
import Features from "@/sections/Features"
import Agents from "@/sections/Agents"
import Testimonials from "@/sections/Testimonials"
import Pricing from "@/sections/Pricing"
import CTA from "@/sections/CTA"
import { Icon } from "@iconify/react"
import { BRAND_IMAGES, CHIPSTYLE, AGENTS, TESTIMONIALS } from "@/constants/constant"

export default function Home() {


  return (
  
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden w-full px-8">
       

    {/* Hero Image section */}
    <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
    <section id="home" className="mt-10 z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6 mb-8">
    <Chip className="text-xs bg-zinc-900 text-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:h-1/6">We raised $100M in Series A</Chip>
      <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
        <div className=" bg-[linear-gradient(91deg,_#FFF_32.88%,_rgba(255,255,255,0.4)_99.12%)] bg-clip-text text-transparent">
          AI Agents To Streamline <br /> 
          Your Music Creation.
        </div>
      </div>
      <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] ">
        MusicGen is an AI-powered music assistant that allows you to create music like a pro.
      </p>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Button
          className="md:hidden  h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-sm leading-5 text-background font-medium"
          radius="full"
        >
          Get Started
        </Button>
      </div>
    </section>

<section className="w-full relative flex justify-center">
<div className="relative w-full max-w-5xl h-[32rem] overflow-hidden rounded-lg">
  <div className="absolute inset-0 flex justify-center items-center">
    <Image 
      src="/heroimg.png" 
      alt="Hero Image" 
      className="w-full h-full object-cover object-center transform transition-transform duration-500"
    />
  </div>
</div>
</section>

    {/* Simple linear company logos placement */}
    <section className="w-full mt-[10rem]">
    <h2 className="uppercase text-center text-sm font-medium mb-2 text-default-500">Trusted by top music teams</h2>
    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-2 px-6 max-w-5xl mx-auto">
      {BRAND_IMAGES.map((image) => (
        
          <Image 
            key={image.id}
            src={image.src} 
            alt={image.alt}
            width={150}
            height={150}
            className="grayscale transition-all duration-300 object-contain w-full h-full"
          />
       
      ))}
    </div>
</section>

    {/* Features section */}
    <section id="features" className="w-full mt-[10rem] flex flex-col items-center">
    <div className="flex flex-col items-center text-center space-y-2">
      <Chip className={CHIPSTYLE}>Features</Chip>
      <h2 className="text-5xl font-semibold tracking-tight">Feature rich music generation</h2>
      <p className="text-default-500 text-md">We're a team of musicians and engineers who are passionate about creating music that sounds great.</p>
    </div>

    {/* Features Grid */}
    <div className="max-w-7xl w-full mt-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-zinc-800">
        {FEATURES.map((feature: { id: number; title: string; description: string; icon: JSX.Element }, index: number) => (
          <div 
            key={feature.id}
            className={cn(
              "relative p-10 transition-all duration-200 hover:bg-zinc-900 group",
              {
                "border-b border-zinc-800": index < FEATURES.length - 4 || (index < FEATURES.length && FEATURES.length <= 4),
                "md:border-r": (index + 1) % 4 !== 0,
                "border-b md:border-b-0": index >= FEATURES.length - 4 && index < FEATURES.length - 1 && FEATURES.length > 4
              }
            )}
          >
            <div className="mb-5 transition-transform duration-200 group-hover:translate-x-2">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold tracking-tight mb-2 transition-transform duration-200 group-hover:translate-x-2">{feature.title}</h3>
            <p className="group-hover:translate-x-2 text-sm text-zinc-300 transition-transform duration-200 ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
    
    {/* Agents section */}
    <section id="agents" className="w-full mt-[10rem] flex flex-col items-center">
    <div className="flex flex-col items-center text-center space-y-2">
      <Chip className={CHIPSTYLE}>Agents</Chip>
      <h2 className="text-5xl font-semibold tracking-tight">Meet our AI agents</h2>
      <p className="text-default-500 text-md">Our Agents are trained and inspired by legends in the music industry.</p>
    </div>
    <div className="max-w-5xl w-full px-4 mt-4">
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AGENTS.map((agent) => (
          <Democard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  </section>
    {/* Testimonials section */}
    <section id="testimonials" className="w-full mt-[10rem] flex flex-col items-center">
    <div className="flex flex-col items-center text-center space-y-2">
      <Chip className={CHIPSTYLE}>Testimonials</Chip>
      <h2 className="text-5xl font-semibold tracking-tight">Hear from our users</h2>
      <p className="text-default-500 text-md">Musicians and engineers are using MusicGen to create music that sounds great.</p>
    </div>
    
    {/* Infinite Testimonial Carousel */}
    <div className="w-full max-w-7xl py-12 relative">
      {/* First Row - Left to Right */}
      <div className="relative mb-4 w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="animate-marquee-slow flex space-x-4">
          {/* Duplicate testimonials for continuous effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <div key={`row1-${testimonial.id}-${index}`} className="w-[350px] flex-shrink-0">
              <Testimonial 
                name={testimonial.name} 
                image={testimonial.image} 
                testimonial={testimonial.testimonial} 
                job={testimonial.job} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Second Row - Right to Left (Reverse direction) */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="animate-marquee-slow-reverse flex space-x-4">
          {/* Duplicate and reverse testimonials for continuous effect */}
          {[...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()].map((testimonial, index) => (
            <div key={`row2-${testimonial.id}-${index}`} className="w-[350px] flex-shrink-0">
              <Testimonial 
                name={testimonial.name} 
                image={testimonial.image} 
                testimonial={testimonial.testimonial} 
                job={testimonial.job} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom fade mask */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  </section>

    {/* Pricing section */}
    <Pricing />

    {/* Call to action section */}
    <section className="w-full mt-[10rem] mb-[5rem] flex flex-col items-center">
    <CallToAction />
  </section>

      </main>

    </main>
  );
}