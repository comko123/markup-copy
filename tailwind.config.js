/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: { vxs: ["8px"] },
      gridTemplateColumns:
      {
        'betch': '95% 45%',
        'remix': '30% 70%'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
