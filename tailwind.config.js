/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        active: '#42b983',
        linkDefault: '#2c3e50',
      },
    },
  },
  plugins: [],
};
