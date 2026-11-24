import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7', // vibrant medical cyan-blue
          600: '#0369a1', // primary medical blue
          700: '#075985',
          800: '#0c4a6e', // deep navy
          900: '#082f49',
          950: '#031a2b',
        },
        tealAccent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // soft medical teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        clinicDark: '#0f172a',
        clinicSlate: '#475569',
        clinicMuted: '#64748b',
        clinicBg: '#f8fafc',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(12, 74, 110, 0.06), 0 2px 6px -1px rgba(12, 74, 110, 0.04)',
        'premium': '0 10px 30px -5px rgba(3, 105, 161, 0.08), 0 4px 12px -2px rgba(3, 105, 161, 0.05)',
        'elevated': '0 20px 40px -10px rgba(8, 47, 73, 0.12), 0 8px 16px -4px rgba(8, 47, 73, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

