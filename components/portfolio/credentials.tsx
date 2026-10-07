'use client'

import { useState } from 'react'
import { Award, BookOpen, Building2, ExternalLink, GraduationCap, ShieldCheck, FileCheck, ArrowUpRight } from 'lucide-react'
import { academicProofs, certifications, education, jobSimulations } from './data'
import { Reveal } from './reveal'

type TabType = 'all' | 'certifications' | 'simulations' | 'academic'

export function Credentials() {
  const [activeTab, setActiveTab] = useState<TabType>('all')

  return (
    <section
      id="credentials"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-black text-white"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-white/50 mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-px bg-[#e5b869]" />
                Verification & Audit Trail
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.92] sm:leading-[0.9]">
                Official
                <br />
                <span className="text-white/40">credentials.</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-white/60 leading-relaxed max-w-xl font-sans">
                Every technical competency and role backed by cryptographic certificates, university transcripts, and verified completion proofs.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                { id: 'all' as TabType, label: `ALL (${certifications.length + jobSimulations.length + academicProofs.length})` },
                { id: 'certifications' as TabType, label: `CERTS (${certifications.length})` },
                { id: 'simulations' as TabType, label: `SIMULATIONS (${jobSimulations.length})` },
                { id: 'academic' as TabType, label: `ACADEMIC (${academicProofs.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs transition-all duration-300 border ${
                    activeTab === tab.id
                      ? 'border-white bg-white text-black font-semibold'
                      : 'border-white/10 bg-[#09090d] text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Degree Banner */}
        <Reveal delay={60}>
          <div className="p-5 sm:p-8 lg:p-10 border border-white/10 bg-[#09090d] mb-8 sm:mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[#e5b869]" />
              </span>
              <div>
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#e5b869]">
                  Official VTU Degree Program
                </span>
                <h3 className="text-xl sm:text-2xl font-display text-white mt-1">
                  {education.degree}
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-white/50 mt-1">
                  {education.school} · {education.period}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 border border-emerald-500/30 bg-emerald-950/40 font-mono text-xs font-semibold text-emerald-300">
                {education.score}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Job Simulations */}
          {(activeTab === 'all' || activeTab === 'simulations') &&
            jobSimulations.map((sim, i) => (
              <Reveal key={sim.title} delay={i * 60}>
                <div className="p-5 sm:p-6 border border-white/10 bg-[#09090d] h-full flex flex-col justify-between transition-all duration-300 hover:border-white/30">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[11px] text-[#e5b869]">
                        {sim.badge}
                      </span>
                      <span className="font-mono text-[11px] text-white/40">SIMULATION</span>
                    </div>

                    <h3 className="text-xl font-display text-white mb-1">{sim.title}</h3>
                    <p className="text-xs font-mono text-white/50 mb-4">
                      {sim.company} · {sim.platform}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {sim.skills.map((s) => (
                        <span
                          key={s}
                          className="border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={sim.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80 hover:bg-white hover:text-black transition-all"
                  >
                    <span>VIEW SIMULATION PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}

          {/* Academic Proofs */}
          {(activeTab === 'all' || activeTab === 'academic') &&
            academicProofs.map((proof, i) => (
              <Reveal key={proof.title} delay={i * 60}>
                <div className="p-5 sm:p-6 border border-white/10 bg-[#09090d] h-full flex flex-col justify-between transition-all duration-300 hover:border-white/30">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[11px] text-emerald-400">
                        {proof.type}
                      </span>
                      <span className="font-mono text-[11px] text-white/40">OFFICIAL</span>
                    </div>

                    <h3 className="text-xl font-display text-white mb-1">{proof.title}</h3>
                    <p className="text-xs font-mono text-white/50 mb-6">{proof.issuer}</p>
                  </div>

                  <a
                    href={proof.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80 hover:bg-white hover:text-black transition-all"
                  >
                    <span>VIEW DOCUMENT PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}

          {/* Certifications */}
          {(activeTab === 'all' || activeTab === 'certifications') &&
            certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 50}>
                <div className="p-5 sm:p-6 border border-white/10 bg-[#09090d] h-full flex flex-col justify-between transition-all duration-300 hover:border-white/30">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[11px] text-[#a78bfa]">
                        {cert.date}
                      </span>
                      <span className="font-mono text-[11px] text-white/40">VERIFIED</span>
                    </div>

                    <h3 className="text-lg font-display text-white mb-1">{cert.name}</h3>
                    <p className="text-xs font-mono text-white/50 mb-6">{cert.issuer}</p>
                  </div>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80 hover:bg-white hover:text-black transition-all"
                  >
                    <span>VIEW CERTIFICATE PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}
