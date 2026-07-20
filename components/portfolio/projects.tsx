import { ArrowUpRight } from 'lucide-react'
import { projects } from './data'
import { Reveal } from './reveal'

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
      <Reveal>
        <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
          04 — Selected work
        </p>
        <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I&apos;ve built end-to-end.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 80}
            className={i === 0 ? 'md:col-span-2' : ''}
          >
            <article className="vice-surface group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="vice-chip mb-3 inline-block rounded-full px-3 py-1 text-[11px] text-secondary">
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

              <ul className="mt-5 flex-1 space-y-2.5">
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

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
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
