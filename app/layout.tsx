import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Bebas_Neue, JetBrains_Mono, Inter_Tight } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: 'Roshan Kumar Jha — Full-Stack Software Engineer',
  description:
    'Full-stack software engineer building production web, mobile, and AI/ML systems with React, Flutter, Node.js, FastAPI and Python. Published ML researcher.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.jpg',
        type: 'image/jpeg',
      },
    ],
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#221a33',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} ${interTight.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
