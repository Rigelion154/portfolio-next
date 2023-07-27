/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--primary)'],
      secondary: ['var(--secondary)'],
      tertiary: ['var(--tertiary)'],
      logo: ['var(--logo)'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#c21aff',
      },
      backgroundImage: {
        site: "url('/site-bg.jpg')",
      },
    },
  },
  plugins: [],
}
