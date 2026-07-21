'use client'

import { Building2, ShieldCheck } from 'lucide-react'
import { virtualExperience } from './data'
import { Reveal } from './reveal'

export function VirtualExperience() {
  return (
    <section
      id="virtual-experience"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-16 md:px-8"
    >
      <Reveal>
        <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
          04 — Virtual Experience & Job Simulations
        </p>
        <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Enterprise Simulations.
        </h2>
      </Reveal>

      <div className="mt-10 space-y-4">
        {virtualExperience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <article className="vice-surface group relative overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 shadow-xl">
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-secondary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="vice-orb flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg">
                    <Building2 className="h-7 w-7" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        {job.company}
                      </h3>
                      <span className="vice-chip rounded-full px-3 py-1 text-xs font-semibold text-secondary font-mono border border-secondary/30">
                        {job.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-base font-medium text-muted-foreground">
                      {job.role} · <span className="text-secondary">{job.platform}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {job.proofUrl && (
                    <a
                      href={job.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="vice-button flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      View Verified Certificate (PDF)
                    </a>
                  )}
                  <span className="vice-chip w-fit rounded-full px-3 py-1.5 text-xs font-mono">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 md:pl-16">
                {job.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 md:pl-16">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="vice-chip rounded-full px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
