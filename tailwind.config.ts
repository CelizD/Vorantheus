import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#050816',
        navy: '#071B3A',
        electric: '#0B84F3',
        voBlue: '#2563EB',
        voGray: '#94A3B8',
        voPurple: '#7C3AED',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'electric': '0 0 20px rgba(11, 132, 243, 0.4)',
        'electric-lg': '0 0 40px rgba(11, 132, 243, 0.3)',
        'purple': '0 0 20px rgba(124, 58, 237, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(11, 132, 243, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(11, 132, 243, 0.6)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
