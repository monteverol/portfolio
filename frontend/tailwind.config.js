/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        cc_bg: 'var(--cc-bg)',
        button_bg: 'var(--button-bg)',
        icon: 'var(--icon)',
      },
      borderRadius: {
        large: '2rem',
      },
      dropShadow: {
        'general': '2px 2px 1px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
