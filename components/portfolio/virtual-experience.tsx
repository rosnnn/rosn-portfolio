'use client'

import { ShieldCheck, ArrowUpRight } from 'lucide-react'
import { virtualExperience } from './data'
import { Reveal } from './reveal'

export function VirtualExperience() {
  return (
    <section
      id="virtual-experience"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-black text-white"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <Reveal>
          <div className="mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-white/50 mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-[#e5b869]" />
              Enterprise Simulations
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.92] sm:leading-[0.9]">
              Industry scale.
              <br />
              <span className="text-white/40">Tier-1 simulations.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-sans">
              Rigorous corporate simulations demonstrating high-throughput data processing, relational schemas, and enterprise message broker integrations.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {virtualExperience.map((job, index) => (
            <Reveal key={job.company} delay={index * 120} className="h-full">
              <div className="p-6 sm:p-8 lg:p-12 border border-white/10 bg-[#09090d] h-full flex flex-col justify-between transition-all duration-500 hover:border-white/25 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs text-[#e5b869]">{job.badge}</span>
                    <span className="font-mono text-xs text-white/50">{job.period}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display text-white mb-2">
                    {job.company}
                  </h3>
                  <p className="text-sm font-mono text-white/60 mb-6">
                    {job.role} · <span className="text-[#e5b869]">{job.platform}</span>
                  </p>

                  <ul className="space-y-3 mb-8">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#e5b869] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {job.proofUrl && (
                    <a
                      href={job.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 font-mono text-xs text-emerald-300 hover:bg-emerald-900/60 transition-all shrink-0"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Certificate</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
