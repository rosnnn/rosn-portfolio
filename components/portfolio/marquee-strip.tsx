const marqueeItems = [
  'JPMORGAN CHASE & CO. (SWE SIMULATION)',
  'WALMART GLOBAL TECH (ADVANCED SWE)',
  'FULL-STACK & ML ENGINEERING',
  '5-STAR HACKERRANK PYTHON CODER',
  'PUBLISHED ML RESEARCH (JETIR)',
  'RELIABLE API & SYSTEM DESIGN',
]

export function MarqueeStrip() {
  const content = [...marqueeItems, ...marqueeItems]

  return (
    <section aria-label="Highlights" className="relative mx-auto w-full max-w-7xl px-5 pb-10 sm:pb-12 md:px-8">
      <div className="vice-surface min-h-[4.4rem] overflow-hidden rounded-2xl py-5 sm:min-h-20 sm:py-6">
        <div className="animate-marquee-left flex w-max min-w-full items-center gap-10 px-2 will-change-transform sm:gap-12">
          {content.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-10 sm:gap-12">
              <span className="font-mono text-[0.68rem] font-semibold tracking-[0.22em] text-[#ff8dd7] sm:text-xs md:text-sm">
                {item}
              </span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#9dd4ff] sm:h-2 sm:w-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
