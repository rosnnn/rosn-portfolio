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

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="vice-surface tech-card-glow group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <span className="vice-chip rounded-full px-2.5 py-0.5 font-mono text-[10px] text-secondary">
                  {group.items.length} skills
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="vice-chip relative overflow-hidden rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:bg-primary/20 hover:text-foreground hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
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
