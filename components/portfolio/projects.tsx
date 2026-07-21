import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { projects } from './data'
import { Reveal } from './reveal'

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
      <Reveal>
        <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
          05 — Selected work
        </p>
        <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I&apos;ve built end-to-end.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80} className="h-full">
            <article className="vice-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="vice-chip mb-3 inline-block rounded-full px-3 py-1 text-[11px] text-secondary font-mono">
                      {project.badge}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="vice-orb flex h-10 w-10 shrink-0 items-center justify-center rounded-xl vice-chip transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {project.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-4">
                {project.paperUrl && (
                  <div>
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="vice-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/30 transition-transform hover:-translate-y-0.5"
                    >
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      Verified JETIR Certificate (PDF)
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="vice-chip rounded-full px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
