import natureImg from '../assets/nature.jpeg'

export function Background() {
  const bgUrl = typeof natureImg === 'string' ? natureImg : natureImg.src

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
