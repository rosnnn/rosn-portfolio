'use client'

import { GraduationCap, Award, Cpu, Code2, ShieldCheck, Terminal, Sparkles } from 'lucide-react'
import { profile, education, certifications } from './data'
import { Reveal } from './reveal'

export function About() {
  const highlights = [
    {
      icon: Terminal,
      title: 'Full-Stack & Mobile Systems',
      description:
        'Shipped production web ERPs and Flutter Android apps live on Google Play Store, re-architecting single-tenant setups into multi-tenant platforms.',
    },
    {
      icon: Cpu,
      title: 'AI/ML & Reproducibility',
      description:
        'Engineered LSTM/GRU time-series forecasting (92% accuracy) and ML prediction models with structured experiment tracking.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise & Resilience',
      description:
        'Authored multi-region DR payment architectures, 12-domain SAP integrations, and comprehensive Cypress testing suites.',
    },
  ]

  return (
    <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
      <Reveal>
        <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
          01 — About Me
        </p>
        <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Turning complex problems into dependable systems.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.5fr_1fr]">
        {/* Main Bio Showcase Card */}
        <Reveal className="h-full">
          <div className="vice-surface-strong relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 md:p-9 shadow-2xl">
            <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

            <div>
              <div className="flex items-center gap-3">
                <span className="vice-orb flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Code2 className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-secondary">
                  Background & Engineering Focus
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-foreground/90 font-sans md:text-lg">
                Full-stack software engineer with hands-on production experience spanning <span className="text-secondary font-medium">React 19, Flutter, Node.js, FastAPI, and Python</span>. I specialize in building end-to-end applications — from Play Store mobile apps and multi-tenant web ERPs to high-precision ML forecasting pipelines.
              </p>

              {/* Highlight Pillars */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {highlights.map((h) => {
                  const Icon = h.icon
                  return (
                    <div
                      key={h.title}
                      className="vice-surface group rounded-2xl p-4 transition-all hover:-translate-y-1 hover:border-primary/40"
                    >
                      <span className="vice-orb mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-serif text-sm font-semibold text-foreground">
                        {h.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Badges footer */}
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
              <span className="vice-chip rounded-full px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/30">
                ⭐ 5-Star HackerRank Coder (Python)
              </span>
              <span className="vice-chip rounded-full px-3 py-1 text-xs font-medium text-secondary">
                📜 Published ML Researcher (JETIR)
              </span>
              <span className="vice-chip rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
                ⚡ Agile & CI/CD Delivery
              </span>
            </div>
          </div>
        </Reveal>

        {/* Education & Quick Highlights Column */}
        <div className="flex flex-col h-full gap-5 justify-between">
          <Reveal delay={100} className="flex-1">
            <div className="vice-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 transition-all hover:border-primary/40">
              <div>
                <div className="flex items-start justify-between">
                  <span className="vice-orb flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="vice-chip rounded-full px-3 py-1 text-xs font-semibold text-emerald-400 font-mono">
                    {education.score}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  Education
                </h3>
                <p className="mt-1 text-sm font-medium text-secondary">
                  {education.degree}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {education.school}
                </p>
              </div>

              <p className="mt-4 text-xs font-mono text-muted-foreground/80 border-t border-white/10 pt-3">
                {education.period}
              </p>
            </div>
          </Reveal>

          <Reveal delay={180} className="flex-1">
            <div className="vice-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 transition-all hover:border-secondary/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="vice-orb flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-mono text-secondary">
                    {certifications.length} Industry Certs
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  Verified Skills & Certifications
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Certified in Python, Data Science, Generative AI (Google Cloud), Artificial Intelligence (IBM), and Cybersecurity.
                </p>
              </div>
              
              <a
                href="#credentials"
                className="vice-button mt-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-transform hover:-translate-y-0.5"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Explore All {certifications.length} Credentials
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
