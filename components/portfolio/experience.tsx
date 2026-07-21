import { Briefcase, FileCheck, ShieldCheck } from 'lucide-react'
import { experience } from './data'
import { Reveal } from './reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8"
    >
      <Reveal>
        <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
          03 — Experience
        </p>
        <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Where I&apos;ve shipped.
        </h2>
      </Reveal>

      <div className="mt-10 space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <article className="vice-surface rounded-3xl p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="vice-orb flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold leading-tight">
                      {job.role}
                    </h3>
                    <p className="text-sm text-secondary">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {job.proofUrl && (
                    <a
                      href={job.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="vice-surface flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/30 transition-transform hover:-translate-y-0.5"
                    >
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified Proof
                    </a>
                  )}
                  {job.pendingProof && (
                    <span className="vice-chip rounded-full px-3 py-1 text-xs text-muted-foreground">
                      Proof Pending
                    </span>
                  )}
                  <span className="vice-chip w-fit rounded-full px-3 py-1 text-xs">
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
