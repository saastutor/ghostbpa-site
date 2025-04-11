/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',  // Process all HTML files
    './js/**/*.js'  // Process all JS files in js directory
  ],
  theme: {
    extend: {
      colors: {
        'ghost-purple': '#8B5CF6',
        'ghost-dark': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      gradientColorStops: {
        'gray-50': '#F9FAFB',
      },
    }
  },
  plugins: [],
  safelist: [
    'text-ghost-purple',
    'bg-ghost-purple',
    'hover:bg-purple-700',
    'border-ghost-purple',
    'text-ghost-dark',
    'bg-ghost-dark',
    'neon-purple',
    'bg-neon-purple',
    'hover:text-ghost-purple',
    'hover:bg-purple-50'
  ]
} 