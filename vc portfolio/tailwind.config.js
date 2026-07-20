/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vice: {
          pink: '#ff2d95',
          hot: '#ff1a8c',
          magenta: '#d63384',
          cyan: '#00e5ff',
          aqua: '#1de9b6',
          sun: '#ffb703',
          orange: '#ff6b35',
          dusk: '#7b2ff7',
          night: '#0a0a1a',
          deep: '#050511',
          cream: '#fff4e6',
          sand: '#f6c89f',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        wide: ['Bebas Neue', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
        body: ['Inter', 'sans-serif'],
        neon: ['Monoton', 'cursive'],
      },
      boxShadow: {
        neon: '0 0 5px #ff2d95, 0 0 20px #ff2d95, 0 0 40px rgba(255,45,149,0.5)',
        'neon-cyan': '0 0 5px #00e5ff, 0 0 20px #00e5ff, 0 0 40px rgba(0,229,255,0.5)',
        'neon-sun': '0 0 5px #ffb703, 0 0 20px #ffb703, 0 0 40px rgba(255,183,3,0.5)',
      },
      animation: {
        flicker: 'flicker 6s ease-in-out infinite',
        scan: 'scan 8s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'pulse-star': 'pulseStar 1.8s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'drive-by': 'driveBy 18s linear infinite',
        'sunset': 'sunset 20s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '47%': { opacity: '0.85' },
          '50%': { opacity: '0.95' },
          '53%': { opacity: '0.85' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseStar: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        driveBy: {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(130%)' },
        },
        sunset: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
