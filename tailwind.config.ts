import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // New premium palette
        carbon: '#000000',
        smoke: '#F5F5F7',
        ink: '#1D1D1F',
        muted: '#6E6E73',
        voBlue: '#0071E3',
        voBlueHover: '#0077ED',
        // Keep existing
        navy: '#071B3A',
        electric: '#0B84F3',
        voPurple: '#7C3AED',
        voGray: '#94A3B8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'electric': '0 0 20px rgba(11, 132, 243, 0.4)',
        'electric-lg': '0 0 40px rgba(11, 132, 243, 0.3)',
        'purple': '0 0 20px rgba(124, 58, 237, 0.4)',
        'soft': '0 2px 20px rgba(0,0,0,0.08)',
        'medium': '0 4px 40px rgba(0,0,0,0.12)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)',
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
