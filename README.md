# Modern Interactive Portfolio

A high-performance, dark-mode software engineering portfolio web application built with Next.js (App Router), React, TypeScript, and modern UI animation technologies. Designed with responsive layouts, fluid inertial scrolling, and interactive engineering showcase modules.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS Design Tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation & Graphics**:
  - [Lenis](https://lenis.darkroom.engineering/) — Smooth inertial scrolling
  - [Lottie React](https://github.com/Gamote/lottie-react) — Interactive vector animations
  - Custom Canvas ASCII scene rendering
- **Component Primitives**: Base UI (`@base-ui/react`), Class Variance Authority (`cva`), `clsx`, `tailwind-merge`
- **Analytics**: Vercel Analytics

---

## ✨ Key Functionalities & Features

1. **Interactive Entry Loader**:
   - Audio-reactive loading transition with audio playback toggle and staged loading sequence before page reveal.

2. **Hero Presentation**:
   - Clean typographic layout featuring live status badges, dynamic call-to-actions, and quick navigational links.

3. **Smooth Inertial Scrolling**:
   - Global Lenis integration for momentum-based scrolling across desktop and mobile devices.

4. **Dynamic ASCII Canvas Scene**:
   - Real-time ASCII aesthetic visual component rendered directly on HTML5 Canvas.

5. **Engineering Capabilities & Philosophy**:
   - Modular breakdown of core technical specializations across full-stack architecture, distributed systems, and AI engineering.

6. **Interactive Skills Matrix**:
   - Categorized technical stack indicators (Languages, Frameworks, Cloud/DevOps, Databases, Tools) with proficiency tags.

7. **Experience & Career Timeline**:
   - Chronological engineering roles detailing system impact, responsibilities, and delivered architectural improvements.

8. **Quantitative Metrics Showcase**:
   - Key engineering metrics (precision benchmarks, system throughput, and operational milestones).

9. **Enterprise Simulation Tracks**:
   - Dedicated modules highlighting completed enterprise-grade simulations and real-world system architecture projects.

10. **Curated Projects Showcase**:
    - Project cards with live demo links, repository links, architectural highlights, and technology tags.

11. **Verified Proofs & Credentials**:
    - Repository of certifications, academic qualifications, and research publications with inline preview capabilities.

12. **Contact & Socials Hub**:
    - Reachability section with direct messaging endpoints and platform links.

13. **Responsive Navigation**:
    - Glassmorphic floating header with active scroll-spy section tracking and responsive mobile drawer navigation.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rosnnn/rosn-portfolio.git
   cd rosn-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```
