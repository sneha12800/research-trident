/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#253991',
          dark: '#1A286B',
        },
        secondary: '#121212',
        accent: '#FBBC05',
        'bg-light': '#F9FAFB',
        'bg-cream': '#FDF8EE',
        'text-dark': '#1A1A1A',
        'text-light': '#4B5563',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
