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
        'dark': '#0a0a0a', // Slightly darker for better contrast
        'dark-secondary': '#121212',
        'border': '#1e293b', // Blue-tinted border
        'blue-primary': '#3b82f6', // Electric Blue
        'blue-secondary': '#2563eb', // Deeper Blue
        'cyan-accent': '#06b6d4', // Cyan for gradients
        'soft-white': '#f3f4f6',
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.4)',
        'glow-soft': '0 0 40px rgba(59, 130, 246, 0.2)',
        'depth': '0 25px 80px -15px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}

