/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
          'text': 'var(--text)',
          'background': 'var(--background)',
          'borderC': 'var(--borderColor)',
          'primary': 'var(--primary)',
          'secondary': 'var(--secondary)',
          'accent': 'var(--accent)',
        },      
    },
  },
  plugins: [],
}

