import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          50: '#fdf4f5',
          100: '#fce7eb',
          200: '#fad1d9',
          300: '#f7aab7',
          400: '#f27a91',
          500: '#e74c6b',
          600: '#d1305b',
          700: '#b0234d',
          800: '#932047',
          900: '#7d1f42',
        },
        champagne: {
          50: '#faf8f3',
          100: '#f5f0e3',
          200: '#e9dfc5',
          300: '#dcc89f',
          400: '#ceac77',
          500: '#c4955c',
          600: '#b78350',
          700: '#986a43',
          800: '#7c563b',
          900: '#654732',
        },
        cream: {
          50: '#fffbed',
          100: '#f7f4e6',
          200: '#f0ede0',
          300: '#e8e4d5',
          400: '#ddd9c8',
          500: '#d1ccbb',
          600: '#b8b3a4',
          700: '#9e998c',
          800: '#857f74',
          900: '#6c665d',
        },
        sage: {
          50: '#f5f6f5',
          100: '#e8e9e7',
          200: '#d1d3cf',
          300: '#b0b3ad',
          400: '#8f938b',
          500: '#717561',
          600: '#5a5e4d',
          700: '#4a4d3f',
          800: '#3e4034',
          900: '#32342a',
        },
      },
      fontFamily: {
        serif: ['Libre Caslon Text', 'Playfair Display', 'serif'],
        display: ['Libre Caslon Condensed Variable', 'Libre Caslon Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
