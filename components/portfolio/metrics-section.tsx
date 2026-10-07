'use client'

import { useEffect, useState, useRef } from 'react'

const metrics = [
  {
    value: 12840,
    suffix: '+',
    prefix: '',
    label: 'Lines of Production Code Shipped',
    sublabel: 'across React, Flutter & FastAPI',
  },
  {
    value: 92,
    suffix: '%',
    prefix: '',
    label: 'Forecasting Accuracy',
    sublabel: 'LSTM/GRU time-series models',
  },
  {
    value: 30,
    suffix: '+',
    prefix: '',
    label: 'Automated Test Cases',
    sublabel: 'Cypress E2E test suites',
  },
]

function AnimatedNumber({
  end,
  suffix = '',
  prefix = '',
}: {
  end: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const [isScrambling, setIsScrambling] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2200
          const startTime = performance.now()
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(eased * end))
            setIsScrambling(progress < 0.8)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, hasAnimated])

  const displayValue = count.toLocaleString()

  return (
    <div ref={ref} className="inline-flex items-baseline">
      <span className="text-white/40 mr-1">{prefix}</span>
      <span className="tabular-nums">
        {displayValue.split('').map((char, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-150 ${
              isScrambling && char !== ',' ? 'blur-[1px]' : ''
            }`}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="text-[#e5b869]">{suffix}</span>
    </div>
  )
}

function DotGraph({
  color = 'white',
  height = 32,
  speed = 0.025,
}: {
  color?: string
  height?: number
  speed?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)
  const timeRef = useRef(Math.random() * 100)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const W = canvas.offsetWidth || 300
    const H = height
    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.scale(dpr, dpr)

    const render = () => {
      ctx.clearRect(0, 0, W, H)
      const t = timeRef.current
      const cols = Math.floor(W / 8)

      for (let i = 0; i < cols; i++) {
        const raw = 0.35 + 0.45 * Math.sin(i * 0.35 + t) * Math.cos(i * 0.12 + t * 0.7)
        const v = Math.max(0, Math.min(1, raw))
        const dotY = H - 4 - v * (H - 8)
        const x = i * 8 + 4
        const alpha = 0.15 + v * 0.6
        const r = 1.5 + v * 1.2

        ctx.beginPath()
        ctx.arc(x, dotY, r, 0, Math.PI * 2)
        ctx.fillStyle =
          color === 'gold' ? `rgba(229, 184, 105, ${alpha})` : `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      }

      timeRef.current += speed
      frameRef.current = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(frameRef.current)
  }, [color, height, speed])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: `${height}px`, display: 'block' }}
    />
  )
}

export function MetricsSection() {
  const [time, setTime] = useState<Date | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setTime(new Date())
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14 sm:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-[#e5b869]/10 text-[#e5b869] text-xs font-mono border border-[#e5b869]/20">
                <span className="w-2 h-2 rounded-full bg-[#e5b869] animate-pulse" />
                LIVE METRICS
              </span>
              <span className="text-xs sm:text-sm font-mono text-white/50">
                {time ? `${time.toLocaleTimeString('en-GB')} UTC` : ''}
              </span>
            </div>

            <h2
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.92] sm:leading-[0.9] transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Real-time
              <br />
              <span className="text-white/40">system metrics.</span>
            </h2>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Metric 1 */}
          <div
            className={`bg-[#09090d] border border-white/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 text-white">
                <AnimatedNumber end={metrics[0].value} suffix={metrics[0].suffix} />
              </div>
              <div className="mb-6">
                <DotGraph color="gold" height={36} speed={0.02} />
              </div>
            </div>
            <div>
              <div className="text-lg text-white mb-1">{metrics[0].label}</div>
              <div className="text-sm text-white/50 font-mono">{metrics[0].sublabel}</div>
            </div>
          </div>

          {/* Metric 2 & 3 */}
          {metrics.slice(1).map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-[#09090d] border border-white/10 p-10 flex flex-col justify-between transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 text-white">
                  <AnimatedNumber end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="mb-6">
                  <DotGraph color={index === 0 ? 'gold' : 'white'} height={36} speed={0.025} />
                </div>
              </div>
              <div>
                <div className="text-lg text-white mb-1">{metric.label}</div>
                <div className="text-sm text-white/50 font-mono">{metric.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
