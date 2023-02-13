const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
    './renderer/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        "slow-appear": {
          '0%': { transform: 'scale(0.1, 1)', transform: 'translate(-5%, 0)', opacity: "0.1" },
          '100%': { transform: 'scale(1, 1)', transform: 'translate(0, 0)', opacity: "1" },
        },
        "slow-appear-no-opacity": {
          '0%': { transform: 'scale(0.1, 1)', transform: 'translate(-5%, 0)'},
          '100%': { transform: 'scale(1, 1)', transform: 'translate(0, 0)'},
        },
        "roll": {
          from: { transform: 'rotate(0deg)'},
          to: { transform: 'rotate(-360deg)'},
        }
      },
      animation: {
        'slow-appear': 'slow-appear 0.25s linear',
        "slow-appear-no-opacity": 'slow-appear-no-opacity 0.25s linear',
        'one-roll': 'roll .25s linear'
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    }
  },
  plugins: [],
};
