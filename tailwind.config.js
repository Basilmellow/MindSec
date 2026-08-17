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
          canvas: "#08090C",
          surface: "#101319",
          surface2: "#151921",
          card: "#12161B",
          border: "#252A31",
          border2: "#3A414D",
        },
        primary: "#F2F2EE",
        secondary: "#9299A3",
        muted: "#636A75",
        cyan: {
          accent: "#F97316", // Mapped to Burnt Orange for backward compatibility
          glow: "rgba(249, 115, 22, 0.25)",
        },
        orange: {
          accent: "#F97316", // Primary Accent: Burnt Orange
          hover: "#FB923C",
          dark: "#C2410C",
          glow: "rgba(249, 115, 22, 0.25)",
        },
        amber: {
          accent: "#D6A15D", // Secondary Warm Accent
          glow: "rgba(214, 161, 93, 0.2)",
        },
        alert: {
          critical: "#EF4444",
          high: "#F97316",
          medium: "#D6A15D",
          low: "#10B981",
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
