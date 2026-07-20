import { skillGroups } from './data'
import { Reveal } from './reveal'

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
      <Reveal>
        <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
          02 — Toolkit
        </p>
        <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          The stack I reach for.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="vice-surface group h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-lg font-semibold">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="vice-chip rounded-full px-3 py-1 text-xs transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
