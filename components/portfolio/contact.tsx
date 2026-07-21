import { Mail, Phone, ArrowUpRight, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './brand-icons'
import { profile } from './data'
import { Reveal } from './reveal'

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
      <Reveal>
        <div className="vice-surface-strong relative overflow-hidden rounded-[2rem] p-8 text-center md:p-14">
          <div className="animate-float-slow pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="animate-float-slower pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

          <p className="vice-kicker mb-2 font-mono text-xs uppercase tracking-[0.25em]">
            06 — Contact
          </p>
          <h2 className="vice-title mx-auto max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            I&apos;m open to full-time software engineering roles and
            interesting collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="vice-button group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="vice-surface flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5 border border-white/10"
            >
              <FileText className="h-4 w-4 text-secondary" />
              Download CV (PDF)
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${profile.phone}`}
              className="vice-surface flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 text-secondary" />
              {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="vice-surface flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="vice-surface flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="vice-surface flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              aria-label="HackerRank"
              title="HackerRank 5-Star Python Coder"
            >
              <HackerRankIcon className="h-5 w-5 text-emerald-400" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
