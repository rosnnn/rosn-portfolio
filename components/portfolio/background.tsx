'use client'

import { useEffect, useState } from 'react'
import natureImg from '../assets/nature.jpeg'

interface Snowflake {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function Background() {
  const bgUrl = typeof natureImg === 'string' ? natureImg : natureImg.src
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    // Generate 45 ambient snowflakes with randomized drift and size
    const flakes: Snowflake[] = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 1.5 + Math.random() * 3,
      duration: 6 + Math.random() * 9,
      delay: -Math.random() * 10,
      opacity: 0.35 + Math.random() * 0.55,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* synthwave beach sunset base */}
      <div
        className="absolute -inset-10"
        style={{
          backgroundImage: `url('${bgUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(7px) brightness(0.8) contrast(1.05)',
          transform: 'scale(1.04)',
        }}
      />

      {/* Ambient Snowfall Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {snowflakes.map((flake) => (
          <span
            key={flake.id}
            className="snowflake"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              opacity: flake.opacity,
            }}
          />
        ))}
      </div>

      {/* light dark wash for text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0b0714]/35 via-transparent to-[#0b0714]/60" />

      {/* subtle edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 50%, rgba(11, 7, 20, 0.45) 100%)',
        }}
      />
    </div>
  )
}
