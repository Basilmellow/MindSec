/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          canvas: "#07090D",
          surface: "#0D1117",
          card: "#11161D",
          border: "#202833",
        },
        primary: "#F2F5F7",
        secondary: "#8A96A3",
        cyan: {
          accent: "#00E5FF",
          glow: "rgba(0, 229, 255, 0.15)",
        },
        blue: {
          accent: "#3B82F6",
        },
        alert: {
          critical: "#FF3366",
          high: "#FF6B00",
          medium: "#EAB308",
          low: "#22C55E",
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
