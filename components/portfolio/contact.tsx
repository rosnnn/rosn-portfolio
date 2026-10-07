'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail, Phone, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './brand-icons'
import { profile } from './data'

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div
          className={`relative border border-white/20 bg-[#09090d] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Effect */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(229,184,105,0.25), transparent 40%)`,
            }}
          />

          <div className="relative z-10 p-6 sm:p-10 lg:p-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
              <div className="flex-1 w-full">
                <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-white/50 mb-4 sm:mb-6">
                  <span className="w-8 h-px bg-[#e5b869]" />
                  Initiate Connection
                </span>

                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-display tracking-tight mb-4 sm:mb-6 leading-[0.95]">
                  Ready to build
                  <br />
                  something exceptional?
                </h2>

                <p className="text-sm sm:text-lg text-white/60 mb-8 sm:mb-10 leading-relaxed max-w-xl font-sans">
                  Open to full-time software engineering roles, high-impact systems, and ambitious engineering collaborations. Direct email response guaranteed within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-black px-5 sm:px-8 h-12 sm:h-14 text-xs sm:text-sm font-semibold rounded-full group transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl text-center"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span className="break-all sm:break-normal">{profile.email}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-5 sm:px-8 text-xs sm:text-sm font-medium rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white transition-all text-center"
                  >
                    <FileText className="w-4 h-4 shrink-0 text-[#e5b869]" />
                    <span>Download CV (PDF)</span>
                  </a>
                </div>

                {/* Direct info pills */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 font-mono text-xs text-white/50">
                  <a
                    href={`tel:${profile.phone}`}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#e5b869]" />
                    <span>{profile.phone}</span>
                  </a>
                  <span>BENGALURU, INDIA (UTC+5:30)</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex lg:flex-col gap-3 sm:gap-4 shrink-0 pt-2 lg:pt-0">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={profile.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-emerald-400 hover:bg-white hover:text-black transition-all"
                  aria-label="HackerRank"
                  title="HackerRank 5-Star Python Coder"
                >
                  <HackerRankIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Corner Borders */}
          <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-white/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-t border-r border-white/10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
