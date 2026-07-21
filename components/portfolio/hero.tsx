'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight, Building2, FileText, MapPin, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './brand-icons'
import { profile } from './data'
import myImg from '../assets/my_img.jpeg'

interface HeroProps {
  isLoaded?: boolean
}

export function Hero({ isLoaded = true }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      if (isLoaded) {
        video.currentTime = 0
        video.play().catch(() => {
          // Autoplay policy handling
        })
      } else {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [isLoaded])
  return (
    <section
      id="top"
      className="relative isolate mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center px-5 pb-7 pt-30 md:min-h-dvh md:px-8 md:pb-8 md:pt-34"
    >
      {/* strong blue light from navbar edge, fading around mid-hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-32 z-0 h-[64vh] w-screen max-w-none -translate-x-1/2"
        style={{
          background:
            'radial-gradient(86% 84% at 50% 0%, oklch(0.83 0.24 323 / 0.52) 0%, oklch(0.76 0.2 286 / 0.36) 34%, oklch(0.7 0.15 226 / 0.22) 56%, transparent 78%), linear-gradient(to bottom, oklch(0.78 0.18 328 / 0.18) 0%, transparent 74%)',
          filter: 'blur(6px)',
          maskImage: 'linear-gradient(to bottom, black 58%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 58%, transparent 100%)',
        }}
      />

      <div className="relative z-10 w-full space-y-5 md:space-y-6">

      <div className="flex flex-wrap items-center gap-2.5 mt-1 md:mt-2">
        <div className="vice-surface animate-[fade-up_0.8s_ease-out] flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          <span className="text-muted-foreground">
            Open to full-time SWE roles
          </span>
        </div>

        <div className="vice-surface animate-[fade-up_0.8s_ease-out] flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs border border-secondary/30">
          <Building2 className="h-3.5 w-3.5 text-secondary" />
          <span className="text-foreground font-medium">
            Virtual Internships: <span className="text-secondary font-semibold">JPMorgan Chase & Co.</span> · <span className="text-primary font-semibold">Walmart Global Tech</span>
          </span>
        </div>
      </div>

      <div className="grid items-center gap-7 md:grid-cols-[1.3fr_1fr] md:gap-10">
        <div>
          <p className="vice-kicker mb-3 flex items-center gap-2 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            {profile.role}
          </p>
          <h1 className="text-[clamp(1.55rem,6.4vw,4.85rem)] font-serif font-normal leading-none tracking-tight whitespace-normal md:whitespace-nowrap">
            <span className="vice-title inline-block pb-2">{profile.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:max-w-xl md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="vice-button group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="vice-surface group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4 text-secondary" />
              Download CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="vice-surface flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="vice-surface flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="vice-surface flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              aria-label="HackerRank"
              title="HackerRank 5-Star Python Coder"
            >
              <HackerRankIcon className="h-5 w-5 text-emerald-400" />
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </p>
        </div>

        <div className="animate-float-slow relative mx-auto my-4 w-full max-w-[290px] xs:max-w-[320px] sm:max-w-80 md:my-0 md:max-w-sm">
          <div className="group relative">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-[conic-gradient(from_140deg,oklch(0.86_0.22_40/0.42),oklch(0.78_0.26_330/0.42),oklch(0.75_0.18_240/0.42),oklch(0.86_0.22_40/0.42))] blur-xl opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
            <div className="vice-surface-strong relative overflow-hidden rounded-[1.9rem] p-3 shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_20%,oklch(0.95_0.1_90/0.15)_52%,transparent_76%)] opacity-40" />

              <div className="relative overflow-hidden rounded-[1.35rem]">
                <video
                  ref={videoRef}
                  src="/my_vid.mp4"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.14_0.02_285/0.55)_0%,transparent_48%)]" />
              </div>

              <span className="vice-orb absolute right-5 top-5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                Live
              </span>

              <div className="relative flex items-center justify-between px-2.5 py-3">
                <div>
                  <p className="font-serif text-[0.95rem] font-semibold italic">Full-Stack + AI</p>
                  <p className="text-xs text-muted-foreground">React · FastAPI · PyTorch</p>
                </div>
                <span className="vice-orb flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {profile.stats.map((s) => (
          <div key={s.label} className="vice-surface rounded-2xl px-4 py-3 text-center md:px-5 md:py-4">
            <p className="font-serif text-2xl font-semibold text-gradient md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
