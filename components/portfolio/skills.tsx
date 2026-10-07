'use client'

import { useEffect, useState, useRef } from 'react'
import { skillGroups } from './data'

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeGroup, setActiveGroup] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <span
            className={`inline-flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono text-white/50 mb-6 sm:mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="w-8 sm:w-12 h-px bg-[#fbbf24]" />
            02 / Technical Stack & Toolkit
          </span>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            <div className="lg:col-span-7">
              <h2
                className={`text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.92] sm:leading-[0.9] transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Core stack &
                <br />
                <span className="text-white/40">technologies.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-lg transition-all duration-1000 delay-100 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Every language, framework, database, and dev tool mastered across production engineering roles and competitive programming.
              </p>
            </div>
          </div>
        </div>

        {/* Connecting Lines SVG Interactive Banner */}
        <div
          className={`relative p-6 sm:p-8 lg:p-12 border border-white/10 bg-[#09090d] overflow-hidden mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Animated SVG connecting lines */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(15)].map((_, i) => {
                const x1 = 8 + (i % 5) * 21
                const y1 = 15 + Math.floor(i / 5) * 35
                const x2 = 8 + ((i + 1) % 5) * 21
                const y2 = 15 + Math.floor((i + 1) / 5) * 35
                return (
                  <line
                    key={`line-${i}`}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    className="connecting-line"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                )
              })}
            </svg>

            {/* Glowing nodes */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#e5b869]"
                style={{
                  left: `${8 + (i % 5) * 21}%`,
                  top: `${15 + Math.floor(i / 5) * 35}%`,
                  animation: `pulse 2s ease-in-out ${i * 0.12}s infinite`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-baseline justify-between gap-6">
            <div>
              <div className="flex items-baseline gap-2.5 sm:gap-3 mb-2">
                <span className="text-5xl sm:text-7xl lg:text-9xl font-display leading-none text-white">35+</span>
                <span className="text-base sm:text-xl font-mono text-[#e5b869]">technologies</span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-white/50 max-w-md">
                Production-grade technologies across 6 key engineering domains.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs text-white/60">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                VERIFIED IN PRODUCTION
              </span>
              <span>5-STAR PYTHON CODER</span>
            </div>
          </div>
        </div>

        {/* Stack Domains Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              onMouseEnter={() => setActiveGroup(index)}
              className={`p-6 sm:p-8 border bg-[#09090d] transition-all duration-300 hover:-translate-y-1 ${
                activeGroup === index ? 'border-white/30 bg-[#0e0e14]' : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeGroup === index ? 'bg-[#e5b869]' : 'bg-white/30'
                    }`}
                  />
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    {group.title}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#e5b869]">
                  {group.items.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/80 transition-colors hover:border-[#e5b869] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
