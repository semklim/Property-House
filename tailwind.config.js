/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        milky: 'var(--white-milky)',
        lightGray: 'var(--light-grey)',
        greyPr: 'var(--grey)',
        redPr: {
          DEFAULT: 'var(--red)',
          "80": 'var(--red80)'
        },
        blackPr: 'var(--black)'
      }
    },
  },
  plugins: [],
};
