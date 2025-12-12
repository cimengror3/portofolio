/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0d0d0d',
        'dark-secondary': '#1a1a1a',
        'purple-neon': '#8b5cf6',
        'blue-neon': '#3b82f6',
        'soft-white': '#f3f4f6',
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-soft': '0 0 30px rgba(139, 92, 246, 0.2)',
        'depth': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}

