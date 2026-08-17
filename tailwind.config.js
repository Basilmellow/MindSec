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
          canvas: "#050608",
          surface: "#0D0E12",
          surface2: "#14151A",
          card: "#121318",
          border: "#22242C",
          border2: "#353742",
        },
        primary: "#FAF8F5",
        secondary: "#9E9A93",
        muted: "#68645D",
        cyan: {
          accent: "#FF5722", // Burnt Orange primary accent mapping
          glow: "rgba(255, 87, 34, 0.25)",
        },
        orange: {
          accent: "#FF5722", // Burnt Orange
          deep: "#E64A19",
          glow: "rgba(255, 87, 34, 0.25)",
        },
        amber: {
          accent: "#E5A93C", // Muted Amber
          glow: "rgba(229, 169, 60, 0.2)",
        },
        alert: {
          critical: "#F44336",
          high: "#FF5722",
          medium: "#E5A93C",
          low: "#4CAF50",
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
