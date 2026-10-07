import { profile, navLinks } from './data'
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './brand-icons'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16">
      {/* Footer Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-12 sm:py-16 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
            {/* Brand Column */}
            <div className="sm:col-span-2">
              <a href="#top" className="inline-flex items-center gap-2 mb-4 group">
                <span className="text-2xl font-bebas tracking-wider text-white">ROSHAN KUMAR JHA</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-6 max-w-xs text-sm font-sans">
                Full-stack software engineer & AI/ML systems researcher building dependable production platforms.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-white/50 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-white/50 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={profile.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-emerald-400/70 hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <span>HackerRank 5★</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="sm:col-span-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">Navigation</h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect links */}
            <div className="sm:col-span-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">Direct Communication</h3>
              <div className="space-y-3 font-mono text-xs text-white/60">
                <p className="break-all">
                  EMAIL:{' '}
                  <a href={`mailto:${profile.email}`} className="text-white hover:text-[#e5b869] transition-colors">
                    {profile.email}
                  </a>
                </p>
                <p>
                  PHONE:{' '}
                  <a href={`tel:${profile.phone}`} className="text-white hover:text-[#e5b869] transition-colors">
                    {profile.phone}
                  </a>
                </p>
                <p>LOCATION: BENGALURU, INDIA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Roshan Kumar Jha. All rights reserved.</p>
          <div className="flex items-center gap-2 text-white/60">
            <span className="w-2 h-2 rounded-full bg-[#e5b869]" />
            <span>AVAILABLE FOR FULL-TIME SWE ROLES</span>
          </div>
        </div>
      </div>

      {/* Giant Signature "Let's Talk" in solid golden color, italic with bottom fade */}
      <div className="relative flex select-none justify-center items-center overflow-visible px-4 sm:px-8 pb-2 pt-6 sm:pt-10 border-t border-white/5">
        <a
          href="#contact"
          className="inline-block text-center hover:opacity-90 transition-opacity"
        >
          <span
            className="whitespace-nowrap font-display font-normal italic tracking-tight text-[#e5b869] block pr-[0.16em]"
            style={{
              fontSize: 'clamp(2.75rem, 15vw, 15rem)',
              lineHeight: 0.9,
              color: '#e5b869',
              WebkitMaskImage:
                'linear-gradient(to bottom, black 50%, transparent 96%)',
              maskImage:
                'linear-gradient(to bottom, black 50%, transparent 96%)',
            }}
          >
            {"Let's Talk"}
          </span>
        </a>
      </div>
    </footer>
  )
}
