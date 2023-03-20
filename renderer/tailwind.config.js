/** @type {import('tailwindcss').Config} */
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
        },
        "shake": {
          "10%":{
            transform: "translate3d(-1px, 0, 0)",
          },
          
          "20%":{
            transform: "translate3d(2px, 0, 0)",
          },
        
          "30%":{
            transform: "translate3d(-4px, 0, 0)",
          },
        
          "40%":{
            transform: "translate3d(4px, 0, 0)",
          },

          "50%":{
            transform: "translate3d(-4px, 0, 0)",
          },
        
          "60%":{
            transform: "translate3d(4px, 0, 0)",
          },

          "70%":{
            transform: "translate3d(4px, 0, 0)",
          },

          "80%":{
            transform: "translate3d(2px, 0, 0)",
          },

          "90%":{
            transform: "translate3d(-1px, 0, 0)",
          },
          
        },
        "scale": {
          from: { transform: 'scale(0)'},
          to: { transform: 'scale(1)'},
        }
      },
      animation: {
        'slow-appear': 'slow-appear 0.25s linear',
        "slow-appear-no-opacity": 'slow-appear-no-opacity 0.25s linear',
        'one-roll': 'roll .25s linear',
        'fast-shake': 'shake .25s linear',
        'scale': 'scale .12s linear',
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    }
  },
  plugins:[
    require('@tailwindcss/container-queries'),
  ],
};
