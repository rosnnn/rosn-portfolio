'use client'

import { useEffect, useState } from 'react'
import { RobotAvatar } from './robot-avatar'

interface LandingLoaderProps {
  onComplete?: () => void
}

export function LandingLoader({ onComplete }: LandingLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const startTime = performance.now()
    const duration = 1000 // 1.0s fast loading

    const update = (now: number) => {
      const elapsed = now - startTime
      const p = Math.min(Math.floor((elapsed / duration) * 100), 100)
      setProgress(p)

      if (p < 100) {
        requestAnimationFrame(update)
      } else {
        const exitTimer = window.setTimeout(() => setClosing(true), 150)
        const hideTimer = window.setTimeout(() => {
          setVisible(false)
          onComplete?.()
        }, 450)

        return () => {
          clearTimeout(exitTimer)
          clearTimeout(hideTimer)
        }
      }
    }

    const frameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameId)
  }, [onComplete])

  if (!visible) return null

  return (
    <div
      aria-live="polite"
      aria-label="Loading Roshan Kumar Jha's Portfolio"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-[#f4f4f5] transition-all duration-500 ${
        closing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative flex flex-col items-center text-center font-mono max-w-sm w-full px-6 bg-transparent">
        {/* Animated Robot Avatar without border */}
        <div className="relative mb-5 flex items-center justify-center">
          <RobotAvatar size={110} glow={true} />
        </div>

        <h2 className="font-bebas text-3xl uppercase tracking-wider text-white">
          Roshan Kumar Jha
        </h2>
        <p className="text-xs text-white/50 font-mono mt-1 mb-6">
          Full-Stack Software Engineer
        </p>

        <div className="w-full flex items-center justify-between text-xs text-white/40 mb-2 font-mono">
          <span>PORTFOLIO READY</span>
          <span className="text-[#e5b869] font-bold">{progress}%</span>
        </div>

        <div className="w-full h-1 bg-white/10 overflow-hidden rounded-full">
          <div
            className="h-full bg-[#e5b869] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
