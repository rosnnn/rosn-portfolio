'use client'

import { useState } from 'react'
import { Award, BookOpen, Building2, ExternalLink, FileCheck, GraduationCap, ShieldCheck } from 'lucide-react'
import { academicProofs, certifications, education, jobSimulations } from './data'
import { Reveal } from './reveal'

type TabType = 'all' | 'certifications' | 'simulations' | 'academic'

export function Credentials() {
  const [activeTab, setActiveTab] = useState<TabType>('all')

  return (
    <section
      id="credentials"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8"
    >
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
              05 — Verified Credentials & Proofs
            </p>
            <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Certifications & Official Proofs.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'vice-surface text-muted-foreground hover:text-foreground'
              }`}
            >
              All ({certifications.length + jobSimulations.length + academicProofs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('certifications')}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeTab === 'certifications'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'vice-surface text-muted-foreground hover:text-foreground'
              }`}
            >
              Certifications ({certifications.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('simulations')}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeTab === 'simulations'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'vice-surface text-muted-foreground hover:text-foreground'
              }`}
            >
              Job Simulations ({jobSimulations.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('academic')}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeTab === 'academic'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'vice-surface text-muted-foreground hover:text-foreground'
              }`}
            >
              Academic Proofs ({academicProofs.length})
            </button>
          </div>
        </div>
      </Reveal>

      {/* Education summary banner */}
      <Reveal delay={60}>
        <div className="vice-surface-strong mt-8 flex flex-col gap-4 rounded-3xl p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-start gap-4">
            <span className="vice-orb flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-secondary font-mono">
                Official Degree Program
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {education.degree}
              </h3>
              <p className="text-sm text-muted-foreground">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="vice-chip rounded-full px-4 py-2 text-sm font-semibold text-emerald-400 border border-emerald-500/30">
              {education.score}
            </span>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Job Simulations */}
        {(activeTab === 'all' || activeTab === 'simulations') &&
          jobSimulations.map((sim, i) => (
            <Reveal key={sim.title} delay={i * 60}>
              <div className="vice-surface group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="vice-orb flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <span className="vice-chip rounded-full px-2.5 py-1 text-[11px] font-medium text-secondary">
                      {sim.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-semibold leading-snug">
                    {sim.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {sim.company} · {sim.platform}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {sim.skills.map((s) => (
                      <span key={s} className="vice-chip rounded-full px-2.5 py-0.5 text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={sim.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="vice-button mt-6 flex items-center justify-center gap-2 rounded-2xl py-2.5 text-xs font-medium transition-transform group-hover:scale-[1.02]"
                >
                  <ShieldCheck className="h-4 w-4" />
                  View Verified Simulation PDF
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}

        {/* Academic Proofs */}
        {(activeTab === 'all' || activeTab === 'academic') &&
          academicProofs.map((proof, i) => (
            <Reveal key={proof.title} delay={i * 60}>
              <div className="vice-surface group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="vice-orb flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                      <FileCheck className="h-5 w-5" />
                    </span>
                    <span className="vice-chip rounded-full px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                      {proof.type}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-semibold leading-snug">
                    {proof.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {proof.issuer}
                  </p>
                </div>

                <a
                  href={proof.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="vice-surface mt-6 flex items-center justify-center gap-2 rounded-2xl border border-secondary/30 py-2.5 text-xs font-medium text-foreground transition-transform group-hover:scale-[1.02] hover:bg-secondary/10"
                >
                  <BookOpen className="h-4 w-4 text-secondary" />
                  View Official Document
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}

        {/* Certifications */}
        {(activeTab === 'all' || activeTab === 'certifications') &&
          certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 50}>
              <div className="vice-surface group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="vice-orb flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <Award className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] text-muted-foreground font-mono">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-base font-semibold leading-snug">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="vice-surface mt-6 flex items-center justify-center gap-2 rounded-2xl border border-white/10 py-2.5 text-xs font-medium text-foreground/90 transition-transform group-hover:scale-[1.02] hover:text-foreground"
                >
                  <Award className="h-4 w-4 text-primary" />
                  View Certificate PDF
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
      </div>
    </section>
  )
}
