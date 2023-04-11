/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {fontSize:{vxs:["8px"]}
  }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
