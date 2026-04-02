/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "accent-yellow": "var(--accent-yellow)",
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)",
        "bg-page": "var(--bg-page)",
        "bg-card": "var(--bg-card)",
        "bg-muted": "var(--bg-muted)",
        "text-main": "var(--text-main)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
      },
      boxShadow: {
        card: "var(--shadow)",
      },
      borderRadius: {
        default: "var(--radius)",
        sm: "var(--radius-sm)",
      },
    },
  },
  plugins: [],
}