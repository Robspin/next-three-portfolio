module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F2F2F2",
        tertiary: "#000000",
        tint: "#dc2626"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        pound: 'pound 1s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        pound: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
