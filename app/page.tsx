'use client'

import { useState } from 'react'
import { SmoothScroll } from '@/components/portfolio/smooth-scroll'
import { LandingLoader } from '@/components/portfolio/landing-loader'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { MarqueeStrip } from '@/components/portfolio/marquee-strip'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { MetricsSection } from '@/components/portfolio/metrics-section'
import { VirtualExperience } from '@/components/portfolio/virtual-experience'
import { Projects } from '@/components/portfolio/projects'
import { Credentials } from '@/components/portfolio/credentials'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="relative min-h-screen bg-black text-[#f4f4f5] overflow-x-clip [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden selection:bg-white selection:text-black">
      <SmoothScroll />
      {isLoading && <LandingLoader onComplete={() => setIsLoading(false)} />}

      <Navbar />
      <Hero isLoaded={!isLoading} />
      <MarqueeStrip />
      <About />
      <Skills />
      <Experience />
      <MetricsSection />
      <VirtualExperience />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  )
}
