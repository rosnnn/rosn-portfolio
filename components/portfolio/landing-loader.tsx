'use client'

import { useEffect, useRef, useState } from 'react'

const loaderTitles = [
  ['Loading', 'Now'],
  ['Please', 'Wait'],
  ['Almost', 'There'],
]

interface LandingLoaderProps {
  onComplete?: () => void
}

export function LandingLoader({ onComplete }: LandingLoaderProps) {
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = 0
      audio.volume = 0.65
      audio.muted = false

      const startAudio = async () => {
        try {
          await audio.play()
        } catch {
          // Autoplay blocked fallback: try muted then unmute
          try {
            audio.muted = true
            await audio.play()
            audio.muted = false
          } catch {
            // Ignored if completely restricted
          }
        }
      }

      startAudio()

      const unlockOnUserGesture = () => {
        if (audio && audio.paused) {
          audio.muted = false
          audio.play().catch(() => {})
        }
      }

      window.addEventListener('pointerdown', unlockOnUserGesture, { once: true })
      window.addEventListener('click', unlockOnUserGesture, { once: true })
      window.addEventListener('keydown', unlockOnUserGesture, { once: true })

      return () => {
        window.removeEventListener('pointerdown', unlockOnUserGesture)
        window.removeEventListener('click', unlockOnUserGesture)
        window.removeEventListener('keydown', unlockOnUserGesture)
      }
    }
  }, [])

  useEffect(() => {
    // 6.0s: start loader exit animation
    const closeTimer = window.setTimeout(() => setClosing(true), 6000)

    // 6.5s: stop audio, hide loader, and notify parent that loading completed
    const hideTimer = window.setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setVisible(false)
      onComplete?.()
    }, 6500)

    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(hideTimer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [onComplete])

  if (!visible) return null

  return (
    <div
      aria-live="polite"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-120 overflow-hidden ${closing ? 'animate-loader-exit pointer-events-none' : ''}`}
    >
      <audio ref={audioRef} preload="auto" autoPlay playsInline>
        <source src="/loading.mp3" type="audio/mpeg" />
        <source src="/loading.mpeg" type="audio/mpeg" />
      </audio>

      <div className="absolute inset-0 bg-[linear-gradient(165deg,#12061f_0%,#170925_42%,#090712_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          background:
            'radial-gradient(85% 46% at 50% 110%, oklch(0.8 0.24 18 / 0.65) 0%, oklch(0.73 0.25 338 / 0.44) 32%, transparent 72%), radial-gradient(95% 70% at 50% -10%, oklch(0.71 0.2 300 / 0.28) 0%, transparent 62%)',
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[40vh] opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.85 0.2 320 / 0.32) 1px, transparent 1px), linear-gradient(to top, oklch(0.85 0.2 320 / 0.32) 1px, transparent 1px)',
          backgroundSize: '58px 58px',
          maskImage: 'linear-gradient(to top, black 0%, transparent 88%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 88%)',
        }}
      />

      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, transparent 0%, oklch(0.96 0.015 90 / 0.1) 50%, transparent 100%)', backgroundSize: '220% 100%', animation: 'loader-sweep 1.8s linear infinite' }} />

      <div className="relative flex h-full w-full items-center justify-center px-6">
        <div className="text-center">
          <div className="loader-headline-window">
            <div className="loader-headline-track">
              {loaderTitles.map(([first, second], index) => (
                <h2 key={`${first}-${second}`} className={`loader-headline loader-variant-${index + 1}`}>
                  {first}
                  <br />
                  {second}
                </h2>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-7 h-0.75 w-44 overflow-hidden rounded-full bg-foreground/10">
            <span className="block h-full w-1/2 animate-loader-bar rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
