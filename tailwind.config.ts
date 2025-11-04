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
        pixel: {
          // Pacman Arcade Theme - สีสดใส
          yellow: '#FFE135',      // Pacman Yellow
          orange: '#FF9F1C',      // Ghost Orange  
          blue: '#2EC4B6',        // Cyan Ghost
          pink: '#FF6B9D',        // Pink Ghost
          red: '#FF3864',         // Red Ghost
          purple: '#9B5DE5',      // Purple accent
          green: '#00F5D4',       // Green accent
          dark: '#1A1423',        // Deep purple-black
          darker: '#0D0A14',      // Darkest
          card: '#2D1B47',        // Card background
          light: '#FFF9E6',       // Light cream
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'pixel-shake': 'pixelShake 0.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pixelShake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate(-2px, 2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translate(2px, -2px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

