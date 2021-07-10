module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        grow: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '25%, 75%': { transform: 'scaleX(0.95)' },
          '50%': { transform: 'scaleX(0.8)' },
        },
      },
      animation: {
        grow: 'grow 3s linear infinite'
      },
      boxShadow: {
        accent: '5px 0px 0px 0px rgba(139,92,246,1)'
      },
      colors: {
        accent: '#8b5cf6'
      },
      zIndex: {
        '-10': '-10'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['group-hover']
    },
  },
  plugins: [],
}
