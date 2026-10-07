'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from './data'
import { RobotAvatar } from './robot-avatar'

const navLinks = [
  { name: 'Capabilities', href: '#about' },
  { name: 'Toolkit', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Simulations', href: '#virtual-experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Proofs', href: '#credentials' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? 'top-4 left-4 right-4' : 'top-0 left-0 right-0'
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#06060a]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-[1200px]'
            : 'bg-transparent max-w-[1400px]'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
            isScrolled ? 'h-14' : 'h-16 sm:h-20'
          }`}
        >
          {/* Animated Robot Avatar */}
          <a
            href="#top"
            className="flex items-center group transition-transform duration-300 hover:scale-110 active:scale-95"
            aria-label="Roshan Kumar Jha - Back to top"
          >
            <RobotAvatar size={isScrolled ? 46 : 56} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/70 hover:text-white transition-all flex items-center gap-1"
            >
              <span>CV PDF</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#contact"
              className={`rounded-full transition-all duration-500 flex items-center justify-center font-semibold ${
                isScrolled
                  ? 'bg-white hover:bg-white/90 text-black px-4 h-8 text-xs'
                  : 'bg-white hover:bg-white/90 text-black px-5 h-9 text-xs'
              }`}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white touch-manipulation focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-6 sm:px-8 pt-24 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-5 sm:gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display text-white hover:text-white/60 transition-all duration-500 ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`flex gap-4 pt-8 border-t border-white/10 transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
          >
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center rounded-full border border-white/20 h-12 text-sm text-white"
            >
              CV PDF
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center bg-white text-black rounded-full h-12 text-sm font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
