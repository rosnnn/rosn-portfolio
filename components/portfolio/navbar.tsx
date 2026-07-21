'use client'

import { useEffect, useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { navLinks, profile } from './data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 pt-4 md:px-8">
      <nav
        className={cn(
          'flex w-full max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6',
          scrolled ? 'vice-surface-strong' : 'vice-surface',
        )}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            window.location.reload()
          }}
          title="Refresh page"
          className="group flex items-center gap-2 font-serif text-lg font-semibold tracking-tight cursor-pointer"
        >
          <span className="brand-mark vice-orb relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105 active:scale-95">
            <span>R</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-glass rounded-full px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="vice-surface hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5 sm:flex"
          >
            <FileText className="h-3.5 w-3.5 text-secondary" />
            CV
          </a>
          <a
            href="#contact"
            className="vice-button hidden rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="vice-surface flex h-9 w-9 items-center justify-center rounded-xl text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-0 z-40 bg-black/40 backdrop-blur-[2px] md:hidden"
          />
          <div className="vice-surface-strong absolute left-4 right-4 top-20 z-50 rounded-2xl border border-white/15 bg-[#120a20d9] p-3 backdrop-blur-2xl md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-black/20 px-4 py-3 text-sm text-foreground/90 transition-colors hover:bg-white/12 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  )
}
