const marqueeItems = [
  'JPMORGAN CHASE & CO. (SWE SIMULATION)',
  'WALMART GLOBAL TECH (ADVANCED SWE)',
  'REACT 19 · FASTAPI · FLUTTER · PYTHON',
  '5-STAR HACKERRANK PYTHON CODER',
  'PUBLISHED ML RESEARCH (JETIR)',
  'HIGH-PRECISION TIME SERIES & DISTRIBUTED SYSTEMS',
  'CYPRESS TEST AUTOMATION · CI/CD PIPELINES',
]

export function MarqueeStrip() {
  const content = [...marqueeItems, ...marqueeItems]

  return (
    <section aria-label="Technical Highlights" className="relative w-full border-y border-white/10 bg-[#08080c] py-4 overflow-hidden">
      <div className="animate-marquee flex w-max min-w-full items-center gap-10 will-change-transform sm:gap-14">
        {content.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-10 sm:gap-14">
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-white/70">
              {item}
            </span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#e5b869] animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  )
}
