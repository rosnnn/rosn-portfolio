'use client'

import { useState } from 'react'
import { Background } from '@/components/portfolio/background'
import { LandingLoader } from '@/components/portfolio/landing-loader'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { MarqueeStrip } from '@/components/portfolio/marquee-strip'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { VirtualExperience } from '@/components/portfolio/virtual-experience'
import { Projects } from '@/components/portfolio/projects'
import { Credentials } from '@/components/portfolio/credentials'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="relative isolate min-h-svh">
      {isLoading && <LandingLoader onComplete={() => setIsLoading(false)} />}
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero isLoaded={!isLoading} />
        <MarqueeStrip />
        <About />
        <Skills />
        <Experience />
        <VirtualExperience />
        <Projects />
        <Credentials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
