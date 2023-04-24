/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors: {
        deep: {
          0: '#284ac7',
          50: '#15286d',
          100: '#0b153b',
        },
        tasman: {
          0: '#e4f3f7',
          50: '#c3d0d4'
        }
      }
    },
  },
  plugins: [],
}
