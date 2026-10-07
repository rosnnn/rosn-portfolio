'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, Cpu, ShieldCheck, Terminal, GraduationCap, Award, ArrowUpRight } from 'lucide-react'
import { profile, education, certifications } from './data'
import { Reveal } from './reveal'
import { AsciiScene } from './ascii-scene'

function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }
    canvas.addEventListener('mousemove', handleMouseMove)

    const COUNT = 60
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618
      return {
        bx: (seed * 127.1) % 1,
        by: (seed * 311.7) % 1,
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.0),
      }
    })

    let time = 0
    const render = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height

      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 36
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 22

        const bx = p.bx * w
        const by = p.by * h
        const dx = p.bx - mx
        const dy = p.by - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const influence = Math.max(0, 1 - dist * 2.8)

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 32
        const y = by + flowY + influence * Math.sin(time + p.phase) * 32

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5
        const alpha = 0.08 + pulse * 0.2 + influence * 0.3

        ctx.beginPath()
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(229, 184, 105, ${alpha})`
        ctx.fill()
      })

      time += 0.016
      frameRef.current = requestAnimationFrame(render)
    }

    let isVisible = false
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!isVisible) {
          isVisible = true
          frameRef.current = requestAnimationFrame(render)
        }
      } else {
        isVisible = false
        cancelAnimationFrame(frameRef.current)
      }
    }, { threshold: 0.05 })

    observer.observe(canvas)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-black text-white"
    >
      {/* Background ASCII 3D Generative Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <AsciiScene />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-14 sm:mb-20 lg:mb-28">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-white/50 mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-px bg-[#fbbf24]" />
                01 / Capabilities & Philosophy
              </span>
              <h2
                className={`text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.92] sm:leading-[0.9] transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Engineering
                <br />
                <span className="text-white/40">built to scale.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-lg md:text-xl text-white/60 leading-relaxed font-sans transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Full-stack software engineer architecting dependable web platforms, mobile systems, and reproducible machine learning models. Built to scale under real-world production constraints.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Hero Feature Bento */}
          <div
            className={`lg:col-span-12 relative bg-[#09090d] border border-white/10 min-h-[480px] overflow-hidden group transition-all duration-700 flex flex-col lg:flex-row ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative flex-1 p-8 lg:p-14 z-10 flex flex-col justify-between">
              <ParticleVisualization />
              <div className="relative z-10">
                <span className="font-mono text-xs text-[#fbbf24]">01 / FULL-STACK & MOBILE</span>
                <h3 className="text-3xl lg:text-5xl font-display mt-4 mb-6 text-white group-hover:translate-x-2 transition-transform duration-500">
                  Production Web & Mobile Platforms
                </h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-8">
                  Shipped production ERP systems and live Flutter Android applications on Google Play Store. Experienced in re-architecting legacy single-tenant architectures into multi-tenant, high-throughput engines with React 19, FastAPI, and PostgreSQL.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-6">
                <div>
                  <span className="text-4xl lg:text-5xl font-display text-white">vERP 2.0</span>
                  <span className="block text-xs font-mono text-white/50 mt-1">Live on Google Play Store</span>
                </div>
                <div>
                  <span className="text-4xl lg:text-5xl font-display text-[#e5b869]">100%</span>
                  <span className="block text-xs font-mono text-white/50 mt-1">Multi-tenant Architecture</span>
                </div>
              </div>
            </div>

            {/* Right decorative visual box */}
            <div className="hidden lg:flex w-[35%] shrink-0 border-l border-white/10 bg-[#0c0c12] p-10 flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 font-mono text-xs text-white/50">
                <div className="p-3 border border-white/10 bg-black/40">
                  <span className="text-emerald-400">STATUS</span>: PRODUCTION_READY
                </div>
                <div className="p-3 border border-white/10 bg-black/40">
                  <span className="text-[#e5b869]">TEST_SUITE</span>: 30+ CYPRESS CASES PASSING
                </div>
                <div className="p-3 border border-white/10 bg-black/40">
                  <span className="text-[#67e8f9]">SECURITY</span>: ENCRYPTED AUTO-SAVE & SIGNATURES
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="font-mono text-[11px] text-white/40 block">PRIMARY FRAMEWORK</span>
                <span className="text-xl font-display text-white">React 19 · Flutter · Node.js</span>
              </div>
            </div>
          </div>

          {/* Sub Feature 02: AI/ML Research */}
          <div
            className={`lg:col-span-4 bg-[#09090d] border border-white/10 p-8 flex flex-col justify-between transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <span className="font-mono text-xs text-[#a78bfa]">02 / MACHINE LEARNING</span>
              <h3 className="text-2xl lg:text-3xl font-display mt-3 mb-4 text-white">
                Predictive AI & Time-Series
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Engineered LSTM & GRU models achieving 92% forecasting accuracy for financial trends. Published author in the International Journal of Emerging Technologies and Innovative Research (JETIR, Dec 2025).
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-3xl font-display text-white">92%</span>
              <span className="font-mono text-xs text-emerald-400">JETIR PUBLISHED</span>
            </div>
          </div>

          {/* Sub Feature 03: Enterprise Architecture */}
          <div
            className={`lg:col-span-4 bg-[#09090d] border border-white/10 p-8 flex flex-col justify-between transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <span className="font-mono text-xs text-[#67e8f9]">03 / ENTERPRISE RESILIENCE</span>
              <h3 className="text-2xl lg:text-3xl font-display mt-3 mb-4 text-white">
                Multi-Region DR & Integrations
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Authored multi-region DR payment architectures, DNS failover playbooks, 12 disaster runbooks, and a 12-domain SAP S/4HANA analytics pipeline with circuit breakers and DLQs.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-3xl font-display text-white">12 Domains</span>
              <span className="font-mono text-xs text-white/50">ZERO DOWNTIME DR</span>
            </div>
          </div>

          {/* Sub Feature 04: Education */}
          <div
            className={`lg:col-span-4 bg-[#09090d] border border-white/10 p-8 flex flex-col justify-between transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <span className="font-mono text-xs text-[#fbbf24]">04 / EDUCATION & DEGREE</span>
              <h3 className="text-2xl lg:text-3xl font-display mt-3 mb-2 text-white">
                {education.degree}
              </h3>
              <p className="text-xs font-mono text-[#e5b869] mb-2">{education.school}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Official Degree Program from Visvesvaraya Technological University (VTU) with coursework in Operating Systems, Algorithms, and Distributed Computing.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-2xl font-display text-white">{education.score}</span>
              <span className="font-mono text-xs text-white/50">{education.period}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
