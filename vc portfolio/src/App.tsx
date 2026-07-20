import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Star, Heart, Shield, DollarSign, Radio, Github, Linkedin, Mail,
  Phone, MapPin, Crosshair, Car, Briefcase, Skull, Zap,
  Volume2, VolumeX, ChevronDown, Menu, X, Send, Trophy, Clock, Target,
} from 'lucide-react';

/* ============================================================
   DATA
   ============================================================ */

type Project = {
  id: string;
  codename: string;
  title: string;
  type: string;
  cut: string;
  difficulty: number;
  reward: string;
  status: 'CLEAN' | 'IN PROGRESS' | 'LEGENDARY';
  tags: string[];
  blurb: string;
  accent: 'pink' | 'cyan' | 'sun';
};

const PROJECTS: Project[] = [
  {
    id: 'p1',
    codename: 'OPERATION: NEON HEIST',
    title: 'Realtime Trading Terminal',
    type: 'Web App · React + WebSocket',
    cut: '40% cut',
    difficulty: 5,
    reward: '$2.4M',
    status: 'LEGENDARY',
    tags: ['React', 'WebSocket', 'Charts', 'TypeScript'],
    blurb: 'A low-latency trading dashboard streaming live market data with custom charting, hotkeys, and a heist-grade execution panel.',
    accent: 'pink',
  },
  {
    id: 'p2',
    codename: 'JOB: OCEAN DRIVE',
    title: 'AI Image Synth Studio',
    type: 'Full-Stack · Next.js + Diffusion',
    cut: '35% cut',
    difficulty: 4,
    reward: '$1.8M',
    status: 'CLEAN',
    tags: ['Next.js', 'Python', 'CUDA', 'Canvas'],
    blurb: 'Browser-based generative art studio. Prompt-to-image pipeline with batch rendering, gallery, and exportable 4K frames.',
    accent: 'cyan',
  },
  {
    id: 'p3',
    codename: 'THE MALIBU JOB',
    title: 'Multiplayer Browser Game',
    type: 'Game · WebGL + WebRTC',
    cut: '50% cut',
    difficulty: 5,
    reward: '$3.1M',
    status: 'LEGENDARY',
    tags: ['WebGL', 'WebRTC', 'Node', 'Physics'],
    blurb: 'Realtime 8-player arena shooter with rollback netcode, custom physics engine, and a map editor. No servers, pure P2P.',
    accent: 'sun',
  },
  {
    id: 'p4',
    codename: 'CONVOY: LITTLE HAVANA',
    title: 'Logistics Routing Platform',
    type: 'Backend · Go + PostGIS',
    cut: '30% cut',
    difficulty: 3,
    reward: '$920K',
    status: 'CLEAN',
    tags: ['Go', 'PostGIS', 'gRPC', 'K8s'],
    blurb: 'Dynamic fleet routing with live traffic ingestion, geofencing, and a dispatcher UI handling 10k vehicles in real time.',
    accent: 'cyan',
  },
  {
    id: 'p5',
    codename: 'VICE PORT PAYROLL',
    title: 'Payments & Subscriptions Suite',
    type: 'Fintech · Stripe + Edge',
    cut: '25% cut',
    difficulty: 4,
    reward: '$1.2M',
    status: 'IN PROGRESS',
    tags: ['Stripe', 'Supabase', 'Edge', 'Webhooks'],
    blurb: 'Subscription billing engine with usage metering, dunning, and a self-serve portal. Handles 47k active subscriptions.',
    accent: 'pink',
  },
  {
    id: 'p6',
    codename: 'SUNSET DESIGN CARTEL',
    title: 'Design System & Component Lib',
    type: 'Frontend · TypeScript + Storybook',
    cut: '20% cut',
    difficulty: 3,
    reward: '$640K',
    status: 'CLEAN',
    tags: ['TypeScript', 'Tailwind', 'Storybook', 'A11y'],
    blurb: 'A 120-component design system powering 6 production apps. Tokenized theming, full a11y audit, zero-runtime CSS.',
    accent: 'sun',
  },
];

const STATS = [
  { label: 'CODING', icon: Crosshair, value: 98 },
  { label: 'DESIGN', icon: Target, value: 87 },
  { label: 'ARCHITECTURE', icon: Briefcase, value: 92 },
  { label: 'SHIPPING', icon: Zap, value: 95 },
  { label: 'TROUBLE', icon: Skull, value: 100 },
];

const TIMELINE = [
  { year: '1998', title: 'BORN IN VICE', text: 'Spawned into the world. First line of code printed on a CRT monitor.' },
  { year: '2016', title: 'FIRST HEIST', text: 'Shipped first production app. Got the taste for clean commits and big payouts.' },
  { year: '2019', title: 'CREW EXPANSION', text: 'Led a team of 6 engineers on a multi-tenant SaaS. Learned the value of a good crew.' },
  { year: '2021', title: 'OCEAN VIEW OFFICE', text: 'Went independent. Took on contract work for fintech, gaming, and AI startups.' },
  { year: '2024', title: 'MOST WANTED', text: 'Top 1% contributor on open source. Reputation level: LEGENDARY.' },
  { year: '2026', title: 'THE NEXT JOB', text: 'Currently planning the next big score. Open to offers from serious players.' },
];

const SKILLS = [
  { name: 'TypeScript', level: 98 },
  { name: 'React / Next.js', level: 96 },
  { name: 'Node / Edge / Deno', level: 90 },
  { name: 'Go / Rust', level: 78 },
  { name: 'PostgreSQL / Supabase', level: 92 },
  { name: 'WebGL / Canvas', level: 84 },
  { name: 'Stripe / Payments', level: 88 },
  { name: 'DevOps / K8s', level: 80 },
];

const RADIOS = [
  { name: 'V-ROCK', freq: '95.5', color: '#ff2d95', genre: 'Hard Rock' },
  { name: 'WAVE 105', freq: '105.1', color: '#00e5ff', genre: 'New Wave' },
  { name: 'FLASH FM', freq: '88.3', color: '#ffb703', genre: 'Pop' },
  { name: 'EMOTION 98', freq: '98.7', color: '#1de9b6', genre: 'Soft Rock' },
];

const TICKER = [
  'BREAKING: Local developer ships 6 heists in one night',
  'WANTED LEVEL RISING after that last commit',
  'Tommy Vercetti reportedly "impressed" by your portfolio',
  'New job posting: Senior Heist Engineer · Ocean Drive',
  'Stock in NEON up 400% on news of the latest deploy',
  'Police warn: do not approach the frontend — it is armed and responsive',
  'Tune to V-ROCK 95.5 for maximum productivity',
  'SUNSET over Vice City never looked this good',
];

/* ============================================================
   HOOKS
   ============================================================ */

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids]);
  return active;
}

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
}

function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold: 0.2, ...opts });
    ob.observe(ref.current);
    return () => ob.disconnect();
  }, [opts]);
  return { ref, inView };
}

/* ============================================================
   LOADING SCREEN
   ============================================================ */

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [tip] = useState(() => {
    const tips = [
      'TIP: A clean commit history is worth more than a clean getaway.',
      'TIP: Always scope the requirements before you scope the building.',
      'TIP: The crew that types together, ships together.',
      'TIP: Never trust a deploy on a Friday night in Vice City.',
      'TIP: Refactoring is just a heist on your own code.',
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  });

  useEffect(() => {
    const start = performance.now();
    const dur = 2600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setPct(Math.floor(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 450);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] vice-sky flex flex-col items-center justify-center scanlines overflow-hidden">
      <div className="absolute inset-0 vice-grid opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-vice-deep to-transparent" />

      {/* Big sun */}
      <div className="absolute top-[18%] w-72 h-72 rounded-full bg-gradient-to-b from-vice-sun via-vice-orange to-vice-pink shadow-neon-sun animate-sunset" />
      <div className="absolute top-[18%] w-72 h-72 rounded-full sun-rays animate-spin-slow opacity-60" />

      <div className="relative z-10 text-center px-6">
        <p className="font-wide text-vice-cyan tracking-[0.4em] text-sm mb-2 animate-flicker">
          LOADING VICE CITY
        </p>
        <h1 className="font-display text-6xl sm:text-8xl neon-pink text-stroke-dark leading-none">
          VICE
        </h1>
        <h2 className="font-display text-3xl sm:text-5xl neon-cyan text-stroke-dark -mt-2">
          PORTFOLIO
        </h2>

        {/* progress */}
        <div className="mt-8 w-72 sm:w-96 mx-auto">
          <div className="flex justify-between font-wide text-vice-cream/80 text-xs tracking-widest mb-1">
            <span>INITIALIZING</span>
            <span>{pct}%</span>
          </div>
          <div className="h-3 bg-vice-deep/60 border border-vice-cyan/40">
            <div
              className="h-full bg-gradient-to-r from-vice-pink via-vice-orange to-vice-sun transition-[width] duration-100"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <p className="mt-8 font-wide text-vice-cream/70 text-xs sm:text-sm max-w-md mx-auto tracking-wide">
          {tip}
        </p>
      </div>

      <div className="absolute bottom-6 font-mono text-vice-cream/40 text-xs tracking-widest">
        © VERCETTI CRIME FAMILY · EST. 1986
      </div>
    </div>
  );
}

/* ============================================================
   HUD
   ============================================================ */

function HUD({ wanted, money }: { wanted: number; money: number }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="hud-panel border-b border-vice-cyan/30 px-4 sm:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Money */}
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-vice-sun" />
            <span className="font-mono font-bold text-vice-sun text-sm sm:text-lg tabular-nums">
              ${money.toLocaleString()}
            </span>
          </div>
          {/* Health */}
          <div className="hidden sm:flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-vice-pink" fill="#ff2d95" />
            <div className="w-20 h-2 bg-vice-deep border border-vice-pink/50">
              <div className="h-full bg-vice-pink" style={{ width: '96%' }} />
            </div>
          </div>
          {/* Armor */}
          <div className="hidden sm:flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-vice-cyan" />
            <div className="w-20 h-2 bg-vice-deep border border-vice-cyan/50">
              <div className="h-full bg-vice-cyan" style={{ width: '88%' }} />
            </div>
          </div>
        </div>

        {/* Wanted stars */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              className={`w-4 h-4 sm:w-5 sm:h-5 ${n <= wanted ? 'star-active animate-pulse-star' : 'star-inactive'}`}
              fill={n <= wanted ? '#ffb703' : 'none'}
            />
          ))}
        </div>

        <button
          onClick={() => setOpen(false)}
          className="text-vice-cream/60 hover:text-vice-cyan transition"
          aria-label="Hide HUD"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   NAV
   ============================================================ */

function Nav({ active, onJump }: { active: string; onJump: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['about', 'DOSSIER'],
    ['heists', 'HEISTS'],
    ['stats', 'STATS'],
    ['timeline', 'RAP SHEET'],
    ['contact', 'CONTACT'],
  ];
  return (
    <header className="fixed top-12 sm:top-14 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="hud-panel border border-vice-pink/30 flex items-center justify-between px-4 py-2">
          <button onClick={() => onJump('hero')} className="font-display text-xl neon-pink leading-none">
            VICE<span className="neon-cyan">.DEV</span>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => onJump(id)}
                className={`font-wide tracking-widest text-sm transition ${
                  active === id ? 'text-vice-cyan' : 'text-vice-cream/70 hover:text-vice-pink'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <button className="md:hidden text-vice-cream" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden hud-panel border border-vice-pink/30 mt-1 px-4 py-3 flex flex-col gap-2">
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => { onJump(id); setOpen(false); }}
                className="font-wide tracking-widest text-left text-vice-cream/80 hover:text-vice-pink"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ============================================================
   HERO
   ============================================================ */

function Hero({ onJump }: { onJump: (id: string) => void }) {
  return (
    <section id="hero" className="relative min-h-screen vice-sky overflow-hidden scanlines">
      {/* grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 vice-grid opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-vice-deep via-vice-deep/40 to-transparent" />

      {/* sun */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-b from-vice-sun via-vice-orange to-vice-pink shadow-neon-sun animate-sunset" />
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full sun-rays animate-spin-slow opacity-50" />

      {/* palm trees (SVG silhouettes) */}
      <PalmTree className="absolute bottom-0 left-2 sm:left-10 w-40 sm:w-56 palm-shadow" />
      <PalmTree className="absolute bottom-0 right-2 sm:right-10 w-40 sm:w-56 palm-shadow -scale-x-100" />

      {/* drive-by car */}
      <div className="absolute bottom-[18%] left-0 w-full overflow-hidden pointer-events-none">
        <div className="animate-drive-by flex items-end gap-2 w-max">
          <Car className="w-16 h-10 text-vice-pink drop-shadow-[0_0_12px_#ff2d95]" />
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-vice-cyan to-transparent" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <p className="font-wide tracking-[0.5em] text-vice-cyan text-xs sm:text-sm mb-4 animate-flicker">
          WELCOME TO PARADISE · EST. 1986
        </p>
        <h1 className="font-display text-7xl sm:text-9xl lg:text-[12rem] neon-pink text-stroke-dark leading-[0.85]">
          YOUR NAME
        </h1>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl neon-cyan text-stroke-dark mt-2">
          SENIOR HEIST ENGINEER
        </h2>
        <p className="mt-6 max-w-xl font-body text-vice-cream/80 text-sm sm:text-base">
          Full-stack developer based out of Vice City. I plan the job, drive the getaway car,
          and split the loot with the crew. Currently <span className="text-vice-sun font-semibold">MOST WANTED</span> for shipping production-grade apps.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onJump('heists')}
            className="group relative px-6 py-3 bg-vice-pink text-vice-deep font-wide tracking-widest text-sm shadow-neon hover:bg-vice-hot transition"
          >
            VIEW THE HEISTS
            <span className="absolute inset-0 border border-vice-cyan group-hover:border-vice-pink transition" />
          </button>
          <button
            onClick={() => onJump('contact')}
            className="px-6 py-3 border-2 border-vice-cyan text-vice-cyan font-wide tracking-widest text-sm hover:bg-vice-cyan hover:text-vice-deep transition"
          >
            HIRE THE CREW
          </button>
        </div>

        <ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 text-vice-cream/60 animate-bounce" />
      </div>
    </section>
  );
}

function PalmTree({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} aria-hidden>
      <g fill="#0a0a1a">
        <path d="M95 300 L100 120 L105 300 Z" />
        <path d="M100 120 C 60 100, 20 90, -10 100 C 30 95, 70 100, 100 120" />
        <path d="M100 120 C 140 100, 180 90, 210 100 C 170 95, 130 100, 100 120" />
        <path d="M100 120 C 70 90, 40 60, 10 30 C 50 70, 80 100, 100 120" />
        <path d="M100 120 C 130 90, 160 60, 190 30 C 150 70, 120 100, 100 120" />
        <path d="M100 120 C 95 80, 90 40, 95 0 C 100 40, 102 80, 100 120" />
      </g>
    </svg>
  );
}

/* ============================================================
   SECTION HEADING
   ============================================================ */

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-12">
      <p className="font-wide tracking-[0.4em] text-vice-cyan text-xs mb-2">{kicker}</p>
      <h2 className="font-display text-5xl sm:text-7xl neon-pink text-stroke-dark leading-none">{title}</h2>
      {sub && <p className="mt-3 font-body text-vice-cream/70 max-w-2xl">{sub}</p>}
      <div className="section-rule mt-4 w-full max-w-md" />
    </div>
  );
}

/* ============================================================
   ABOUT / DOSSIER
   ============================================================ */

function About() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 bg-vice-deep overflow-hidden">
      <div className="absolute inset-0 vice-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          kicker="FILE #001 · CONFIDENTIAL"
          title="THE DOSSIER"
          sub="Pulled from the Vice City Police Department records room. Handle with care."
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 hud-panel border border-vice-cyan/30 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Skull className="w-8 h-8 text-vice-pink" />
              <h3 className="font-display text-3xl text-vice-cream">SUBJECT PROFILE</h3>
            </div>
            <p className="font-body text-vice-cream/80 leading-relaxed">
              I'm a full-stack engineer with a decade of experience planning and executing
              high-stakes software heists. I've cracked trading systems, multiplayer games,
              fintech platforms, and AI pipelines. I work fast, I work clean, and I always
              leave the codebase better than I found it.
            </p>
            <p className="mt-4 font-body text-vice-cream/70 leading-relaxed">
              My specialty is the full job: architecture, frontend, backend, infra, and the
              final polish pass that makes the product feel like a million bucks. I run with
              small crews, ship in tight sprints, and treat every release like a getaway —
              planned, rehearsed, and executed on time.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: '10+', v: 'YEARS ACTIVE' },
                { k: '60+', v: 'JOBS SHIPPED' },
                { k: '6', v: 'CREWS LED' },
                { k: '∞', v: 'LINES OF CODE' },
              ].map((s) => (
                <div key={s.v} className="border border-vice-pink/30 p-3 text-center">
                  <div className={`font-display text-3xl neon-sun ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>{s.k}</div>
                  <div className="font-wide text-vice-cream/60 text-[10px] tracking-widest mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hud-panel border border-vice-pink/30 p-6">
            <h3 className="font-display text-2xl text-vice-pink mb-4">CASE FILE</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-vice-cyan mt-0.5 shrink-0" /> Vice City, FL · Remote worldwide</li>
              <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-vice-cyan mt-0.5 shrink-0" /> Available for contract & full-time</li>
              <li className="flex items-start gap-2"><Trophy className="w-4 h-4 text-vice-cyan mt-0.5 shrink-0" /> Specialty: 0 → 1 product engineering</li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-vice-cyan mt-0.5 shrink-0" /> Response time: under 24 hours</li>
              <li className="flex items-start gap-2"><Crosshair className="w-4 h-4 text-vice-cyan mt-0.5 shrink-0" /> Currently hunting: founding eng roles</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-vice-cream/10">
              <p className="font-wide text-vice-cream/50 text-[10px] tracking-widest mb-2">AFFILIATIONS</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'].map((t) => (
                  <span key={t} className="px-2 py-1 border border-vice-cyan/30 font-mono text-[10px] text-vice-cyan">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HEISTS / PROJECTS
   ============================================================ */

function Heists() {
  const accentMap = {
    pink: { border: 'border-vice-pink/40', glow: 'shadow-neon', text: 'text-vice-pink', bg: 'bg-vice-pink' },
    cyan: { border: 'border-vice-cyan/40', glow: 'shadow-neon-cyan', text: 'text-vice-cyan', bg: 'bg-vice-cyan' },
    sun: { border: 'border-vice-sun/40', glow: 'shadow-neon-sun', text: 'text-vice-sun', bg: 'bg-vice-sun' },
  };
  return (
    <section id="heists" className="relative py-24 bg-gradient-to-b from-vice-deep via-vice-night to-vice-deep overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vice-pink to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          kicker="FILE #002 · ACTIVE CASES"
          title="THE HEISTS"
          sub="A selection of jobs I've planned, executed, and walked away from. Each one shipped clean."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => {
            const a = accentMap[p.accent];
            return (
              <article
                key={p.id}
                className={`heist-card hud-panel ${a.border} p-5 flex flex-col group relative overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${a.bg}`} />
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className={`font-wide text-[10px] tracking-[0.3em] ${a.text}`}>{p.codename}</p>
                    <h3 className="font-display text-2xl text-vice-cream leading-tight mt-1">{p.title}</h3>
                  </div>
                  <span className={`px-2 py-1 font-wide text-[10px] tracking-widest border ${
                    p.status === 'LEGENDARY' ? 'border-vice-sun text-vice-sun' :
                    p.status === 'CLEAN' ? 'border-vice-cyan text-vice-cyan' :
                    'border-vice-pink text-vice-pink'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-vice-cream/50 mb-3">{p.type}</p>
                <p className="font-body text-sm text-vice-cream/75 leading-relaxed mb-4">{p.blurb}</p>

                <div className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-vice-deep border border-vice-cream/20 font-mono text-[10px] text-vice-cream/70">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-vice-cream/10">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className={`w-3.5 h-3.5 ${n <= p.difficulty ? 'star-active' : 'star-inactive'}`} fill={n <= p.difficulty ? '#ffb703' : 'none'} />
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[10px] text-vice-cream/40">{p.cut}</p>
                      <p className={`font-display text-xl ${a.text}`}>{p.reward}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STATS
   ============================================================ */

function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="stats" className="relative py-24 bg-vice-deep overflow-hidden">
      <div className="absolute inset-0 vice-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          kicker="FILE #003 · CHARACTER SHEET"
          title="PLAYER STATS"
          sub="Maxed-out skill tree. Spend your skill points elsewhere — I've already leveled up."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-10">
          {/* Character stats */}
          <div className="hud-panel border border-vice-pink/30 p-6 sm:p-8">
            <h3 className="font-display text-2xl text-vice-pink mb-6">SPECIAL ABILITIES</h3>
            <div className="space-y-5">
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="flex items-center gap-2 font-wide tracking-widest text-sm text-vice-cream/90">
                        <Icon className="w-4 h-4 text-vice-cyan" />
                        {s.label}
                      </span>
                      <span className="font-mono text-vice-sun text-sm">{inView ? s.value : 0}/100</span>
                    </div>
                    <div className="h-3 bg-vice-night border border-vice-cream/10 overflow-hidden">
                      <div
                        className="h-full stat-fill transition-[width] duration-1000 ease-out"
                        style={{ width: inView ? `${s.value}%` : '0%', transitionDelay: `${i * 120}ms` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="hud-panel border border-vice-cyan/30 p-6 sm:p-8">
            <h3 className="font-display text-2xl text-vice-cyan mb-6">WEAPON PROFICIENCY</h3>
            <div className="space-y-4">
              {SKILLS.map((s, i) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-vice-cream/70 w-44 shrink-0">{s.name}</span>
                  <div className="flex-1 h-2 bg-vice-night border border-vice-cream/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-vice-cyan to-vice-aqua transition-[width] duration-1000 ease-out"
                      style={{ width: inView ? `${s.level}%` : '0%', transitionDelay: `${i * 80}ms` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-vice-cyan w-8 text-right">{s.level}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-vice-cream/10">
              <p className="font-wide text-vice-cream/50 text-[10px] tracking-widest mb-3">ACHIEVEMENTS UNLOCKED</p>
              <div className="flex flex-wrap gap-2">
                {['First Deploy', '100 Day Streak', 'Zero Downtime', 'Open Source Hero', 'Bug Squasher', 'Night Owl'].map((a) => (
                  <span key={a} className="px-2 py-1 border border-vice-sun/40 font-wide text-[10px] tracking-widest text-vice-sun">
                    ★ {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TIMELINE / RAP SHEET
   ============================================================ */

function Timeline() {
  return (
    <section id="timeline" className="relative py-24 bg-gradient-to-b from-vice-deep via-vice-night to-vice-deep overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          kicker="FILE #004 · RAP SHEET"
          title="THE RECORD"
          sub="A history of jobs, taken down in chronological order. Sealed by the court."
        />
        <div className="relative">
          {/* center line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-vice-pink via-vice-cyan to-vice-sun sm:-translate-x-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`relative flex sm:items-center gap-6 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="hidden sm:block sm:w-1/2" />
                <div className="absolute left-4 sm:left-1/2 top-2 sm:top-1/2 w-4 h-4 -translate-x-1/2 sm:-translate-y-1/2 rotate-45 bg-vice-pink shadow-neon z-10" />
                <div className={`flex-1 sm:w-1/2 pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className="hud-panel border border-vice-cyan/30 p-5 inline-block w-full">
                    <p className="font-display text-3xl neon-sun text-stroke-dark">{t.year}</p>
                    <h3 className="font-wide tracking-widest text-vice-pink text-sm mt-1">{t.title}</h3>
                    <p className="font-body text-sm text-vice-cream/70 mt-2">{t.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', job: '' });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-vice-deep overflow-hidden">
      <div className="absolute inset-0 vice-grid opacity-10" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <SectionHead
          kicker="FILE #005 · OPEN CHANNEL"
          title="PLAN A JOB"
          sub="Got a heist that needs a crew? Send the brief. Encrypted lines only."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="hud-panel border border-vice-pink/30 p-6 sm:p-8">
            <h3 className="font-display text-2xl text-vice-pink mb-4">SEND THE BRIEF</h3>
            {sent ? (
              <div className="py-12 text-center">
                <Trophy className="w-12 h-12 text-vice-sun mx-auto mb-4" />
                <p className="font-display text-2xl neon-cyan">JOB ACCEPTED</p>
                <p className="font-body text-vice-cream/70 mt-2 text-sm">
                  The crew will be in touch within 24 hours. Check your burner phone.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', job: '' }); }} className="mt-6 font-wide text-xs tracking-widest text-vice-cyan hover:text-vice-pink">
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Field label="CODENAME / NAME">
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="vice-input"
                    placeholder="Tommy Vercetti"
                  />
                </Field>
                <Field label="CONTACT FREQUENCY">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="vice-input"
                    placeholder="tommy@vercetti.co"
                  />
                </Field>
                <Field label="THE JOB">
                  <textarea
                    value={form.job}
                    onChange={(e) => setForm({ ...form, job: e.target.value })}
                    className="vice-input min-h-[120px] resize-none"
                    placeholder="Describe the score. Timeline, budget, crew size, what needs to disappear..."
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full py-3 bg-vice-pink text-vice-deep font-wide tracking-widest text-sm shadow-neon hover:bg-vice-hot transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> TRANSMIT
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <ContactCard icon={Mail} label="EMAIL" value="hello@vice.dev" href="mailto:hello@vice.dev" accent="pink" />
            <ContactCard icon={Phone} label="BURNER LINE" value="+1 (305) 867-5309" href="tel:+13058675309" accent="cyan" />
            <ContactCard icon={Github} label="GITHUB" value="github.com/yourname" href="#" accent="sun" />
            <ContactCard icon={Linkedin} label="LINKEDIN" value="linkedin.com/in/yourname" href="#" accent="pink" />
            <div className="hud-panel border border-vice-cyan/30 p-5">
              <p className="font-wide text-vice-cream/50 text-[10px] tracking-widest mb-2">CURRENT STATUS</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-vice-aqua animate-pulse" />
                <span className="font-body text-vice-cream/90 text-sm">Available · Taking new jobs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-wide text-vice-cream/60 text-[10px] tracking-widest block mb-1">{label}</span>
      {children}
    </label>
  );
}

function ContactCard({ icon: Icon, label, value, href, accent }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  accent: 'pink' | 'cyan' | 'sun';
}) {
  const colors = {
    pink: 'border-vice-pink/40 text-vice-pink',
    cyan: 'border-vice-cyan/40 text-vice-cyan',
    sun: 'border-vice-sun/40 text-vice-sun',
  };
  return (
    <a href={href} className={`hud-panel ${colors[accent]} border p-5 flex items-center gap-4 heist-card group`}>
      <Icon className="w-6 h-6 shrink-0" />
      <div>
        <p className="font-wide text-vice-cream/50 text-[10px] tracking-widest">{label}</p>
        <p className="font-mono text-sm text-vice-cream/90 group-hover:text-vice-cyan transition">{value}</p>
      </div>
    </a>
  );
}

/* ============================================================
   RADIO + TICKER + FOOTER
   ============================================================ */

function RadioStation() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(false);
  const r = RADIOS[active];
  return (
    <div className="hud-panel border-y border-vice-cyan/30 px-4 sm:px-8 py-4">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setMuted(!muted)} className="w-10 h-10 border border-vice-pink/40 text-vice-pink flex items-center justify-center hover:bg-vice-pink hover:text-vice-deep transition">
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <Radio className="w-6 h-6 text-vice-cyan animate-pulse-star" />
          <div>
            <p className="font-display text-xl" style={{ color: r.color, textShadow: `0 0 12px ${r.color}` }}>{r.name}</p>
            <p className="font-mono text-[10px] text-vice-cream/50">{r.freq} FM · {r.genre}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {RADIOS.map((rad, i) => (
            <button
              key={rad.name}
              onClick={() => { setActive(i); setMuted(false); }}
              className={`px-3 py-1.5 font-wide text-[10px] tracking-widest border transition ${
                i === active
                  ? 'border-vice-pink text-vice-pink bg-vice-pink/10'
                  : 'border-vice-cream/20 text-vice-cream/50 hover:border-vice-cyan hover:text-vice-cyan'
              }`}
            >
              {rad.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Ticker() {
  const items = useMemo(() => [...TICKER, ...TICKER], []);
  return (
    <div className="bg-vice-pink text-vice-deep overflow-hidden border-y-2 border-vice-deep">
      <div className="marquee-track animate-marquee py-2">
        {items.map((t, i) => (
          <span key={i} className="font-wide tracking-widest text-xs px-6 inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-vice-deep rounded-full" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative vice-sky overflow-hidden scanlines">
      <div className="absolute inset-x-0 bottom-0 h-1/2 vice-grid opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-vice-deep to-transparent" />
      <PalmTree className="absolute bottom-0 left-4 w-32 palm-shadow" />
      <PalmTree className="absolute bottom-0 right-4 w-32 palm-shadow -scale-x-100" />
      <div className="relative z-10 px-6 py-16 text-center">
        <p className="font-wide tracking-[0.5em] text-vice-cyan text-xs mb-3 animate-flicker">END OF TRANSMISSION</p>
        <h2 className="font-display text-5xl sm:text-7xl neon-pink text-stroke-dark">VICE.DEV</h2>
        <p className="mt-4 font-body text-vice-cream/70 text-sm max-w-md mx-auto">
          Built in Vice City. No pixels were harmed in the making of this portfolio.
        </p>
        <p className="mt-6 font-mono text-vice-cream/40 text-xs">
          © {new Date().getFullYear()} · A fictional GTA-themed tribute · Not affiliated with Rockstar Games
        </p>
      </div>
    </footer>
  );
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [loading, setLoading] = useState(true);
  const [money] = useState(1_250_000);
  const active = useScrollSpy(['hero', 'about', 'heists', 'stats', 'timeline', 'contact']);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-vice-deep scanlines vhs">
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <HUD wanted={5} money={money} />
      <Nav active={active} onJump={jump} />
      <main>
        <Hero onJump={jump} />
        <Ticker />
        <About />
        <Heists />
        <Stats />
        <Timeline />
        <RadioStation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
