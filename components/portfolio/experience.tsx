'use client'

import { useState, useEffect, useRef } from 'react'
import { ShieldCheck, ArrowUpRight } from 'lucide-react'
import { experience } from './data'
import { Reveal } from './reveal'

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-black text-white"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-14 sm:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-white/50 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-[#e5b869]" />
            Production Experience
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.92] sm:leading-[0.9]">
            Where I&apos;ve
            <br />
            <span className="text-white/40">shipped code.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-sans">
            Hands-on software engineering across production web applications, multi-tenant ERP revamps, and enterprise disaster-recovery payment architectures.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6 sm:space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`p-6 sm:p-8 lg:p-12 border border-white/10 bg-[#09090d] transition-all duration-500 hover:border-white/25 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-[#e5b869]">ROLE 0{index + 1}</span>
                    <span className="font-mono text-xs text-white/40">·</span>
                    <span className="font-mono text-xs text-white/50">{job.period}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display text-white">{job.role}</h3>
                  <p className="text-base text-white/70 font-sans mt-1">{job.company}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {job.proofs ? (
                    job.proofs.map((proof) => (
                      <a
                        key={proof.url}
                        href={proof.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 font-mono text-xs text-emerald-300 hover:bg-emerald-900/60 transition-all"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{proof.title}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))
                  ) : (
                    job.proofUrl && (
                      <a
                        href={job.proofUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 font-mono text-xs text-emerald-300 hover:bg-emerald-900/60 transition-all"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified Proof (PDF)</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )
                  )}

                  {job.pendingProof && (
                    <span className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/40">
                      Proof Pending
                    </span>
                  )}
                </div>
              </div>

              <ul className="py-6 space-y-3 max-w-4xl">
                {job.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#e5b869] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70"
                  >
                    {tech}
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
