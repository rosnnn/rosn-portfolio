'use client'

import { useEffect, useState, useRef } from 'react'
import { ArrowRight, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './brand-icons'
import { profile } from './data'

const words = ['execute at scale', 'ship reliably', 'solve complex logic', 'forecast with precision']

function BlurWord({ word, trigger }: { word: string; trigger: number }) {
  const letters = word.split('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(false)
    const t = setTimeout(() => {
      setActive(true)
    }, 30)
    return () => clearTimeout(t)
  }, [trigger])

  return (
    <>
      {letters.map((char, i) => (
        <span
          key={`${trigger}-${i}`}
          className="inline-block transition-all duration-400 ease-out text-[#e5b869]"
          style={{
            opacity: active ? 1 : 0,
            filter: active ? 'blur(0px)' : 'blur(10px)',
            transform: active ? 'translateY(0)' : 'translateY(3px)',
            transitionDelay: `${i * 25}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )
}

interface HeroProps {
  isLoaded?: boolean
}

export function Hero({ isLoaded = true }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-65 pointer-events-none"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 pt-28 pb-16 sm:py-32 lg:py-40">
        <div className="w-full">
          {/* Eyebrow */}
          <div
            className={`mb-5 sm:mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono text-white/70">
              <span className="w-6 sm:w-8 h-px bg-[#e5b869]" />
              Full-Stack Software Engineer · AI Systems Researcher
            </span>
          </div>

          {/* Name in Single Line Block */}
          <div className="mb-5 sm:mb-6">
            <h1
              className={`text-left font-bebas uppercase tracking-wider leading-none text-white whitespace-nowrap transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-[clamp(1.85rem,6.6vw,5.8rem)] font-normal text-white">
                ROSHAN KUMAR JHA
              </span>
            </h1>

            {/* Dynamic tagline */}
            <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm md:text-base text-white/80">
              <span className="w-5 sm:w-6 h-px bg-[#e5b869] hidden sm:inline-block" />
              <span>
                Building systems that{' '}
                <span className="relative inline-block font-semibold">
                  <BlurWord word={words[wordIndex]} trigger={wordIndex} />
                </span>
              </span>
            </div>
          </div>

          {/* Distinct Hero Synopsis Card with Neon Gold Border & Dimmed Justified Text */}
          <div
            className={`relative max-w-2xl my-6 sm:my-8 rounded-2xl border border-[#e5b869]/25 bg-[#09090d]/75 backdrop-blur-xl p-4 sm:p-6 shadow-[0_0_35px_rgba(229,184,105,0.08)] transition-all duration-1000 delay-200 group hover:border-[#e5b869]/45 hover:shadow-[0_0_45px_rgba(229,184,105,0.14)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Header pill inside card */}
            <div className="flex items-center justify-between gap-4 mb-2.5 sm:mb-3 border-b border-white/10 pb-2 sm:pb-2.5">
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#e5b869] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e5b869] animate-pulse" />
                <span>CORE PROFILE · FOCUS</span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-white/40 tracking-widest hidden sm:inline-block">
                PRODUCTION READY
              </span>
            </div>

            {/* Both-side aligned (justified) and dimmed bio text */}
            <p className="text-xs sm:text-sm md:text-[15px] text-white/65 leading-relaxed text-justify [text-justify:inter-word] font-sans selection:bg-[#e5b869]/30">
              Full-stack engineer shipping production web platforms, Flutter mobile apps live on Play Store, and high-precision ML forecasting pipelines with React 19, Node.js, FastAPI, and Python. Published ML researcher (JETIR) &amp; 5-Star HackerRank Coder.
            </p>

            {/* Subtle corner neon accents */}
            <div className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#e5b869] rounded-tl-2xl" />
            <div className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#e5b869] rounded-br-2xl" />
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg group"
            >
              <span>Explore my work</span>
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300"
            >
              <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#e5b869]" />
              <span>Download CV (PDF)</span>
            </a>

            <div className="flex items-center gap-2 ml-0 sm:ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:border-white/30 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:border-white/30 transition-all"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.hackerrank}
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank"
                title="HackerRank 5-Star Python Coder"
                className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-emerald-400 hover:bg-white/15 hover:border-white/30 transition-all"
              >
                <HackerRankIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className={`w-full border-t border-white/10 bg-black/70 backdrop-blur-md px-5 sm:px-6 lg:px-12 py-5 sm:py-6 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
          {[
            { value: '5★', label: 'HackerRank Python Coder' },
            { value: '92%', label: 'LSTM Forecast Precision' },
            { value: '3', label: 'Production Roles Shipped' },
            { value: '2', label: 'Fortune 50 Simulations' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5 sm:gap-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-display text-white">{stat.value}</span>
              <span className="text-[11px] sm:text-xs font-mono text-white/50 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
