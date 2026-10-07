'use client'

import React, { useEffect, useState } from 'react'
import { Lottie } from 'lottie-react'
import robotAnimation from '@/components/assets/robot.json'

interface RobotAvatarProps {
  size?: number
  className?: string
  loop?: boolean
  autoplay?: boolean
  glow?: boolean
}

/**
 * Animated Waving Robot Avatar using custom robot.json Lottie asset.
 * Completely borderless, boxless, and clean.
 */
export function RobotAvatar({
  size = 40,
  className = '',
  loop = true,
  autoplay = true,
  glow = false,
}: RobotAvatarProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none overflow-visible bg-transparent ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-[#e5b869] opacity-25 blur-2xl pointer-events-none transform-gpu animate-pulse"
          style={{ transform: 'scale(1.2)' }}
        />
      )}
      <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible bg-transparent">
        <Lottie
          src={robotAnimation}
          loop={loop}
          autoplay={autoplay}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
