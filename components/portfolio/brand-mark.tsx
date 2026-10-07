'use client'

import React from 'react'

interface BrandMarkProps {
  className?: string
  size?: number
  glow?: boolean
  animated?: boolean
}

/**
 * Pure Astronomical Astrolabe / Quantum Compass Emblem.
 * Completely free of any letters, names, or initials.
 * 
 * Symbolism:
 * - 4-Point Celestial Compass Star: Algorithmic vision, precision, and exploration.
 * - Quantum Orbital Gyroscope Rings: Distributed systems, mathematics, and high-performance engineering.
 * - Central Singularity Spark: Machine intelligence and focused execution.
 * - Astrolabe Cardinal Ticks: Architectural craftsmanship.
 */
export function BrandMark({
  className = '',
  size = 36,
  glow = false,
  animated = false,
}: BrandMarkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient background glow if requested */}
      {glow && (
        <div
          className="absolute inset-0 rounded-2xl bg-[#e5b869] opacity-40 blur-xl pointer-events-none transform-gpu animate-pulse"
          style={{ transform: 'scale(1.5)' }}
        />
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Pure Radiant Gold Gradient */}
          <linearGradient id="astrolabeGold" x1="8" y1="8" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff1c2" />
            <stop offset="30%" stopColor="#e5b869" />
            <stop offset="70%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#9a7224" />
          </linearGradient>

          {/* Core Singularity Radial Spark */}
          <radialGradient id="astrolabeCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="25%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#e5b869" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#e5b869" stopOpacity="0" />
          </radialGradient>

          {/* Deep Obsidian Housing Gradient */}
          <linearGradient id="astrolabePlate" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#15151f" />
            <stop offset="100%" stopColor="#08080d" />
          </linearGradient>
        </defs>

        {/* Housing Plate */}
        <rect
          x="1.5"
          y="1.5"
          width="41"
          height="41"
          rx="11"
          fill="url(#astrolabePlate)"
          stroke="rgba(229,184,105,0.25)"
          strokeWidth="1"
          className="transition-colors duration-300 group-hover:stroke-[#e5b869]/70"
        />

        {/* Fine Engineering Corner Brackets */}
        <path d="M 6 10 V 6 H 10" stroke="rgba(229,184,105,0.4)" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M 34 6 H 38 V 10" stroke="rgba(229,184,105,0.4)" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M 38 34 V 38 H 34" stroke="rgba(229,184,105,0.4)" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M 10 38 H 6 V 34" stroke="rgba(229,184,105,0.4)" strokeWidth="0.8" strokeLinecap="round" />

        {/* Outer Circular Dial */}
        <circle
          cx="22"
          cy="22"
          r="15"
          fill="none"
          stroke="rgba(229,184,105,0.18)"
          strokeWidth="0.75"
        />

        {/* Dashed Orbital Calibration Ring */}
        <circle
          cx="22"
          cy="22"
          r="12.5"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.75"
          strokeDasharray="1.5 2.5"
          className={animated ? 'animate-[spin_24s_linear_infinite] origin-center' : ''}
        />

        {/* Intersecting Quantum Gyroscope Rings (60 deg tilt) */}
        <ellipse
          cx="22"
          cy="22"
          rx="13.5"
          ry="5.2"
          transform="rotate(-30 22 22)"
          fill="none"
          stroke="url(#astrolabeGold)"
          strokeWidth="0.9"
          opacity="0.55"
        />
        <ellipse
          cx="22"
          cy="22"
          rx="13.5"
          ry="5.2"
          transform="rotate(30 22 22)"
          fill="none"
          stroke="url(#astrolabeGold)"
          strokeWidth="0.9"
          opacity="0.55"
        />

        {/* Diagonal Ray Accents */}
        <line x1="15.5" y1="15.5" x2="28.5" y2="28.5" stroke="#e5b869" strokeWidth="0.65" opacity="0.4" />
        <line x1="15.5" y1="28.5" x2="28.5" y2="15.5" stroke="#e5b869" strokeWidth="0.65" opacity="0.4" />

        {/* The 4-Point Celestial Navigational Star (Pure Geometry) */}
        <path
          d="M 22 9.5 Q 22 22 9.5 22 Q 22 22 22 34.5 Q 22 22 34.5 22 Q 22 22 22 9.5 Z"
          fill="url(#astrolabeGold)"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.6"
          className="transition-transform duration-500 group-hover:scale-110 origin-center"
        />

        {/* Inner Diamond Core */}
        <polygon
          points="22,17 27,22 22,27 17,22"
          fill="#12121a"
          stroke="url(#astrolabeGold)"
          strokeWidth="0.75"
        />

        {/* Center Singularity Spark */}
        <circle cx="22" cy="22" r="3.8" fill="url(#astrolabeCore)" />
        <circle cx="22" cy="22" r="1.3" fill="#ffffff" />

        {/* Cardinal Meridian Dots */}
        <circle cx="22" cy="6.8" r="0.8" fill="#e5b869" opacity="0.7" />
        <circle cx="37.2" cy="22" r="0.8" fill="#e5b869" opacity="0.7" />
        <circle cx="22" cy="37.2" r="0.8" fill="#e5b869" opacity="0.7" />
        <circle cx="6.8" cy="22" r="0.8" fill="#e5b869" opacity="0.7" />
      </svg>
    </div>
  )
}
