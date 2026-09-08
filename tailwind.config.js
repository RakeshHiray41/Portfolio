/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        blueprint: "var(--color-blueprint)",
        signal: "var(--color-signal)",
        card: "var(--color-card)",
        sage: "var(--color-sage)",
        plum: "var(--color-plum)",
        teal: "var(--color-teal)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        rise: {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-1": "rise 0.6s ease both",
        "rise-2": "rise 0.6s ease 0.12s both",
        "rise-3": "rise 0.6s ease 0.24s both",
      },
    },
  },
  plugins: [],
};
