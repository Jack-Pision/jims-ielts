import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#041A0C',
        'dark-emerald': '#063020',
        'mid-green': '#0C4A28',
        'soft-white': '#F5F9F6',
        'brand-gold': '#D4A843',
        'light-gold': '#F0D080',
        'bright-lime': '#3AE880',
      },
      fontFamily: {
        'display': ['var(--font-instrument-serif)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 4s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'count-up': 'countUp 1.5s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
