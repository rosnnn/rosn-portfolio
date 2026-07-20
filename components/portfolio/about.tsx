import { GraduationCap, Award } from 'lucide-react'
import { profile, education, certifications } from './data'
import { Reveal } from './reveal'

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
      <Reveal>
        <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
          01 — About
        </p>
        <h2 className="vice-title max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Engineer who ships across the stack.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="vice-surface h-full rounded-3xl p-7">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Whether it&apos;s modernizing an ERP, wiring a Flutter app to
              dozens of endpoints, or squeezing reproducibility out of an ML
              training loop — I like turning fuzzy problems into dependable,
              well-tested systems.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={100}>
            <div className="vice-surface rounded-3xl p-6">
              <span className="vice-orb mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-lg font-semibold">Education</h3>
              <p className="mt-1 text-sm font-medium">{education.degree}</p>
              <p className="text-sm text-muted-foreground">{education.school}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-muted-foreground">
                <span>{education.period}</span>
                <span className="text-primary">{education.score}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="vice-surface rounded-3xl p-6">
              <span className="vice-orb mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-lg font-semibold">Certifications</h3>
              <ul className="mt-3 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="text-sm">
                    <p className="font-medium leading-snug">{c.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {c.issuer} · {c.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
