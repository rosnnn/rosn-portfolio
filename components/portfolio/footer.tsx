import { profile, navLinks } from './data'
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './brand-icons'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* top row: links + meta */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="glass flex flex-col gap-8 rounded-3xl p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-sm">
            <p className="font-serif text-2xl text-foreground">
              Let&apos;s build something worth shipping.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Open to full-time roles, internships, and ambitious collaborations.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="clay mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <nav className="flex flex-col gap-2" aria-label="Footer">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.hackerrank}
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank"
                title="HackerRank 5-Star Python Coder"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5 text-emerald-400"
              >
                <HackerRankIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 py-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. Inspired from GTA.
          </p>
          <p>{profile.location}</p>
        </div>
      </div>

      {/* giant clipped, gradient, bottom-faded word */}
      <div className="relative flex select-none justify-center overflow-hidden px-6 pb-2 md:px-10">
        <span
          aria-hidden="true"
          className="text-gradient translate-y-[14%] whitespace-nowrap pr-[0.12em] font-serif font-normal italic leading-[0.92] tracking-tight"
          style={{
            fontSize: 'clamp(5rem, 24vw, 22rem)',
            WebkitMaskImage:
              'linear-gradient(to bottom, oklch(0 0 0) 60%, transparent 97%)',
            maskImage:
              'linear-gradient(to bottom, oklch(0 0 0) 60%, transparent 97%)',
          }}
        >
          {"let's talk"}
        </span>
      </div>
    </footer>
  )
}
